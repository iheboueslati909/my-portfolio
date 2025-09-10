// Badge.tsx
import React from "react";
// import "./badge.css";

type BadgeProps = {
  text: string;
  variant?: "primary" | "dark" | "muted";
  title?: string; // for accessibility/hover
};

export default function Badge({ text, variant = "primary", title }: BadgeProps) {
  return (
    <span className={`app-badge app-badge--${variant}`} title={title ?? text} aria-label={text}>
      {text}
    </span>
  );
}
