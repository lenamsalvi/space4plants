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

            {/* Photo collage on the left desktop, middle on mobile */}
            <div className="order-2 md:order-1" style={{ position: "relative", height: "500px", width: "320px", marginLeft: "auto" }}>
              {/* MossHunting — on top (z:3), covers upper-left corner of ironhell */}
              <div style={{ position: "absolute", top: "0px", left: "0px", zIndex: 3, background: "white", padding: "8px 8px 28px 8px", boxShadow: "3px 5px 14px rgba(0,0,0,0.22)" }}>
                <img src="/projects/MossHunting.jpg" alt="" style={{ width: "170px", height: "170px", objectFit: "cover", display: "block" }} />
              </div>
              {/* ironhell — middle (z:2), center of composition */}
              <div style={{ position: "absolute", top: "120px", left: "120px", zIndex: 2, background: "white", padding: "8px 8px 28px 8px", boxShadow: "3px 5px 14px rgba(0,0,0,0.22)" }}>
                <img src="/projects/ironhell.jpg" alt="" style={{ width: "170px", height: "170px", objectFit: "cover", display: "block" }} />
              </div>
              {/* osmagirl — bottom (z:1), ironhell covers its upper-right corner */}
              <div style={{ position: "absolute", top: "270px", left: "30px", zIndex: 1, background: "white", padding: "8px 8px 28px 8px", boxShadow: "3px 5px 14px rgba(0,0,0,0.22)" }}>
                <img src="/projects/osmagirl.jpg" alt="" style={{ width: "170px", height: "170px", objectFit: "cover", display: "block" }} />
              </div>
            </div>

            {/* Text on the right */}
            <div className="order-3 md:order-2">
              <h2 className="text-4xl font-bold mb-6 hidden md:block" style={{ color: "#1e3a8a" }}>
                Helena Salvi
              </h2>
              <p className="text-lg mb-10" style={{ color: "#334155" }}>
                I am a CAD expert, and an agentic programmer. I have a bachelors in Mechanical Engineering. 
                I don&apos;t believe in aliens or that AI could ever be sentient, but I do believe in luminiferous aether.
                I am currently working on a bag charm with an embedded audio device to record journals about life. 
              </p>
              <blockquote className="text-2xl font-light italic border-t border-b py-6" style={{ color: "#008cf7" }}>
                Space without an aether is unthinkable///// Albert Einstein
              </blockquote>
            </div>
          </div>
        </article>

        {/* Credly Badges Section */}
        
      </section>
    </main>
  );
}
