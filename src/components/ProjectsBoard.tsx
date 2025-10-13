"use client";
import React from "react";
import Modal from "@/components/Modal";
import PostContent from "@/components/PostContent";
import { useView } from "@/app/layout";

type Post = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content?: string;
  body?: Array<
    { type: "p"; text: string } | { type: "img"; src: string; alt?: string }
  >;
  tags?: string[];
};

export type Project = {
  id: string;
  title: string;
  blurb: string;
  tags?: string[];
  cover?: string;
  coverPosition?: string;
  posts: Post[];
  overviewImage?: string;
  overviewText?: string;
};

export default function ProjectsBoard({
  projects,
  allProjects,
  activeTags,
}: {
  projects: Project[];
  allProjects: Project[];
  activeTags: string[];
}) {
  const [postModal, setPostModal] = React.useState<null | {
    projectId: string;
    postId: string;
    title: string;
    date: string;
    content?: string;
    body?: Array<
      { type: "p"; text: string } | { type: "img"; src: string; alt?: string }
    >;
  }>(null);

  const [projectModal, setProjectModal] = React.useState<null | {
    projectId: string;
  }>(null);
  const [modalTags, setModalTags] = React.useState<string[]>([]);
  const { pendingProjectId, setPendingProjectId } = useView();

  const openProjectPosts = (projectId: string) => {
    setModalTags(activeTags);
    setProjectModal({ projectId });
  };

  const openPost = (projectId: string, postId: string) => {
    const proj = allProjects.find((p) => p.id === projectId);
    const post = proj?.posts.find((pt) => pt.id === postId);
    if (!proj || !post) return;
    setPostModal({
      projectId,
      postId,
      title: post.title,
      date: post.date,
      content: post.content,
      body: post.body,
    });
  };

  React.useEffect(() => {
    if (pendingProjectId) {
      openProjectPosts(pendingProjectId);
      setPendingProjectId(null);
    }
  }, [pendingProjectId]);

  return (
    <section className="py-8 px-6 lg:px-40">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 20,
          marginTop: 12,
        }}
      >
        {projects.map((card) => {
          // pick the latest post by date
          const latest = card.posts.reduce((a, b) =>
            new Date(a.date) > new Date(b.date) ? a : b
          );

          // collect all tags from posts if present
          // const postTags = Array.from(
          //   new Set(card.posts.flatMap((p) => p.tags ?? []))
          // );

          return (
            <div
              key={card.id}
              onClick={() => openProjectPosts(card.id)}
              style={{
                background: "white",
                border: "1px solid #eee",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 6px 14px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 4px 10px rgba(0,0,0,0.05)";
              }}
            >
              <div
                style={{
                  height: 160,
                  background: "#f3f3f3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {card.cover ? (
                  <img
                    src={card.cover}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: card.coverPosition ?? "center center",
                    }}
                  />
                ) : (
                  <span style={{ color: "#888", fontSize: 12 }}>thumbnail</span>
                )}
              </div>
              <div style={{ padding: 16 }}>
                <h3 style={{ margin: 0, fontSize: 24, color: "#1e3a8a" }}>{card.title}</h3>
                <p style={{ margin: "6px 0", color: "#334155" }}>{card.blurb}</p>

                {latest && (
                  <div
                    style={{
                      borderTop: "1px dashed #e5e5e5",
                      paddingTop: 10,
                      marginTop: 10,
                    }}
                  >
                    <strong style={{ fontSize: "0.9rem", color: "#334155" }}>
                      Latest: {latest.title} —{" "}
                      <span style={{ color: "#64b5f6", fontWeight: "normal" }}>
                        {new Date(latest.date).toLocaleDateString()}
                      </span>
                    </strong>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {projectModal &&
        (() => {
          const proj = allProjects.find((p) => p.id === projectModal.projectId);

          if (!proj) return null;
          const projTags = Array.from(
            new Set(proj.posts.flatMap((p) => p.tags ?? []))
          );
          return (
            <Modal onClose={() => setProjectModal(null)}>
              {/* Overview section */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                  gap: 20,
                  marginBottom: "1rem",
                  borderBottom: "1px solid #eee",
                  paddingBottom: "0.5rem",
                  }}
                >
                {/* Left: Image */}
              <div
                style={{
                 flex: "0 0 40%",
                 background: "#ddd",
                 borderRadius: 8,
                 overflow: "hidden",
                 minWidth: 280,
                 margin: "0 auto",
                 }}
                > 
                  <img
                   src={proj.overviewImage ?? proj.cover}
                   alt={proj.title}
                   style={{
                     width: "100%",
                     height: "auto",
                     objectFit: "cover",
                     display: "block",
                     }}
                   />
                   </div>
{/* Right: Title + Overview text */}
                <div
  style={{
    flex: 1,
    minWidth: 280,
  }}
>
                  <h2 style={{ margin: 0, color: "#1e3a8a" }}>{proj.title}</h2>
                  <p style={{ color: "#334155", margin: "4px 0 0" }}>
                    {proj.overviewText ?? proj.blurb}
                  </p>
                  {projTags.length > 0 && (
                    <div
                      style={{
                        display: "flex",
                        gap: 6,
                        flexWrap: "wrap",
                        marginTop: 6,
                      }}
                    >
                      {projTags.map((t) => (
                        <button
                          key={t}
                          onClick={() =>
                            setModalTags((prev) =>
                              prev.includes(t)
                                ? prev.filter((tag) => tag !== t)
                                : [...prev, t]
                            )
                          }
                          style={{
                            fontSize: 12,
                            color: modalTags.includes(t) ? "white" : "#008cf7",
                            background: modalTags.includes(t)
                              ? "#008cf7"
                              : "transparent",
                            border: "1px solid #008cf7",
                            borderRadius: 999,
                            padding: "2px 8px",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                          }}
                          onMouseEnter={(e) => {
                            if (!modalTags.includes(t)) {
                              (e.currentTarget as HTMLElement).style.background = "#e6f4ff";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!modalTags.includes(t)) {
                              (e.currentTarget as HTMLElement).style.background = "transparent";
                            }
                          }}
                          aria-pressed={modalTags.includes(t)}
                        >
                          #{t}
                        </button>
                      ))}
                      {modalTags.length > 0 && (
                        <button
                          onClick={() => setModalTags([])}
                          style={{
                            fontSize: 12,
                            color: "#008cf7",
                            background: "white",
                            border: "1px solid #008cf7",
                            borderRadius: 999,
                            padding: "2px 8px",
                            cursor: "pointer",
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
                </div>
              </div>

              {/* Posts list */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  display: "grid",
                  gap: 10,
                }}
              >
                {proj.posts
                  .filter(
                    (post) =>
                      modalTags.length === 0 ||
                      (post.tags ?? []).some((tag) => modalTags.includes(tag))
                  )
                  .map((post) => (
                    <li key={post.id}>
                      <article
                        role="button"
                        tabIndex={0}
                        onClick={() => {
                          setProjectModal(null);
                          openPost(proj.id, post.id);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            setProjectModal(null);
                            openPost(proj.id, post.id);
                          }
                        }}
                        style={{
                          cursor: "pointer",
                          padding: "0.75rem",
                          borderRadius: "8px",
                          transition: "background 0.2s ease",
                        }}
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLElement).style.background =
                            "#f1f5f9")
                        }
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLElement).style.background =
                            "transparent")
                        }
                        title="Open post"
                      >
                        <strong style={{ fontSize: 20, color: "#1e3a8a" }}>
                          {post.title} —{" "}
                          <span
                            style={{
                              color: "#64b5f6",
                              fontWeight: "normal",
                              fontSize: 20,
                            }}
                          >
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                        </strong>
                        <p style={{ marginTop: 4, color: "#334155" }}>{post.excerpt}</p>
                      </article>
                    </li>
                  ))}
                {proj.posts.filter(
                  (post) =>
                    modalTags.length === 0 ||
                    (post.tags ?? []).some((tag) => modalTags.includes(tag))
                ).length === 0 && (
                  <li>
                    <p style={{ color: "#64b5f6", fontStyle: "italic" }}>
                      No posts match these tags.
                    </p>
                  </li>
                )}
              </ul>
            </Modal>
          );
        })()}
        
      {postModal && (
        <Modal
          onClose={() => setPostModal(null)}
          onBack={() => {
            setPostModal(null);
            setProjectModal({ projectId: postModal.projectId });
          }}
        >
          <h3 style={{ marginTop: 0, color: "#1e3a8a" }}>
            {postModal.title} —{" "}
            <span style={{ color: "#64b5f6", fontWeight: "normal", fontSize: 12 }}>
              {new Date(postModal.date).toLocaleDateString()}
            </span>
          </h3>
          <div style={{ marginTop: 12 }}>
            {postModal.body && postModal.body.length > 0 ? (
              <PostContent blocks={postModal.body} />
            ) : (
              <p style={{ margin: "0 0 1rem", lineHeight: 1.6 }}>
                {postModal.content ?? "(Coming soon)"}
              </p>
            )}
          </div>
        </Modal>
      )}
    </section>
  );
}
