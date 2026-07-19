import { RocketSvg, StarSvg } from "../svg/Decorations";

const benefits = [
  {
    icon: "🎪",
    title: "Raznovrsni sadržaji",
    desc: "Tobogani, trampoline, lavirint, penjalice, tunel, ljuljaške i interaktivni zid — sve na jednom mestu.",
    color: "#EAF8FF",
    accent: "#338BFF",
  },
  {
    icon: "👶",
    title: "Za mlađu i stariju decu",
    desc: "Aktivnosti prilagođene različitim uzrastima — od prvog skakanja do pravog gaming iskustva.",
    color: "#FFF0F5",
    accent: "#FF5F87",
  },
  {
    icon: "🎮",
    title: "PlayStation i arkade",
    desc: "PS5 konzole sa popularnim igrama i klasični arkadni aparati za nezaboravnu zabavu.",
    color: "#F5F0FF",
    accent: "#8059E8",
  },
  {
    icon: "🏃",
    title: "Aktivna igra",
    desc: "Prostor osmišljen za pokret — deca troše energiju, razvijaju motoriku i uživaju.",
    color: "#EEFDF4",
    accent: "#45B95B",
  },
  {
    icon: "☕",
    title: "Cafe za roditelje",
    desc: "Dok se mališani igraju, roditelji mogu da se opuste u prijatnom cafe delu.",
    color: "#FFF8E8",
    accent: "#FFC928",
  },
  {
    icon: "📍",
    title: "Lokacija u Sunnyville",
    desc: "Lako dostupna lokacija na Slanačkom putu 76d u okviru Sunnyville kompleksa.",
    color: "#EAF8FF",
    accent: "#11B5C8",
  },
];

export default function BenefitsSection() {
  return (
    <section
      aria-labelledby="benefits-heading"
      style={{
        background: "white",
        paddingTop: 0,
        paddingBottom: 0,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dekoracije */}
      <div aria-hidden="true" style={{ position: "absolute", top: 60, right: 40, opacity: 0.3, pointerEvents: "none" }}>
        <RocketSvg className="animate-float" style={{ width: 60, height: 86 }} />
      </div>
      <div aria-hidden="true" style={{ position: "absolute", bottom: 80, left: 50, opacity: 0.35, pointerEvents: "none" }}>
        <StarSvg className="animate-float-slow" style={{ width: 56, height: 56 }} />
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px 80px" }}>
        {/* Naslov */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="section-tag" style={{ background: "#EAF8FF", color: "#338BFF" }}>
            ⭐ Zašto Sunny Playland
          </div>
          <h2
            id="benefits-heading"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontFamily: "'Fredoka', sans-serif",
              fontWeight: 700,
              color: "#18213D",
              marginBottom: 14,
            }}
          >
            Sve što vam treba{" "}
            <span style={{ color: "#338BFF" }}>na jednom mestu</span>
          </h2>
          <p style={{ color: "#6B7A99", fontSize: "1.05rem", maxWidth: 480, margin: "0 auto" }}>
            Zabava za decu, vreme za predah za roditelje — Sunny Playland je mesto za celu porodicu.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
          className="benefits-grid"
        >
          {benefits.map((b) => (
            <div
              key={b.title}
              className="card-hover"
              style={{
                background: b.color,
                borderRadius: 24,
                padding: "28px 24px",
                border: `1.5px solid ${b.accent}20`,
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.6rem",
                  marginBottom: 16,
                  boxShadow: `0 4px 12px ${b.accent}20`,
                }}
                aria-hidden="true"
              >
                {b.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Fredoka', sans-serif",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  color: "#18213D",
                  marginBottom: 8,
                }}
              >
                {b.title}
              </h3>
              <p style={{ color: "#6B7A99", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Talasasti razdelnik */}
      <div className="wave-divider" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }} aria-hidden="true" preserveAspectRatio="none">
          <path d="M0 30C360 60 1080 0 1440 30V60H0Z" fill="#EAF8FF"/>
        </svg>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 580px) {
          .benefits-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
