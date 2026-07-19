import { HeartSvg, CloudSvg } from "../svg/Decorations";

const perks = [
  { icon: "🛋️", label: "Udoban prostor" },
  { icon: "☕", label: "Topli napici" },
  { icon: "🧃", label: "Hladni napici" },
  { icon: "👀", label: "Pogled na prostor za igru" },
  { icon: "💬", label: "Prijatna atmosfera" },
];

export default function CafeSection() {
  return (
    <section
      aria-labelledby="cafe-heading"
      style={{
        background: "#FFF8E8",
        paddingTop: 16,
        paddingBottom: 0,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dekoracije */}
      <div aria-hidden="true" style={{ position: "absolute", top: 30, right: 40, opacity: 0.3, pointerEvents: "none" }}>
        <CloudSvg className="animate-float-slow" style={{ width: 180 }} />
      </div>
      <div aria-hidden="true" style={{ position: "absolute", bottom: 60, left: 20, opacity: 0.25, pointerEvents: "none" }}>
        <HeartSvg className="animate-pulse-scale" style={{ width: 50 }} />
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 24px 80px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
          className="cafe-grid"
        >
          {/* Leva strana — foto */}
          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            {/* Blob pozadina */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: -20,
                background: "linear-gradient(135deg, rgba(255,200,40,0.15), rgba(255,95,135,0.1))",
                borderRadius: "50% 40% 45% 55% / 40% 55% 45% 50%",
                pointerEvents: "none",
              }}
            />

            {/* Foto */}
            <div
              style={{
                width: "100%",
                maxWidth: 420,
                aspectRatio: "4/3",
                borderRadius: "40% 60% 50% 50% / 50% 40% 60% 50%",
                overflow: "hidden",
                position: "relative",
                zIndex: 1,
                boxShadow: "0 20px 50px rgba(255,200,40,0.2)",
                border: "3px solid rgba(255,200,40,0.3)",
              }}
            >
              <img
                src="/images/kafe.png"
                alt="Cafe deo Sunny Playland"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

          </div>

          {/* Desna strana */}
          <div>
            <div
              className="section-tag"
              style={{ background: "#FFF0E0", color: "#D07020" }}
            >
              ☕ Cafe za odrasle
            </div>
            <h2
              id="cafe-heading"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontFamily: "'Fredoka', sans-serif",
                fontWeight: 700,
                color: "#18213D",
                marginBottom: 16,
                lineHeight: 1.2,
              }}
            >
              Dok se deca igraju,{" "}
              <span style={{ color: "#FF5F87" }}>vi se opustite</span>
            </h2>
            <p style={{ color: "#6B7A99", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: 28, maxWidth: 440 }}>
              Sunny Playland ima poseban cafe deo za odrasle, sa udobnim mestima za sedenje i ponudom toplih i hladnih napitaka. Roditelji mogu da uživaju u prijatnoj atmosferi dok se mališani zabavljaju.
            </p>

            {/* Perks lista */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
              {perks.map((p) => (
                <div
                  key={p.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "12px 16px",
                    background: "white",
                    borderRadius: 14,
                    border: "1.5px solid #FFE4B5",
                    boxShadow: "0 2px 8px rgba(255,200,40,0.1)",
                  }}
                >
                  <span style={{ fontSize: "1.3rem" }} aria-hidden="true">{p.icon}</span>
                  <span style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, color: "#18213D", fontSize: "1rem" }}>
                    {p.label}
                  </span>
                </div>
              ))}
            </div>

            <a href="/kontakt" className="btn-primary" style={{ fontSize: "1rem" }}>
              📍 Posetite nas
            </a>
          </div>
        </div>
      </div>

      {/* Talasasti razdelnik */}
      <div className="wave-divider" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }} aria-hidden="true" preserveAspectRatio="none">
          <path d="M0 35C360 70 1080 0 1440 35V70H0Z" fill="#FFF0F5"/>
        </svg>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cafe-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
