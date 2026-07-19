const galleryItems = [
  { icon: "🛝", label: "Tobogani", category: "Igraonica", tall: true },
  { icon: "⬆️", label: "Trampoline", category: "Igraonica", tall: false },
  { icon: "💡", label: "Interaktivni zid", category: "Igraonica", tall: false },
  { icon: "🌀", label: "Tunel", category: "Igraonica", tall: true },
  { icon: "🎮", label: "PlayStation zona", category: "Gaming", tall: false },
  { icon: "🕹️", label: "Arkadni aparati", category: "Arkada", tall: false },
  { icon: "☕", label: "Cafe deo", category: "Cafe", tall: true },
  { icon: "🎂", label: "Proslava", category: "Rodjendani", tall: false },
  { icon: "🧗", label: "Penjalice", category: "Igraonica", tall: false },
];

const filters = ["Sve", "Igraonica", "Gaming", "Arkada", "Cafe", "Rodjendani"];

export default function GallerySection() {
  return (
    <section
      id="galerija"
      aria-labelledby="gallery-heading"
      style={{
        background: "#EAF8FF",
        paddingTop: 16,
        paddingBottom: 0,
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 24px 80px" }}>
        {/* Naslov */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div className="section-tag" style={{ background: "white", color: "#338BFF" }}>
            📸 Galerija
          </div>
          <h2
            id="gallery-heading"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontFamily: "'Fredoka', sans-serif",
              fontWeight: 700,
              color: "#18213D",
              marginBottom: 14,
            }}
          >
            Pogledajte{" "}
            <span style={{ color: "#338BFF" }}>naš prostor</span>
          </h2>
          <p style={{ color: "#6B7A99", fontSize: "1rem", maxWidth: 440, margin: "0 auto" }}>
            Tobogani, trampoline, gaming zona, cafe — pogledajte šta vas čeka u Sunny Playlandу.
          </p>
        </div>

        {/* Filter dugmad */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
            marginBottom: 36,
          }}
          role="group"
          aria-label="Filtrirajte galeriju"
        >
          {filters.map((f, i) => (
            <button
              key={f}
              style={{
                fontFamily: "'Fredoka', sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
                padding: "8px 18px",
                borderRadius: 50,
                border: i === 0 ? "2px solid #338BFF" : "2px solid #D0E8F8",
                background: i === 0 ? "#338BFF" : "white",
                color: i === 0 ? "white" : "#6B7A99",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              aria-pressed={i === 0}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div
          style={{
            columns: "3 280px",
            columnGap: 16,
          }}
          className="gallery-columns"
        >
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="card-hover"
              style={{
                breakInside: "avoid",
                marginBottom: 16,
                borderRadius: 20,
                overflow: "hidden",
                background: "white",
                border: "2px solid rgba(51,139,255,0.1)",
                cursor: "pointer",
              }}
              role="img"
              aria-label={`Fotografija: ${item.label}`}
            >
              <div
                style={{
                  aspectRatio: item.tall ? "3/4" : "4/3",
                  background: `linear-gradient(135deg, ${
                    i % 5 === 0 ? "#EAF8FF, #FFF0F5" :
                    i % 5 === 1 ? "#FFF0F5, #F5F0FF" :
                    i % 5 === 2 ? "#F5F0FF, #EEFDF4" :
                    i % 5 === 3 ? "#FFF8E8, #EAF8FF" :
                    "#EEFDF4, #FFF8E8"
                  })`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                }}
              >
                <span style={{ fontSize: "3rem" }} aria-hidden="true">{item.icon}</span>
                <span style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, color: "#8899AA", fontSize: "0.9rem" }}>
                  {item.label}
                </span>
              </div>
              <div
                style={{
                  padding: "10px 14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, color: "#18213D", fontSize: "0.9rem" }}>
                  {item.label}
                </span>
                <span
                  style={{
                    background: "#EAF8FF",
                    color: "#338BFF",
                    fontSize: "0.75rem",
                    fontFamily: "'Fredoka', sans-serif",
                    padding: "3px 10px",
                    borderRadius: 50,
                  }}
                >
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: 12,
            color: "#8899AA",
            fontSize: "0.88rem",
            fontStyle: "italic",
          }}
        >
          * Dodajte prave fotografije prostora za finalni izgled galerije
        </p>
      </div>

      {/* Talasasti razdelnik */}
      <div className="wave-divider" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }} aria-hidden="true" preserveAspectRatio="none">
          <path d="M0 0C480 60 960 60 1440 0V60H0Z" fill="#FFF0F5"/>
        </svg>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .gallery-columns {
            columns: 2 160px !important;
          }
        }
      `}</style>
    </section>
  );
}
