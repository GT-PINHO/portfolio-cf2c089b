import { ImageResponse } from "next/og";

export const alt = "David Pinho · Gestor de Tráfego Pago · Meta Ads";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0f0f0f",
          padding: "64px 72px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#06b6d4",
          }}
        >
          David Pinho
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 52,
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#f5f5f5",
              maxWidth: 900,
            }}
          >
            Meta Ads em escala nacional, com o lead chegando inteiro no comercial.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#8f959e",
              maxWidth: 720,
            }}
          >
            Gestor de Tráfego Pago · Meta Ads e sistemas com IA
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 28,
            fontSize: 20,
            color: "#d2d6db",
          }}
        >
          <span>R$ 68-98 mil/semana</span>
          <span>·</span>
          <span>20-30 mil leads/mês</span>
          <span>·</span>
          <span>CLT / PJ remoto</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
