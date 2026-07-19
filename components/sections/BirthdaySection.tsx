import { BalloonsSvg, GiftSvg, ConfettiSvg, StarSvg } from "../svg/Decorations";

const packages = [
  {
    icon: "🎈",
    title: "Manja proslava",
    features: ["Prostor za manje grupe", "Aktivnosti po izboru", "Cafe deo za odrasle"],
    cta: "Pošaljite upit",
    accent: "#FF91B2",
    bg: "#FFF0F5",
  },
  {
    icon: "🎂",
    title: "Standardna proslava",
    features: ["Veći prostor za proslavu", "Svi sadržaji igraonice", "PlayStation i arkadne igre", "Cafe deo za roditelje"],
    cta: "Pošaljite upit",
    accent: "#FF5F87",
    bg: "#FFE4ED",
    featured: true,
  },
  {
    icon: "🎊",
    title: "Proslava po dogovoru",
    features: ["Termin i sadržaji po dogovoru", "Prilagođeno broju gostiju"],
    cta: "Pozovite za ponudu",
    accent: "#8059E8",
    bg: "#F5F0FF",
  },
];

export default function BirthdaySection() {
  return (
    <section
      id="rodjendani"
      aria-labelledby="birthday-heading"
      style={{
        background: "#FFF0F5",
        paddingTop: 16,
        paddingBottom: 0,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dekoracije */}
      <div aria-hidden="true" style={{ position: "absolute", top: 40, right: 60, opacity: 0.5, pointerEvents: "none" }}>
        <BalloonsSvg className="animate-float-slow" style={{ width: 120, height: 148 }} />
      </div>
      <div aria-hidden="true" style={{ position: "absolute", top: 80, left: 30, opacity: 0.35, pointerEvents: "none" }}>
        <ConfettiSvg className="animate-confetti" />
      </div>
      <div aria-hidden="true" style={{ position: "absolute", bottom: 120, right: 100, opacity: 0.4, pointerEvents: "none" }}>
        <StarSvg className="animate-float" style={{ width: 60, height: 60 }} />
      </div>
      <div aria-hidden="true" style={{ position: "absolute", bottom: 80, left: 60, opacity: 0.35, pointerEvents: "none" }}>
        <GiftSvg className="animate-pulse-scale" style={{ width: 60 }} />
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 24px 80px", position: "relative", zIndex: 1 }}>
        {/* Naslov */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="section-tag" style={{ background: "white", color: "#FF5F87" }}>
            🎂 Rođendani
          </div>
          <h2
            id="birthday-heading"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontFamily: "'Fredoka', sans-serif",
              fontWeight: 700,
              color: "#18213D",
              marginBottom: 14,
            }}
          >
            Rođendani puni igre i{" "}
            <span style={{ color: "#FF5F87" }}>najlepših uspomena</span>
          </h2>
          <p style={{ color: "#6B7A99", fontSize: "1.05rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            Organizujte dečiji rođendan u prostoru punom tobogana, trampolina, arkadnih igara, PlayStation sadržaja i aktivnosti za različite uzraste.
          </p>
        </div>

        {/* Kartice paketa */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            marginBottom: 48,
          }}
          className="birthday-grid"
        >
          {packages.map((p) => (
            <div
              key={p.title}
              className="card-hover"
              style={{
                background: p.featured ? "white" : p.bg,
                borderRadius: 28,
                padding: "32px 28px",
                border: p.featured ? `3px solid ${p.accent}` : `2px solid ${p.accent}30`,
                position: "relative",
                boxShadow: p.featured ? `0 16px 40px ${p.accent}25` : "0 4px 16px rgba(0,0,0,0.06)",
              }}
            >
              {p.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: -14,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: `linear-gradient(135deg, ${p.accent}, #FF91B2)`,
                    color: "white",
                    fontFamily: "'Fredoka', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    padding: "5px 18px",
                    borderRadius: 50,
                    whiteSpace: "nowrap",
                  }}
                >
                  ✨ Najpopularnije
                </div>
              )}

              <div style={{ fontSize: "2.5rem", marginBottom: 14 }} aria-hidden="true">{p.icon}</div>
              <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "#18213D", marginBottom: 16 }}>
                {p.title}
              </h3>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 10 }}>
                {p.features.map((f) => (
                  <li
                    key={f}
                    style={{ display: "flex", alignItems: "flex-start", gap: 8, color: "#4A5568", fontSize: "0.92rem", lineHeight: 1.5 }}
                  >
                    <span style={{ color: p.accent, fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div style={{ marginBottom: 12, padding: "10px 14px", background: "rgba(255,255,255,0.7)", borderRadius: 12, border: `1px solid ${p.accent}20` }}>
                <p style={{ color: "#8899AA", fontSize: "0.82rem", margin: 0, fontStyle: "italic" }}>
                  Dogovor prema broju dece i terminu
                </p>
              </div>

              <a
                href="/kontakt"
                className={p.featured ? "btn-primary" : "btn-outline"}
                style={{ display: "flex", justifyContent: "center", width: "100%", fontSize: "0.95rem", ...(p.featured ? {} : { color: p.accent, borderColor: p.accent }) }}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        {/* CTA blok */}
        <div
          style={{
            background: "white",
            borderRadius: 28,
            padding: "36px 40px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            border: "2px solid #FFE4ED",
            boxShadow: "0 8px 30px rgba(255,95,135,0.1)",
          }}
          className="birthday-cta-block"
        >
          <div>
            <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: "1.4rem", color: "#18213D", marginBottom: 8 }}>
              🎉 Proverite slobodan termin
            </h3>
            <p style={{ color: "#6B7A99", fontSize: "0.95rem", margin: 0 }}>
              Naš tim će vas kontaktirati radi potvrde dostupnosti i dogovora svih detalja.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="/kontakt" className="btn-primary">🎂 Pošaljite upit</a>
            <a href="tel:+381692223390" className="btn-outline">📞 Pozovite nas</a>
          </div>
        </div>
      </div>

      {/* Talasasti razdelnik */}
      <div className="wave-divider" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }} aria-hidden="true" preserveAspectRatio="none">
          <path d="M0 60C480 0 960 0 1440 60V60H0Z" fill="white"/>
        </svg>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .birthday-grid {
            grid-template-columns: 1fr !important;
          }
          .birthday-cta-block {
            padding: 28px 24px !important;
          }
        }
        @media (min-width: 601px) and (max-width: 900px) {
          .birthday-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
