// src/app/projects.tsx
"use client";

import React from "react";
import ProjectsBoard, { Project, type Post } from "@/components/ProjectsBoard";
import { projects } from "@/lib/projects";

export default function Projects() {
  const [activeTags, setActiveTags] = React.useState<string[]>([]);
  const [activeProject, setActiveProject] = React.useState<string | null>(null);

  // Unique tags across all posts
  const allTags = React.useMemo(
    () =>
      Array.from(
        new Set(
          projects.flatMap((proj) =>
            proj.posts.flatMap((post) => ('tags' in post ? post.tags ?? []: []))
          )
        )
      ),
    []
  );

  // Flat gallery: [{ src, projectId }]
  const allPhotos = React.useMemo(
    () =>
      projects.flatMap((proj) =>
        (proj as { gallery?: string[] }).gallery
          ? (proj as { gallery: string[] }).gallery.map((src: string) => ({
              src,
              projectId: proj.id,
            }))
          : []
      ),
    []
  );

  // Filtering logic
  const filteredProjects: Project[] = React.useMemo(() => {
    if (activeProject) {
      return projects.filter((p) => p.id === activeProject) as Project[];
    }
    if (activeTags.length > 0) {
      const byTags = projects
        .map((p) => ({
          ...p,
          posts: p.posts.filter((post) =>
            ('tags' in post ? post.tags ?? [] : []).some((tag: string) => activeTags.includes(tag))
          ),
        }))
        .filter((p) => p.posts.length > 0);
      return byTags as Project[];
    }
    return projects as Project[];
  }, [activeProject, activeTags]);

  const hasFilters = activeTags.length > 0 || !!activeProject;

  const onPhotoClick = (projectId: string) => {
    setActiveTags([]);
    setActiveProject((id) => (id === projectId ? null : projectId));
  };

  const clearFilters = () => {
    setActiveTags([]);
    setActiveProject(null);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "white",
        color: "#1e3a8a",
        fontFamily: "sans-serif",
      }}
    >
      <section className="py-8 px-6 lg:px-40">
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1e3a8a" }}>Projects</h2>

        {/* Bulk tag list (reactive) */}
        {allTags.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginTop: "1rem",
            }}
          >
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setActiveProject(null);
                  setActiveTags((prev) =>
                    prev.includes(tag)
                      ? prev.filter((t) => t !== tag)
                      : [...prev, tag]
                  );
                }}
                style={{
                  background: activeTags.includes(tag) ? "#008cf7" : "transparent",
                  color: activeTags.includes(tag) ? "white" : "#008cf7",
                  border: "1px solid #008cf7",
                  borderRadius: 999,
                  padding: "4px 10px",
                  fontSize: "0.9rem",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  if (!activeTags.includes(tag)) {
                    (e.currentTarget as HTMLElement).style.background = "#e6f4ff";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!activeTags.includes(tag)) {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }
                }}
                aria-pressed={activeTags.includes(tag)}
              >
                #{tag}
              </button>
            ))}

            {(activeTags.length > 0 || activeProject) && (
              <button
                onClick={() => {
                  setActiveTags([]);
                  setActiveProject(null);
                }}
                style={{
                  marginLeft: "0.5rem",
                  border: "1px solid #008cf7",
                  borderRadius: 8,
                  padding: "4px 10px",
                  background: "white",
                  color: "#008cf7",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#e6f4ff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "white";
                }}
              >
                Clear
              </button>
            )}
          </div>
        )}
      </section>

      {/* Project cards (react to filters) */}
      <ProjectsBoard
        projects={filteredProjects as Project[]}
        allProjects={projects as Project[]}
        activeTags={activeTags}
      />

      {/* Photo gallery (reactive) */}
      {allPhotos.length > 0 && (
        <section className="pb-8 px-6 lg:px-40">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
              gap: "0.5rem",
              marginTop: "2rem",
            }}
          >
            {allPhotos.map((photo) => (
              <button
                key={photo.src}
                onClick={() => onPhotoClick(photo.projectId)}
                style={{
                  border: "none",
                  padding: 0,
                  background: "transparent",
                  borderRadius: 8,
                  overflow: "hidden",
                  outline:
                    activeProject === photo.projectId
                      ? "3px solid #008cf7"
                      : "none",
                  transition: "outline 0.2s ease",
                }}
                aria-pressed={activeProject === photo.projectId}
                title="Filter by this project"
              >
                <img
                  src={photo.src}
                  alt=""
                  style={{
                    width: "100%",
                    height: 160,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </button>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
