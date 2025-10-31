// src/components/PostContent.tsx
"use client";
type Block =
  | { type: "p"; text: string }
  | { type: "noindent"; text: string }
  | { type: "title"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "img"; src: string; alt?: string }
  | { type: "caption"; text: string }
  | { type: "audio"; src: string; caption?: string };

export default function PostContent({ blocks }: { blocks: Block[] }) {
  return (
    <div>
      {blocks.map((b, i) => {
        if (b.type === "p") {
          return (
            <p
              key={i}
              style={{
                margin: "0 0 0.5rem",
                lineHeight: 1.6,
                textIndent: "2em",
              }}
            >
              {b.text}
            </p>
          );
        }
        if (b.type === "img") {
          return (
            <img
              key={i}
              src={b.src}
              alt={b.alt ?? ""}
              style={{
                display: "block",
                margin: "1rem auto 0.25rem",
                maxWidth: "min(100%, 720px)",
                height: "auto",
                borderRadius: 8,
              }}
            />
          );
        }
        if (b.type === "title") {
          return (
            <h2
              key={i}
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                margin: "1.5rem 0 0.5rem",
              }}
            >
              {b.text}
            </h2>
          );
        }
        if (b.type === "noindent") {
          return (
            <p
              key={i}
              style={{
                margin: "0 0 0.5rem",
                lineHeight: 1.6,
              }}
            >
              {b.text}
            </p>
          );
        }
        if (b.type === "ul") {
          return (
            <ul
              key={i}
              style={{
                maxWidth: "600px",
                margin: "0.5rem auto",
                paddingLeft: "1.5rem",
                lineHeight: 1.6,
                listStyleType: "disc",
              }}
            >
              {b.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          );
        }
        if (b.type === "caption") {
          return (
            <p
              key={i}
              style={{
                textAlign: "center",
                fontStyle: "italic",
                color: "#666",
                margin: "0 0 0.5rem",
              }}
            >
              {b.text}
            </p>
          );
        }
        if (b.type === "audio") {
          return (
            <div key={i} style={{ margin: "1.5rem auto", maxWidth: "600px" }}>
              <audio
                controls
                style={{ width: "100%", borderRadius: 8 }}
              >
                <source src={b.src} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              {b.caption && (
                <p style={{
                  textAlign: "center",
                  fontStyle: "italic",
                  color: "#666",
                  margin: "0.5rem 0"
                }}>
                  {b.caption}
                </p>
              )}
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
