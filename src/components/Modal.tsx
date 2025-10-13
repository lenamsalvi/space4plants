"use client";
import React from "react";

export default function Modal({
  onClose,
  onBack,
  children,
}: {
  onClose: () => void;
  onBack?: () => void;
  children: React.ReactNode;
}) {
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    // lock background scroll
    const { overflow, paddingRight } = document.body.style;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0)
      document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.35)",
        display: "grid",
        placeItems: "center",
        padding: 20,
        zIndex: 60,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "white",
          color: "black",
          width: "min(900px, 92vw)",
          maxHeight: "90vh", // constrain height
          overflow: "auto", // enable scrolling inside the modal
          borderRadius: 12,
          padding: 20,
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: onBack ? "space-between" : "flex-end", // space for both buttons
            alignItems: "center",
            position: "sticky",
            top: 0,
            background: "transparent",
            padding: "8px 0",
            zIndex: 1,
          }}
        >
          {onBack && (
            <button
              onClick={onBack}
              aria-label="Back"
              style={{
                border: "1px solid #ddd",
                borderRadius: 8,
                padding: "4px 10px",
                background: "rgba(255,255,255,1)",
                cursor: "pointer",
              }}
            >
              Back
            </button>
          )}

          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: "4px 10px",
              background: "rgba(255,255,255,1)", // semi-transparent bg for readability
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>

        <div style={{ marginTop: 10 }}>{children}</div>
      </div>
    </div>
  );
}
