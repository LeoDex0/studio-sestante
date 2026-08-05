import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f9c93",
          borderRadius: "50%",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
          <path
            d="M16 4c-2.4 0-3.7 1.1-5 1.1-1.9 0-3.6-1.1-5.7-1.1C3.1 4 1.5 6.6 1.9 10c.5 4.4 2.1 8 3.4 11.6.9 2.5 1.7 5.4 3.6 5.4 2.1 0 2-3.9 2.7-6.6.5-1.9 1.1-3.3 2.4-3.3s1.9 1.4 2.4 3.3c.7 2.7.6 6.6 2.7 6.6 1.9 0 2.7-2.9 3.6-5.4 1.3-3.6 2.9-7.2 3.4-11.6.4-3.4-1.2-6-3.4-6-2.1 0-3.8 1.1-5.7 1.1-1.3 0-2.6-1.1-5-1.1Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
