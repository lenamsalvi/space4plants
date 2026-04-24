// src/app/page.tsx
"use client";

import React from "react";
import { useView } from "./layout";
import Projects from "./projects";
import About from "./about";
import { projects } from "@/lib/projects";
import PostContent from "@/components/PostContent";

export default function HomePage() {
  const { view } = useView();

  return (
    <>
      {view === "home" && <HomeSection />}
      {view === "projects" && <Projects />}
      {view === "about" && <About />}
    </>
  );
}

function HomeSection() {
  const { setView, setPendingProjectId, setPendingPostId } = useView();

  const latest = React.useMemo(() => {
    let best: { projectId: string; projectTitle: string; postId: string; postTitle: string; date: string; body: Parameters<typeof PostContent>[0]["blocks"] | undefined } | null = null;
    for (const proj of projects) {
      for (const post of proj.posts) {
        if (!best || new Date(post.date) > new Date(best.date)) {
          best = {
            projectId: proj.id,
            projectTitle: proj.title,
            postId: post.id,
            postTitle: post.title,
            date: post.date,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            body: post.body as any,
          };
        }
      }
    }
    return best;
  }, []);

  if (!latest) return null;

  return (
    <div style={{ backgroundColor: "white", color: "#1e3a8a", fontFamily: "sans-serif", minHeight: "100vh" }}>
      <div className="max-w-3xl mx-auto px-6 py-12">
        <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#008cf7", marginBottom: "0.5rem" }}>
          What I&apos;m working on right now
        </p>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#1e3a8a", marginBottom: "0.25rem" }}>
          {latest.postTitle}
        </h1>
        <p style={{ fontSize: "0.9rem", color: "#64b5f6", marginBottom: "2rem" }}>
          {latest.projectTitle} — {new Date(latest.date).toLocaleDateString()}
        </p>

        <div style={{ color: "#334155" }}>
          {latest.body && <PostContent blocks={latest.body} />}
        </div>

        <div style={{ marginTop: "3rem", borderTop: "1px solid #e2e8f0", paddingTop: "1.5rem" }}>
          <button
            onClick={() => {
              setPendingProjectId(latest.projectId);
              setPendingPostId(latest.postId);
              setView("projects");
            }}
            style={{
              padding: "0.5rem 1.25rem",
              background: "#008cf7",
              color: "white",
              fontSize: "0.875rem",
              borderRadius: "0.25rem",
              border: "none",
              transition: "background 0.2s ease",
              marginRight: "1rem",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#0077d4"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#008cf7"; }}
          >
            Open in Projects →
          </button>
          <button
            onClick={() => setView("projects")}
            style={{
              padding: "0.5rem 1.25rem",
              background: "white",
              color: "#008cf7",
              fontSize: "0.875rem",
              borderRadius: "0.25rem",
              border: "1px solid #008cf7",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#e6f4ff"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "white"; }}
          >
            View all projects
          </button>
        </div>
      </div>
    </div>
  );
}
