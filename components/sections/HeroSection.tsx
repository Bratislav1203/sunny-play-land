import { SunSvg, CloudSvg, StarSvg, BalloonsSvg, ConfettiSvg, RainbowSvg } from "../svg/Decorations";

const badges = [
  { icon: "🛝", label: "3 tobogana" },
  { icon: "🏃", label: "3 trampoline" },
  { icon: "🎮", label: "PS5 zona" },
  { icon: "☕", label: "Cafe za roditelje" },
];

export default function HeroSection() {
  return (
    <section
      aria-label="Dobrodošli u Sunny Playland"
      style={{
        background: "linear-gradient(160deg, #EAF8FF 0%, #FFF0F5 60%, #FFF8E8 100%)",
        position: "relative",
        overflow: "hidden",
        paddingBottom: 0,
      }}
    >
      {/* Dekoracije */}
      <div aria-hidden="true" style={{ position: "absolute", top: 20, left: -30, opacity: 0.55, pointerEvents: "none" }}>
        <CloudSvg className="animate-float-slow" />
      </div>
      <div aria-hidden="true" style={{ position: "absolute", top: 10, right: 60, opacity: 0.45, pointerEvents: "none" }}>
        <CloudSvg className="animate-float" style={{ transform: "scaleX(-1)" }} />
      </div>
      <div aria-hidden="true" style={{ position: "absolute", top: 30, right: "38%", opacity: 0.7, pointerEvents: "none" }}>
        <SunSvg className="animate-rotate-slow" style={{ width: 80, height: 80 }} />
      </div>
      <div aria-hidden="true" style={{ position: "absolute", top: 80, left: "8%", opacity: 0.55, pointerEvents: "none" }}>
        <StarSvg className="animate-float" style={{ width: 60, height: 60 }} />
      </div>
      <div aria-hidden="true" style={{ position: "absolute", top: 140, left: "2%", opacity: 0.4, pointerEvents: "none" }}>
        <ConfettiSvg className="animate-confetti" />
      </div>
      <div aria-hidden="true" style={{ position: "absolute", top: 60, right: "5%", opacity: 0.6, pointerEvents: "none" }}>
        <BalloonsSvg className="animate-float-slow" style={{ width: 100, height: 120 }} />
      </div>
      <div aria-hidden="true" style={{ position: "absolute", bottom: 80, left: "30%", opacity: 0.35, pointerEvents: "none" }}>
        <RainbowSvg style={{ width: 160 }} />
      </div>
      <div aria-hidden="true" style={{ position: "absolute", top: 200, right: "25%", opacity: 0.45, pointerEvents: "none" }}>
        <StarSvg className="animate-float-slow" style={{ width: 44, height: 44 }} />
      </div>

      {/* Sadržaj */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "72px 24px 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "center",
          minHeight: "calc(100vh - 72px)",
        }}
        className="hero-grid"
      >
        {/* Leva strana */}
        <div style={{ position: "relative", zIndex: 2 }}>
          {/* Tag */}
          <div
            className="section-tag"
            style={{ background: "#FFF0F5", color: "#FF5F87", marginBottom: 20 }}
          >
            ✨ Dečija igraonica & cafe · Višnjička banja
          </div>

          {/* Naslov */}
          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontFamily: "'Fredoka', sans-serif",
              fontWeight: 700,
              lineHeight: 1.12,
              marginBottom: 24,
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ color: "#18213D" }}>Mesto gde </span>
            <span style={{ background: "linear-gradient(90deg, #8059E8, #FF5F87)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              igra postaje
            </span>
            <br />
            <span style={{ background: "linear-gradient(90deg, #FF5F87, #FF8C00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              avantura!
            </span>
          </h1>

          {/* Podnaslov */}
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "#4A5568",
              lineHeight: 1.7,
              marginBottom: 36,
              maxWidth: 480,
            }}
          >
            Tobogani, trampoline, lavirint, arkadne igre, PlayStation zona i prijatan cafe za roditelje — zabava za celu porodicu na jednom mestu.
          </p>

          {/* CTA dugmad */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 36 }}>
            <a href="#aktivnosti" className="btn-primary" style={{ fontSize: "1rem", padding: "14px 28px" }}>
              🎪 Pogledajte aktivnosti
            </a>
            <a href="#rodjendani" className="btn-blue" style={{ fontSize: "1rem", padding: "14px 28px" }}>
              🎂 Rezervišite rođendan
            </a>
            <a
              href="tel:+381692223390"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: "#FF5F87",
                fontFamily: "'Fredoka', sans-serif",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
                padding: "14px 4px",
              }}
            >
              📞 Pozovite nas
            </a>
          </div>

          {/* Bedževi */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {badges.map((b) => (
              <div
                key={b.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  background: "white",
                  border: "2px solid #FFE4ED",
                  borderRadius: 50,
                  padding: "8px 16px",
                  fontFamily: "'Fredoka', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  color: "#18213D",
                  boxShadow: "0 3px 10px rgba(255,95,135,0.1)",
                }}
              >
                <span aria-hidden="true">{b.icon}</span>
                {b.label}
              </div>
            ))}
          </div>
        </div>

        {/* Desna strana — fotografija */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 40,
          }}
          className="hero-photo-col"
        >
          {/* Glavni okvir fotografije */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 500,
            }}
          >
            {/* Blob pozadinski krug */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: -20,
                background: "linear-gradient(135deg, rgba(255,95,135,0.15), rgba(51,139,255,0.15))",
                borderRadius: "60% 40% 50% 50% / 40% 50% 50% 60%",
                zIndex: 0,
              }}
            />

            {/* Fotografija placeholder */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                borderRadius: "40% 60% 55% 45% / 45% 40% 60% 55%",
                overflow: "hidden",
                aspectRatio: "4/3",
                boxShadow: "0 24px 60px rgba(0,0,0,0.15)",
                background: "linear-gradient(135deg, #FFF0F5, #EAF8FF)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Ovde ide prava fotografija igraonice */}
              <div style={{ textAlign: "center", padding: 40 }}>
                <div style={{ fontSize: "4rem", marginBottom: 12 }}>🛝</div>
                <p style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, color: "#FF5F87", fontSize: "1.1rem" }}>
                  Vaša fotografija ovde
                </p>
                <p style={{ color: "#8899AA", fontSize: "0.85rem", marginTop: 6 }}>
                  Dodajte pravu sliku igraonice
                </p>
              </div>
            </div>

            {/* Speech bubble */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: -10,
                left: -30,
                zIndex: 3,
                background: "white",
                borderRadius: "20px 20px 20px 6px",
                padding: "14px 22px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                maxWidth: 280,
                border: "2px solid #FFE4ED",
              }}
            >
              <p style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "1.19rem", color: "#FF5F87", lineHeight: 1.4, margin: 0 }}>
                😄 Smeh, igra i nove avanture svakog dana!
              </p>
            </div>

            {/* Dekorativna zvezda */}
            <div
              aria-hidden="true"
              style={{ position: "absolute", top: -20, right: -20, zIndex: 3 }}
              className="animate-float"
            >
              <StarSvg style={{ width: 70, height: 70 }} />
            </div>

            {/* Mali sunce */}
            <div
              aria-hidden="true"
              style={{ position: "absolute", bottom: 20, right: -30, zIndex: 3 }}
              className="animate-rotate-slow"
            >
              <SunSvg style={{ width: 60, height: 60 }} />
            </div>
          </div>
        </div>
      </div>

      {/* Talasasti razdelnik */}
      <div style={{ lineHeight: 0, marginTop: 60, position: "relative", zIndex: 1 }}>
        <svg
          viewBox="0 0 1440 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", width: "100%" }}
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0C240 70 480 70 720 35C960 0 1200 0 1440 35V70H0V0Z"
            fill="white"
          />
        </svg>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding-top: 48px !important;
            gap: 32px !important;
          }
          .hero-photo-col {
            order: -1;
          }
        }
        @media (max-width: 600px) {
          .hero-grid {
            padding-top: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
