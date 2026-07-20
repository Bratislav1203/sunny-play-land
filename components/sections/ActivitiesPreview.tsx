const activities = [
  {
    icon: "🌀",
    title: "Tunel",
    desc: "Uzbudljivi tunel za puzanje i istraživanje skrivenih prolaza.",
    bg: "#338BFF",
  },
  {
    icon: "🛝",
    title: "3 tobogana",
    desc: "Tri raznobojna tobogana za brzu i uzbudljivu igru.",
    bg: "#FF5F87",
  },
  {
    icon: "💡",
    title: "Interaktivni zid",
    desc: "Interaktivni zid koji spaja pokret, igru i digitalne sadržaje.",
    bg: "#FFC928",
  },
  {
    icon: "⬆️",
    title: "3 trampoline",
    desc: "Tri trampoline za skakanje, zabavu i trošenje energije.",
    bg: "#8059E8",
  },
  {
    icon: "🎢",
    title: "2 ljuljaške",
    desc: "Dve ljuljaške za slobodan let i vreme za maštanje.",
    bg: "#45B95B",
  },
  {
    icon: "🧗",
    title: "Penjalice i lavirint",
    desc: "Lavirint, tuneli i penjalice za male istraživače koji vole izazove.",
    bg: "#11B5C8",
  },
  {
    icon: "🕹️",
    title: "Arkadne igre",
    desc: "Klasični arkadni aparati za takmičarski duh i zabavu.",
    bg: "#FF8A41",
  },
  {
    icon: "🎮",
    title: "PlayStation zona",
    desc: "Sony PS5 konzole sa popularnim igrama — FC 26, Minecraft, GTA V i još mnogo.",
    bg: "#2D1B69",
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
        paddingBottom: 0,
        position: "relative",
      }}
    >
      {/* Naslov */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", marginBottom: 48 }}>
        <div style={{ textAlign: "center" }}>
          <div className="section-tag" style={{ background: "#EAF8FF", color: "#338BFF" }}>
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
      </div>

      {/* Grid kartica — full width */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 6,
        }}
        className="activities-grid"
      >
        {activities.map((a) => (
          <div
            key={a.title}
            className="card-hover"
            style={{
              background: a.bg,
              borderRadius: 0,
              padding: "44px 30px 40px",
              position: "relative",
              overflow: "hidden",
              minHeight: 242,
            }}
          >
            {/* Dekorativni krug u pozadini */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: -30,
                right: -30,
                width: 132,
                height: 132,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.12)",
              }}
            />
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: -20,
                left: -20,
                width: 88,
                height: 88,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.08)",
              }}
            />

            {/* Emoji krug */}
            <div
              style={{
                width: 75,
                height: 75,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.25)",
                border: "3px solid rgba(255,255,255,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2.2rem",
                marginBottom: 22,
              }}
              aria-hidden="true"
            >
              {a.icon}
            </div>

            <h3
              style={{
                fontFamily: "'Fredoka', sans-serif",
                fontWeight: 700,
                fontSize: "1.43rem",
                color: "white",
                marginBottom: 11,
              }}
            >
              {a.title}
            </h3>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.99rem", lineHeight: 1.6, margin: 0 }}>
              {a.desc}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center", marginTop: 48 }}>
        <a href="/aktivnosti" className="btn-blue" style={{ fontSize: "1rem" }}>
          📋 Pogledajte sve aktivnosti
        </a>
      </div>

      <div className="wave-divider" style={{ lineHeight: 0, marginTop: 60 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }} aria-hidden="true" preserveAspectRatio="none">
          <path d="M0 60C360 0 1080 0 1440 60V60H0V60Z" fill="#F5F0FF"/>
        </svg>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .activities-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 601px) and (max-width: 900px) {
          .activities-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 901px) and (max-width: 1100px) {
          .activities-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
