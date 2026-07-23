import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "SellerTools.id";
  const subtitle =
    searchParams.get("subtitle") ??
    "AI Reply Otomatis untuk Shopee Seller Center";
  const chip = searchParams.get("chip") ?? "SellerTools";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1d4ed8 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              background: "rgba(59,130,246,0.3)",
              border: "1px solid rgba(59,130,246,0.5)",
              borderRadius: "100px",
              padding: "8px 20px",
              color: "#93c5fd",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            {chip}
          </div>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: title.length > 40 ? "52px" : "64px",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            {title.length > 70 ? title.slice(0, 70) + "…" : title}
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#93c5fd",
              maxWidth: "800px",
              lineHeight: 1.4,
            }}
          >
            {subtitle.length > 100 ? subtitle.slice(0, 100) + "…" : subtitle}
          </div>
        </div>

        {/* Bottom brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                background: "#2563eb",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: 800,
                fontSize: "18px",
              }}
            >
              ST
            </div>
            <span
              style={{ color: "white", fontWeight: 700, fontSize: "22px" }}
            >
              SellerTools.id
            </span>
          </div>
          <div style={{ color: "#64748b", fontSize: "18px" }}>
            sellertools.id
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control":
          "public, max-age=604800, stale-while-revalidate=2592000",
      },
    }
  );
}
