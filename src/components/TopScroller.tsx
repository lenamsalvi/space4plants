// src/components/TopScroller.tsx
"use client";
import React from "react";

export default function TopScroller() {
  const items = Array.from({ length: 10 }, (_, i) => ({
    label: `Preview ${i + 1}`,
  }));

  return (
    <div
      className="infinite-hide-scroll"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div
        className="marquee"
        style={{
          display: "flex",
          gap: 48,
          alignItems: "center",
          whiteSpace: "nowrap",
        }}
      >
        {[...Array(3)].map((_, copyIndex) =>
          items.map((it, idx) => (
            <div
              key={`${copyIndex}-${idx}`}
              style={{
                width: 220,
                height: 130,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg,#f2f2f2,#e8e8e8)",
                border: "1px solid #ddd",
                borderRadius: 8,
                fontSize: 12,
                color: "#666",
              }}
            >
              {it.label}
            </div>
          ))
        )}
      </div>

      <style jsx>{`
        .infinite-hide-scroll {
          mask-image: linear-gradient(
            90deg,
            transparent,
            black 8%,
            black 92%,
            transparent
          );
        }
        .marquee {
          width: max-content;
          animation: marquee 60s linear infinite;
        }
        .infinite-hide-scroll:hover .marquee {
          animation-play-state: paused;
        }
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </div>
  );
}
