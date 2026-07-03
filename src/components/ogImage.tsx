import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

// Shared branded social card renderer (OpenGraph + Twitter). Uses only
// Satori-supported CSS (linear-gradient, solid blocks, opacity).
export function renderOgImage() {
  const green = "#30c555";
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #05070c 0%, #081310 55%, #05070c 100%)",
          padding: "72px",
          fontFamily: "sans-serif",
          color: "#f4f5f7",
          position: "relative",
        }}
      >
        {/* green accent glow block, top-right */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-80px",
            width: "420px",
            height: "420px",
            borderRadius: "9999px",
            background: green,
            opacity: 0.16,
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "56px",
              height: "8px",
              background: green,
              borderRadius: "4px",
            }}
          />
          <div
            style={{
              fontSize: "26px",
              letterSpacing: "8px",
              textTransform: "uppercase",
              color: green,
              fontWeight: 700,
            }}
          >
            AI Engineer · Full-Stack SWE
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ fontSize: "104px", fontWeight: 800, lineHeight: 1.02 }}>
            Harish Chaurasia
          </div>
          <div
            style={{
              fontSize: "38px",
              color: "#aab2c0",
              maxWidth: "900px",
              lineHeight: 1.25,
            }}
          >
            Building AI agents, MCP servers, RL environments, and applied LLM
            systems.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "28px",
            color: "#8b93a1",
          }}
        >
          <div style={{ fontFamily: "monospace", color: green }}>
            {"< build · ship · iterate />"}
          </div>
          <div>MS CS (AI/ML)</div>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
