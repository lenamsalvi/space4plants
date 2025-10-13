// src/app/contact/page.tsx
export default function ContactPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "white",
        color: "black",
        fontFamily: "sans-serif",
      }}
    >
      <section style={{ padding: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Contact</h2>
        <p style={{ marginTop: "1rem" }}>
          Email:{" "}
          <a href="mailto:hello@space4plants.com">hello@space4plants.com</a>
        </p>
      </section>
    </main>
  );
}
