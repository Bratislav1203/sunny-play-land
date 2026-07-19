const posts = [
  { icon: "🛝", desc: "Tobogani u punom pogonu!", likes: 142 },
  { icon: "🎮", desc: "PS5 zona je otvorena!", likes: 98 },
  { icon: "🎂", desc: "Srećan ti rođendan, Lazar! 🎉", likes: 215 },
  { icon: "⬆️", desc: "Trampoline za skakanje!", likes: 87 },
  { icon: "☕", desc: "Cafe deo za roditelje ☕", likes: 63 },
  { icon: "🌀", desc: "Mali istraživači u tunelu!", likes: 110 },
];

export default function InstagramSection() {
  return (
    <section
      aria-labelledby="instagram-heading"
      style={{
        background: "#FFF0F5",
        paddingTop: 16,
        paddingBottom: 0,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 24px 80px" }}>
        {/* Naslov */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div
            className="section-tag"
            style={{
              background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
              color: "white",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ display: "inline", marginRight: 6 }} aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            Instagram
          </div>
          <h2
            id="instagram-heading"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontFamily: "'Fredoka', sans-serif",
              fontWeight: 700,
              color: "#18213D",
              marginBottom: 10,
            }}
          >
            Pratite{" "}
            <span style={{ color: "#FF5F87" }}>Sunny avanture</span>
          </h2>
          <p style={{ color: "#6B7A99", fontSize: "1rem" }}>
            @sunny_playland
          </p>
        </div>

        {/* Grid objava */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: 12,
            marginBottom: 36,
          }}
          className="ig-grid"
        >
          {posts.map((p, i) => (
            <div
              key={i}
              className="card-hover"
              style={{
                borderRadius: 16,
                overflow: "hidden",
                cursor: "pointer",
                background: "white",
                border: "2px solid #FFE4ED",
                position: "relative",
              }}
              aria-label={`Instagram objava: ${p.desc}`}
            >
              <div
                style={{
                  aspectRatio: "1",
                  background: `linear-gradient(135deg, ${
                    i % 3 === 0 ? "#FFF0F5, #EAF8FF" :
                    i % 3 === 1 ? "#F5F0FF, #FFF8E8" :
                    "#EEFDF4, #FFF0F5"
                  })`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  padding: 12,
                }}
              >
                <span style={{ fontSize: "2.2rem" }} aria-hidden="true">{p.icon}</span>
                <span style={{ fontSize: "0.72rem", color: "#8899AA", textAlign: "center", fontFamily: "'Nunito', sans-serif", lineHeight: 1.4 }}>
                  {p.desc}
                </span>
              </div>
              <div style={{ padding: "8px 10px", display: "flex", alignItems: "center", gap: 4 }}>
                <span style={{ color: "#FF5F87", fontSize: "0.8rem" }}>❤️</span>
                <span style={{ color: "#8899AA", fontSize: "0.75rem", fontFamily: "'Nunito', sans-serif" }}>{p.likes}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <a
            href="https://instagram.com/sunny_playland"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
              boxShadow: "0 6px 20px rgba(220,39,67,0.35)",
              fontSize: "1rem",
            }}
            aria-label="Pratite Sunny Playland na Instagramu — otvara se u novom tabu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            Pratite nas na Instagramu
          </a>
        </div>
      </div>

      {/* Talasasti razdelnik */}
      <div className="wave-divider" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }} aria-hidden="true" preserveAspectRatio="none">
          <path d="M0 30C480 0 960 60 1440 30V60H0Z" fill="#18213D"/>
        </svg>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .ig-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 500px) {
          .ig-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
