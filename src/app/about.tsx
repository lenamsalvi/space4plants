// src/app/about.tsx
export default function AboutPage() {
  return (
    <main className="bg-white font-sans leading-relaxed" style={{ color: "#1e3a8a" }}>
      <section className="max-w-5xl mx-auto px-6 py-15">
        <article className="relative">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Title - mobile: top, desktop: hidden here */}
            <h2 className="text-4xl font-bold order-1 md:hidden col-span-full" style={{ color: "#1e3a8a" }}>
              Helena Salvi
            </h2>

            {/* Image on the left desktop, middle on mobile*/}
            <div className="w-full bg-slate-100 rounded-lg overflow-hidden order-2 md:order-1">
              <img
                src="/projects/ProfilePhoto.jpg"
                alt="Your Name"
                className="w-full h-auto"
              />
            </div>

            {/* Text on the right */}
            <div className="order-3 md:order-2">
              <h2 className="text-4xl font-bold mb-6 hidden md:block" style={{ color: "#1e3a8a" }}>
                Helena Salvi
              </h2>
              <p className="text-lg mb-10" style={{ color: "#334155" }}>
                I'm a mechanical engineer with a deep-rooted passion for plants and AgTech. My career has taken me from hands-on farming to designing AI-driven farm robotics and smart-growing consumer products. Along the way, I've learned that the best growing systems are engineered to adapt, perform, and endure. Whether I'm modeling CAD assemblies, building and testing prototypes, or getting my hands dirty in a greenhouse, I approach every project with the same philosophy: every challenge is a blueprint for the next solution. This site showcases projects by me, focused on making growing simpler, smarter, and more sustainable. When I'm not designing or building, I'm managing rental properties through my company Cypress Space, continuing to learn and expand my skills, or exploring new ways to merge my two passions. I hold AutoCAD certifications (ACU and ACP) and a B.S. in Mechanical Engineering from The George Washington University.
              </p>
              <blockquote className="text-2xl font-light italic border-t border-b py-6" style={{ color: "#008cf7" }}>
                "Your quote here"
              </blockquote>
            </div>
          </div>
        </article>

        {/* Credly Badges Section */}
        <section className="mt-16 pt-8 border-t border-slate-200">
          <h3 className="text-2xl font-bold mb-6" style={{ color: "#1e3a8a" }}>Certifications</h3>
          <div className="flex flex-wrap gap-6">
            <a
              href="https://www.credly.com/badges/8d605471-10c4-4b5a-9e5e-1f1fcdf5e314"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <img
                src="/projects/autodesk-autocad-certified-user.png"
                alt="AutoCAD Certification Badge"
                width="150"
                style={{ display: "block" }}
              />
            </a>
            <a
              href="https://www.credly.com/badges/72991765-8d73-4f86-91c3-cd2065d2f8f2"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <img
                src="/projects/autodesk-certified-professional-in-autocad-for-design-and-drafting.png"
                alt="AutoCAD Certification Badge"
                width="150"
                style={{ display: "block" }}
              />
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
