const activities = [
  {
    icon: "🌀",
    title: "Tunel",
    desc: "Uzbudljivi tunel za puzanje i istraživanje skrivenih prolaza.",
    color: "#EAF8FF",
    accent: "#338BFF",
  },
  {
    icon: "🛝",
    title: "3 tobogana",
    desc: "Tri raznobojna tobogana za brzu i uzbudljivu igru.",
    color: "#FFF0F5",
    accent: "#FF5F87",
  },
  {
    icon: "💡",
    title: "Interaktivni zid",
    desc: "Interaktivni zid koji spaja pokret, igru i digitalne sadržaje.",
    color: "#FFF8E8",
    accent: "#FFC928",
  },
  {
    icon: "⬆️",
    title: "3 trampoline",
    desc: "Tri trampoline za skakanje, zabavu i trošenje energije.",
    color: "#F5F0FF",
    accent: "#8059E8",
  },
  {
    icon: "🎢",
    title: "2 ljuljaške",
    desc: "Dve ljuljaške za slobodan let i vreme za maštanje.",
    color: "#EEFDF4",
    accent: "#45B95B",
  },
  {
    icon: "🧗",
    title: "Penjalice i lavirint",
    desc: "Lavirint, tuneli i penjalice za male istraživače koji vole izazove.",
    color: "#EAF8FF",
    accent: "#11B5C8",
  },
  {
    icon: "🕹️",
    title: "Arkadne igre",
    desc: "Klasični arkadni aparati za takmičarski duh i zabavu.",
    color: "#FFF0F5",
    accent: "#FF5F87",
  },
  {
    icon: "🎮",
    title: "PlayStation zona",
    desc: "Sony PS5 konzole sa popularnim igrama — FC 26, Minecraft, GTA V i još mnogo.",
    color: "#F5F0FF",
    accent: "#8059E8",
  },
];

export default function ActivitiesPreview() {
  return (
    <section
      id="aktivnosti"
      aria-labelledby="activities-heading"
      style={{
        background: "white",
        paddingTop: 16,
        paddingBottom: 80,
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Naslov */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div
            className="section-tag"
            style={{ background: "#EAF8FF", color: "#338BFF" }}
          >
            🎪 Sadržaji
          </div>
          <h2
            id="activities-heading"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontFamily: "'Fredoka', sans-serif",
              fontWeight: 700,
              color: "#18213D",
              marginBottom: 14,
            }}
          >
            Šta sve nudi{" "}
            <span style={{ color: "#FF5F87" }}>Sunny Playland?</span>
          </h2>
          <p style={{ color: "#6B7A99", fontSize: "1.05rem", maxWidth: 520, margin: "0 auto" }}>
            Od aktivne igre i penjanja do PlayStation i arkadnih izazova — svako dete može pronaći svoju omiljenu avanturu.
          </p>
        </div>

        {/* Grid kartica */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
          }}
          className="activities-grid"
        >
          {activities.map((a, i) => (
            <div
              key={a.title}
              className="card-hover"
              style={{
                background: a.color,
                borderRadius: 24,
                padding: "28px 24px",
                border: `2px solid ${a.accent}22`,
                position: "relative",
                overflow: "hidden",
                /* Make 3rd card slightly larger on desktop */
                ...(i === 2 ? {} : {}),
              }}
            >
              {/* Dekorativni krug */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: -20,
                  right: -20,
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: a.accent,
                  opacity: 0.08,
                }}
              />

              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.8rem",
                  marginBottom: 16,
                  boxShadow: `0 4px 14px ${a.accent}25`,
                  border: `2px solid ${a.accent}20`,
                }}
                aria-hidden="true"
              >
                {a.icon}
              </div>

              <h3
                style={{
                  fontFamily: "'Fredoka', sans-serif",
                  fontWeight: 600,
                  fontSize: "1.2rem",
                  color: "#18213D",
                  marginBottom: 8,
                }}
              >
                {a.title}
              </h3>
              <p style={{ color: "#6B7A99", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
                {a.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href="#kontakt" className="btn-blue" style={{ fontSize: "1rem" }}>
            📋 Pogledajte sve aktivnosti
          </a>
        </div>
      </div>

      {/* Talasasti razdelnik */}
      <div style={{ lineHeight: 0, marginTop: 60 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }} aria-hidden="true" preserveAspectRatio="none">
          <path d="M0 60C360 0 1080 0 1440 60V60H0V60Z" fill="#F5F0FF"/>
        </svg>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .activities-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 601px) and (max-width: 900px) {
          .activities-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
