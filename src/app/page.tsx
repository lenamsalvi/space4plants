// src/app/page.tsx
"use client";

import React from "react";
import { useView } from "./layout";
import Projects from "./projects";
import About from "./about";

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
  const { setView, setPendingProjectId } = useView();

  return (
    <div>
      <main className="bg-white font-sans leading-relaxed" style={{ color: "#1e3a8a" }}>
        {/* Hero */}
        <section className="py-15 px-6 text-center border-b border-slate-200">
          <p className="max-w-3xl text-2xl italic mx-auto" style={{ color: "#0066cc" }}>
            Explore the making of each project. Every detail is here, in my
            voice, so you can see both the work itself and the skill behind it.
          </p>
        </section>

        {/* Magazine-style editorial flow */}
        <section className="max-w-5xl mx-auto px-6 py-15 space-y-16">
          <article className="relative">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Title - mobile: top, desktop: hidden here */}
              <h2 className="text-4xl font-bold order-1 md:hidden col-span-full" style={{ color: "#1e3a8a" }}>
                GrowGrid
              </h2>

              {/* Image on the left desktop, middle on mobile*/}
              <div className="w-full bg-slate-100 rounded-lg overflow-hidden order-2 md:order-1">
                <img
                  src="/projects/GrowGrid_Render2.jpg" // <--image path
                  alt="Plant Arrangement Generator screenshot"
                  className="w-full h-auto"
                />
              </div>

              {/* Text on the right */}
              <div className="order-3 md:order-2">
                <h2 className="text-4xl font-bold mb-6 hidden md:block" style={{ color: "#1e3a8a" }}>
                  GrowGrid
                </h2>
                <p className="text-lg mb-10" style={{ color: "#334155" }}>
                  GrowGrid is a fully modular growing framework where every
                  piece functions independently yet connects seamlessly into
                  the whole. By prioritizing accessibility and adaptability,
                  GrowGrid makes long-term cultivation cleaner, simpler, and
                  more reliable. Its open architecture also supports future
                  expansion - sensors, lighting, or new pod designs can be
                  integrated without redesigning the core. The result is an
                  engineered system that grows with you while keeping plants,
                  not upkeep, at the center.
                </p>
                <blockquote className="text-2xl font-light italic border-t border-b py-6" style={{ color: "#008cf7" }}>
                  &quot;A grow system that adapts, performs, and endures.&quot;
                </blockquote>
                <button
                  onClick={() => {
                    setPendingProjectId("hydro-chamber");
                    setView("projects");
                  }}
                  style={{
                    marginTop: "1.5rem",
                    display: "inline-block",
                    padding: "0.5rem 1.25rem",
                    background: "#008cf7",
                    color: "white",
                    fontSize: "0.875rem",
                    borderRadius: "0.25rem",
                    border: "none",
                    transition: "background 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#0077d4";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#008cf7";
                  }}
                >
                  Read More →
                </button>
              </div>
            </div>
          </article>

          <article className="relative">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Title - mobile: top, desktop: hidden here */}
              <h2 className="text-4xl font-bold mb-6 order-1 md:hidden col-span-full" style={{ color: "#1e3a8a" }}>
                AutoFlora
              </h2>

              {/* Text on the left */}
              <div className="order-3 md:order-1">
                <h2 className="text-4xl font-bold mb-6 hidden md:block" style={{ color: "#1e3a8a" }}>
                  AutoFlora
                </h2>
                <p className="text-lg mb-10" style={{ color: "#334155" }}>
                  AutoFlora is an autonomous plant design app that uses a
                  specialized algorithm to generate and curate arrangements for
                  planters or landscapes. It blends horticultural data with
                  design principles to suggest combinations that are both
                  practical and visually balanced.
                </p>
                <blockquote className="text-2xl font-light italic border-t border-b py-6" style={{ color: "#008cf7" }}>
                  &quot;Generative curation for living landscapes.&quot;
                </blockquote>
                <button
                  onClick={() => {
                    setPendingProjectId("AutoFlora");
                    setView("projects");
                  }}
                  style={{
                    marginTop: "1.5rem",
                    display: "inline-block",
                    padding: "0.5rem 1.25rem",
                    background: "#008cf7",
                    color: "white",
                    fontSize: "0.875rem",
                    borderRadius: "0.25rem",
                    border: "none",
                    transition: "background 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#0077d4";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#008cf7";
                  }}
                >
                  Read More →
                </button>
              </div>

              {/* Image on the right */}
              <div className="order-2 w-full bg-slate-100 rounded-lg overflow-hidden">
                <img
                  src="/projects/AutoFlora_AIMockUp.jpg" // <-- your image path here
                  alt="Plant Arrangement Generator screenshot"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </article>

          <article className="relative">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Title - mobile: top, desktop: hidden here */}
              <h2 className="text-4xl font-bold mb-6 order-1 md:hidden col-span-full" style={{ color: "#1e3a8a" }}>
                Website
              </h2>

              {/* Image on the left */}
              <div className="w-full bg-slate-100 rounded-lg overflow-hidden order-2 md:order-1">
                <img
                  src="/projects/viewports.jpg" // <-- your image path here
                  alt="Plant Arrangement Generator screenshot"
                  className="w-full h-auto"
                />
              </div>

              {/* Text on the right */}
              <div className="order-3 md:order-2">
                <h2 className="text-4xl font-bold mb-6 hidden md:block" style={{ color: "#1e3a8a" }}>
                  Website
                </h2>
                <p className="text-lg mb-10" style={{ color: "#334155" }}>
                  This project exemplifies my exploratory and bold nature - I am
                  not afraid of what I do not know, and I welcome the challenge.
                </p>
                <blockquote className="text-2xl font-light italic border-t border-b py-6" style={{ color: "#008cf7" }}>
                  &quot;A space for designing... a space for growth... a space for plants.&quot;
                </blockquote>
                <button
                  onClick={() => {
                    setPendingProjectId("Building My Website");
                    setView("projects");
                  }}
                  style={{
                    marginTop: "1.5rem",
                    display: "inline-block",
                    padding: "0.5rem 1.25rem",
                    background: "#008cf7",
                    color: "white",
                    fontSize: "0.875rem",
                    borderRadius: "0.25rem",
                    border: "none",
                    transition: "background 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#0077d4";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#008cf7";
                  }}
                >
                  Read More →
                </button>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
