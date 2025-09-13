import { NextRequest, NextResponse } from "next/server";

const CLIENT_ID = process.env.SOUNDCLOUD_CLIENT_ID!;
const CLIENT_SECRET = process.env.SOUNDCLOUD_CLIENT_SECRET!;

let cachedToken = "";
let tokenExpiry = 0;

interface Transcoding {
  url: string;
  format: {
    protocol: string;
    mime_type?: string;
  };
}

async function getAccessToken() {
  if (cachedToken && Date.now() < tokenExpiry) return cachedToken;

  const resp = await fetch("https://api.soundcloud.com/oauth2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }),
  });

  if (!resp.ok) throw new Error("Failed to get SoundCloud token");
  const json = await resp.json();

  cachedToken = json.access_token;
  tokenExpiry = Date.now() + json.expires_in * 1000;
  return cachedToken;
}

export async function GET(req: NextRequest) {
  const trackUrl = req.nextUrl.searchParams.get("url");
  if (!trackUrl) return new Response("Missing url", { status: 400 });

  const token = await getAccessToken();

  // Step 1: Resolve track
  const resolveRes = await fetch(
    `https://api.soundcloud.com/resolve?url=${encodeURIComponent(trackUrl)}`,
    { headers: { Authorization: `OAuth ${token}` } }
  );
  if (!resolveRes.ok) {
    return new Response("Failed to resolve track", { status: 500 });
  }
  const track = await resolveRes.json();

  let streamUrl: string | null = null;

  // Step 2: Try modern way → media.transcodings
  if (track.media?.transcodings) {
const transcoding = (track.media?.transcodings as Transcoding[] | undefined)?.find(
  (t) => t.format.protocol === "progressive"
);
    if (transcoding) {
      const transcodeRes = await fetch(transcoding.url, {
        headers: { Authorization: `OAuth ${token}` },
      });
      if (transcodeRes.ok) {
        const { url } = await transcodeRes.json();
        streamUrl = url;
      }
    }
  }

  // Step 3: Fallback → /tracks/{id}/stream with OAuth
  if (!streamUrl && track.id) {
    const fallbackRes = await fetch(
      `https://api.soundcloud.com/tracks/${track.id}/stream`,
      { headers: { Authorization: `OAuth ${token}` }, redirect: "follow" }
    );

    if (fallbackRes.ok) {
      // follow() means .url should be final redirected URL
      streamUrl = fallbackRes.url;
    }
  }

  if (!streamUrl) {
    return new Response("No playable stream found", { status: 404 });
  }

  return NextResponse.json({ streamUrl });
}
