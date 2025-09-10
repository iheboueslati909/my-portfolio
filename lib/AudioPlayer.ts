class AudioPlayer {
  private audio: HTMLAudioElement | null = null;
  private currentTrackId: string | null = null;
  private onProgressCallback: ((progress: number) => void) | null = null;
  private interval: number | null = null; // <-- number, not NodeJS.Timer

  play(trackId: string, streamUrl: string, onProgress: (progress: number) => void) {
    // Stop previous track if different
    if (this.audio && this.currentTrackId !== trackId) {
      this.audio.pause();
      this.audio = null;
      if (this.interval !== null) {
        clearInterval(this.interval);
        this.interval = null;
      }
    }

    if (!this.audio) {
      this.audio = new Audio(streamUrl);
      this.currentTrackId = trackId;
      this.onProgressCallback = onProgress;

      this.audio.play();

      this.interval = window.setInterval(() => {
        if (this.audio && this.audio.duration) {
          this.onProgressCallback?.(
            (this.audio.currentTime / this.audio.duration) * 100
          );
        }
      }, 500);

      this.audio.onended = () => {
        this.currentTrackId = null;
        this.audio = null;
        if (this.interval !== null) {
          clearInterval(this.interval);
          this.interval = null;
        }
        this.onProgressCallback?.(0);
      };
    } else if (this.audio.paused) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }

  pause() {
    if (this.audio) this.audio.pause();
    if (this.interval !== null) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  seek(progress: number) {
    if (this.audio && this.audio.duration) {
      this.audio.currentTime = (progress / 100) * this.audio.duration;
    }
  }

  getCurrentTrackId() {
    return this.currentTrackId;
  }

  getAudio() {
    return this.audio;
  }
}

export default new AudioPlayer();
