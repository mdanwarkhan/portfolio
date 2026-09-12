import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#eab308" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="16" fill="#0b1220" />
        <rect x="6" y="6" width="52" height="52" rx="14" fill="url(#bg)" />
        <path
          d="M18 20.5h8.2L32 31.7l5.8-11.2H46L34.8 43.5H29.2L18 20.5Z"
          fill="#0b1220"
        />
        <path d="M19 44h26v4.5H19z" fill="#0b1220" opacity="0.92" />
      </svg>
    ),
    { ...size }
  );
}
