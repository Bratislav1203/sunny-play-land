import { GameControllerSvg, StarSvg, ConfettiSvg } from "../svg/Decorations";

const games = [
  { name: "FC 26", icon: "⚽", color: "#338BFF" },
  { name: "GTA V", icon: "🚗", color: "#FF5F87" },
  { name: "Minecraft", icon: "⛏️", color: "#45B95B" },
  { name: "Fortnite", icon: "🎯", color: "#FFC928" },
  { name: "I još mnogo...", icon: "✨", color: "#8059E8" },
];

export default function GamingSection() {
  return (
    <section
      aria-labelledby="gaming-heading"
      style={{
        background: "linear-gradient(135deg, #1A1040 0%, #2D1B69 50%, #18213D 100%)",
        paddingTop: 80,
        paddingBottom: 0,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Neon dekoracije */}
      <div aria-hidden="true" style={{ position: "absolute", top: 40, left: 30, opacity: 0.2, pointerEvents: "none" }}>
        <StarSvg className="animate-float" style={{ width: 80, height: 80, filter: "hue-rotate(200deg) brightness(1.5)" }} />
      </div>
      <div aria-hidden="true" style={{ position: "absolute", bottom: 80, right: 40, opacity: 0.15, pointerEvents: "none" }}>
        <ConfettiSvg className="animate-confetti" />
      </div>

      {/* Neon mrežni uzorak */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle at 20% 30%, rgba(51,139,255,0.08) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(128,89,232,0.08) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 80px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
          className="gaming-grid"
        >
          {/* Leva strana */}
          <div>
            <div
              className="section-tag"
              style={{ background: "rgba(128,89,232,0.2)", color: "#C4ADFF", marginBottom: 20 }}
            >
              🎮 Gaming zona
            </div>
            <h2
              id="gaming-heading"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontFamily: "'Fredoka', sans-serif",
                fontWeight: 700,
                color: "white",
                marginBottom: 16,
                lineHeight: 1.15,
              }}
            >
              Zabava i za{" "}
              <span style={{ background: "linear-gradient(90deg, #C4ADFF, #FF91B2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                starije mališane
              </span>
            </h2>
            <p style={{ color: "#A8B4D0", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: 32, maxWidth: 440 }}>
              U posebnoj Sony PlayStation zoni deca i odrasli mogu igrati popularne PS5 igre — od sporta i avantura do градnje i akcije.
            </p>

            {/* Lista igara */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 32 }}>
              {games.map((g) => (
                <div
                  key={g.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: "rgba(255,255,255,0.07)",
                    border: `1px solid ${g.color}40`,
                    borderRadius: 50,
                    padding: "8px 16px",
                    color: "white",
                    fontFamily: "'Fredoka', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                  }}
                >
                  <span aria-hidden="true">{g.icon}</span>
                  {g.name}
                </div>
              ))}
            </div>

            <a href="#aktivnosti" className="btn-primary" style={{ fontSize: "1rem" }}>
              🎪 Pogledajte sve aktivnosti
            </a>
          </div>

          {/* Desna strana */}
          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            {/* PS5 foto placeholder */}
            <div
              style={{
                width: "100%",
                maxWidth: 420,
                aspectRatio: "4/3",
                borderRadius: 28,
                background: "linear-gradient(135deg, rgba(128,89,232,0.2), rgba(51,139,255,0.2))",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 16,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <GameControllerSvg style={{ width: 120, height: 84 }} />
              <p style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Fredoka', sans-serif", fontSize: "1rem" }}>
                Fotografija PS5 zone ovde
              </p>

              {/* Neon glow */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: -40,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 200,
                  height: 100,
                  background: "radial-gradient(ellipse, rgba(128,89,232,0.4), transparent)",
                  borderRadius: "50%",
                  filter: "blur(20px)",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* PS5 bedž */}
            <div
              style={{
                position: "absolute",
                top: -16,
                right: -16,
                background: "linear-gradient(135deg, #8059E8, #338BFF)",
                borderRadius: 20,
                padding: "12px 18px",
                boxShadow: "0 8px 30px rgba(128,89,232,0.4)",
                zIndex: 2,
              }}
              aria-label="PS5 konzole dostupne"
            >
              <div style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, color: "white", fontSize: "1.1rem", lineHeight: 1 }}>PS5</div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.75rem", marginTop: 2 }}>Konzole</div>
            </div>

            {/* Arkade bedž */}
            <div
              style={{
                position: "absolute",
                bottom: -16,
                left: -16,
                background: "linear-gradient(135deg, #FF5F87, #FFC928)",
                borderRadius: 20,
                padding: "12px 18px",
                boxShadow: "0 8px 30px rgba(255,95,135,0.4)",
                zIndex: 2,
              }}
              aria-label="Arkadne igre dostupne"
            >
              <div style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, color: "white", fontSize: "1rem", lineHeight: 1 }}>🕹️ Arkada</div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.75rem", marginTop: 2 }}>Klasični aparati</div>
            </div>
          </div>
        </div>
      </div>

      {/* Talasasti razdelnik */}
      <div style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }} aria-hidden="true" preserveAspectRatio="none">
          <path d="M0 0C480 60 960 60 1440 0V60H0Z" fill="#FFF8E8"/>
        </svg>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .gaming-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
