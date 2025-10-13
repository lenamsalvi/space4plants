"use client";

import TextPressure from "@/components/TextPressure";
import CircleText from "@/components/CircleText";
import "./globals.css";
import React from "react";

type View = "home" | "projects" | "about" ;

type ViewContextValue = {
  view: View;
  setView: (v: View) => void;
  pendingProjectId: string | null;
  setPendingProjectId: (id: string | null) => void;
};

export const ViewContext = React.createContext<ViewContextValue | null>(null);

export function useView() {
  const ctx = React.useContext(ViewContext);
  if (!ctx)
    throw new Error("useView must be used within ViewProvider (layout.tsx).");
  return ctx;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [view, setView] = React.useState<View>("home");
  const [pendingProjectId, setPendingProjectId] = React.useState<string | null>(
    null
  );

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <title>Space4Plants</title>
      </head>
      <body
        style={{
          backgroundColor: "white",
          color: "black",
          fontFamily: "sans-serif",
        }}
      >
        <ViewContext.Provider
          value={{ view, setView, pendingProjectId, setPendingProjectId }}
        >
          <Header />
          <main style={{ minHeight: "100vh" }}>{children}</main>

          <div className="circle-text-container">
            <CircleText text="©Space*4*Plants*" spinDuration={15} onHover="speedUp" />
          </div>

          <Footer />
        </ViewContext.Provider>

        <style jsx global>{`
          html {
            scroll-behavior: smooth;
          }
          a {
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          button {
            cursor: pointer;
          }

          .circle-text-container {
            position: fixed;
            bottom: 2rem;
            left: 2rem;
            z-index: 1;
          }

          @media (max-width: 768px) {
            .circle-text-container {
              position: static;
              margin: 2rem auto;
              display: flex;
              justify-content: center;
            }
          }
        `}</style>
      </body>
    </html>
  );
}

/* Header (merged from SiteHeader.tsx), now uses buttons to switch view (no routing) */
function Header() {
  const { view, setView } = useView();

  const NavButton = ({ id, label }: { id: View; label: string }) => (
    <button
      onClick={() => setView(id)}
      style={{
        margin: "0 0.5rem",
        border: "1px solid #008cf7",
        borderRadius: 8,
        padding: "6px 12px",
        background: view === id ? "#008cf7" : "white",
        color: view === id ? "#ffffff" : "#008cf7",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={(e) => {
        if (view !== id) {
          (e.currentTarget as HTMLElement).style.background = "#e6f4ff";
        }
      }}
      onMouseLeave={(e) => {
        if (view !== id) {
          (e.currentTarget as HTMLElement).style.background = "white";
        }
      }}
      aria-pressed={view === id}
    >
      {label}
    </button>
  );

  return (
    <header
      style={{
        borderBottom: "1px solid #ddd",
        padding: "1rem",
        position: "sticky",
        top: 0,
        background: "white",
        zIndex: 10,
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextPressure />
      </div>
      <nav
        style={{
          marginTop: "0.75rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <NavButton id="home" label="Home" />
        <NavButton id="projects" label="Projects" />
        <NavButton id="about" label="About" />
      </nav>
    </header>
  );
}

/* Footer (merged from SiteFooter.tsx) */
function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #ddd",
        padding: ".25rem",
        marginTop: "2rem",
      }}
    >
      <small>© {new Date().getFullYear()} Space4Plants</small>
    </footer>
  );
}
