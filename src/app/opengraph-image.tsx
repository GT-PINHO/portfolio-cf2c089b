import { ImageResponse } from "next/og";

export const alt = "David Pinho, Gestor de Tráfego Pago e MarTech";
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
          background: "#101114",
          color: "#ffffff",
          padding: "70px 78px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, fontWeight: 700 }}>
          DAVID PINHO
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              maxWidth: 980,
              fontSize: 66,
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: "-0.05em",
            }}
          >
            Mídia, dados e automação para crescer com clareza.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "#b7b7b4",
            }}
          >
            Gestor de Tráfego Pago e MarTech
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#d5d5d2",
          }}
        >
          Meta Ads · Tracking · Growth Ops
        </div>
      </div>
    ),
    { ...size },
  );
}
