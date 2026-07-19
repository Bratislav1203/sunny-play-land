"use client";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { BalloonsSvg, GiftSvg, ConfettiSvg, StarSvg, RainbowSvg } from "@/components/svg/Decorations";
import { useState } from "react";

const highlights = [
  { icon: "🛝", label: "Tobogani i trampoline" },
  { icon: "🗺️", label: "Lavirint i penjalice" },
  { icon: "🎮", label: "PlayStation zona" },
  { icon: "🕹️", label: "Arkadne igre" },
  { icon: "☕", label: "Cafe za roditelje" },
];

export default function RodjendaniPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "linear-gradient(160deg, #FFF0F5 0%, #F5F0FF 100%)", position: "relative", overflow: "hidden", paddingBottom: 0 }}>
          <div aria-hidden="true" style={{ position: "absolute", top: 30, right: 60, opacity: 0.5, pointerEvents: "none" }}>
            <BalloonsSvg className="animate-float-slow" style={{ width: 120, height: 148 }} />
          </div>
          <div aria-hidden="true" style={{ position: "absolute", top: 60, left: 30, opacity: 0.3, pointerEvents: "none" }}>
            <ConfettiSvg className="animate-confetti" />
          </div>
          <div aria-hidden="true" style={{ position: "absolute", bottom: 80, left: 80, opacity: 0.35, pointerEvents: "none" }}>
            <RainbowSvg style={{ width: 160 }} />
          </div>

          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px 0", position: "relative", zIndex: 1 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="birthday-hero-grid">
              <div>
                <div className="section-tag" style={{ background: "white", color: "#FF5F87" }}>🎂 Rođendani</div>
                <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)", fontFamily: "'Fredoka', sans-serif", fontWeight: 700, color: "#18213D", marginBottom: 16, lineHeight: 1.1 }}>
                  Proslavite rođendan uz{" "}
                  <span style={{ color: "#FF5F87" }}>igru, smeh</span>{" "}
                  i avanturu
                </h1>
                <p style={{ color: "#6B7A99", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: 28, maxWidth: 480 }}>
                  Tobogani, trampoline, lavirint, PlayStation i arkadne igre čine svaku proslavu posebnom. Organizujte nezaboravan dečiji rođendan u Sunny Playlandу.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 32 }}>
                  {highlights.map((h) => (
                    <div key={h.label} style={{ display: "flex", alignItems: "center", gap: 7, background: "white", border: "2px solid #FFE4ED", borderRadius: 50, padding: "8px 16px", fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "0.88rem", color: "#18213D", boxShadow: "0 3px 10px rgba(255,95,135,0.1)" }}>
                      <span aria-hidden="true">{h.icon}</span>{h.label}
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <a href="#upit" className="btn-primary">🎂 Pošaljite upit</a>
                  <a href="tel:+381692223390" className="btn-outline">📞 Pozovite nas</a>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
                <div style={{ width: "100%", maxWidth: 420, aspectRatio: "4/3", borderRadius: "40% 60% 55% 45% / 45% 40% 60% 55%", background: "linear-gradient(135deg, #FFF0F5, #F5F0FF)", border: "3px solid rgba(255,95,135,0.2)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14, boxShadow: "0 20px 50px rgba(255,95,135,0.15)" }}>
                  <div style={{ display: "flex", gap: 16, fontSize: "3rem" }} aria-hidden="true">🎂🎈🎉</div>
                  <p style={{ color: "#FF91B2", fontFamily: "'Fredoka', sans-serif", fontSize: "1rem" }}>Fotografija proslave ovde</p>
                </div>
                <div aria-hidden="true" style={{ position: "absolute", top: -10, right: -10, zIndex: 2 }} className="animate-float">
                  <StarSvg style={{ width: 60, height: 60 }} />
                </div>
                <div aria-hidden="true" style={{ position: "absolute", bottom: -10, left: -10, zIndex: 2 }} className="animate-pulse-scale">
                  <GiftSvg style={{ width: 56 }} />
                </div>
              </div>
            </div>
          </div>

          <div style={{ lineHeight: 0, marginTop: 60 }}>
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }} aria-hidden="true" preserveAspectRatio="none">
              <path d="M0 0C480 60 960 60 1440 0V60H0Z" fill="white" />
            </svg>
          </div>
        </section>

        {/* Paketi */}
        <section style={{ background: "white", padding: "72px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="section-tag" style={{ background: "#FFF0F5", color: "#FF5F87" }}>🎊 Opcije proslave</div>
              <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", color: "#18213D", marginBottom: 12 }}>
                Prilagodite proslavu{" "}
                <span style={{ color: "#FF5F87" }}>po svojoj meri</span>
              </h2>
              <p style={{ color: "#6B7A99", fontSize: "1rem", maxWidth: 500, margin: "0 auto" }}>
                Kontaktirajte nas za dogovor oko termina, broja gostiju i sadržaja.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="packages-grid">
              {[
                { icon: "🎈", title: "Manja proslava", color: "#FFF0F5", accent: "#FF91B2", features: ["Prostor za manje grupe", "Aktivnosti po izboru", "Cafe deo za roditelje"] },
                { icon: "🎂", title: "Standardna proslava", color: "white", accent: "#FF5F87", features: ["Veći prostor za proslavu", "Svi sadržaji igraonice", "PlayStation i arkadne igre", "Cafe deo za roditelje"], featured: true },
                { icon: "🎊", title: "Proslava po dogovoru", color: "#F5F0FF", accent: "#8059E8", features: ["Termin i sadržaji po dogovoru", "Prilagođeno broju gostiju"] },
              ].map((p) => (
                <div key={p.title} className="card-hover" style={{ background: p.color, borderRadius: 28, padding: "32px 28px", border: p.featured ? `3px solid ${p.accent}` : `2px solid ${p.accent}25`, position: "relative", boxShadow: p.featured ? `0 16px 40px ${p.accent}20` : "none" }}>
                  {p.featured && (
                    <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: `linear-gradient(135deg, ${p.accent}, #FF91B2)`, color: "white", fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "0.85rem", padding: "5px 18px", borderRadius: 50, whiteSpace: "nowrap" }}>
                      ✨ Najpopularnije
                    </div>
                  )}
                  <div style={{ fontSize: "2.5rem", marginBottom: 14 }} aria-hidden="true">{p.icon}</div>
                  <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#18213D", marginBottom: 16 }}>{p.title}</h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 10 }}>
                    {p.features.map((f) => (
                      <li key={f} style={{ display: "flex", gap: 8, color: "#4A5568", fontSize: "0.92rem" }}>
                        <span style={{ color: p.accent, fontWeight: 700, flexShrink: 0 }}>✓</span>{f}
                      </li>
                    ))}
                  </ul>
                  <div style={{ padding: "10px 14px", background: "rgba(255,255,255,0.7)", borderRadius: 12, marginBottom: 14, border: `1px solid ${p.accent}20` }}>
                    <p style={{ color: "#8899AA", fontSize: "0.82rem", margin: 0, fontStyle: "italic" }}>Dogovor prema broju dece i terminu</p>
                  </div>
                  <a href="#upit" className={p.featured ? "btn-primary" : "btn-outline"} style={{ display: "flex", justifyContent: "center", fontSize: "0.95rem", ...(p.featured ? {} : { color: p.accent, borderColor: p.accent }) }}>
                    Pošaljite upit
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formular */}
        <section id="upit" style={{ background: "#FFF0F5", padding: "72px 24px", position: "relative", overflow: "hidden" }}>
          <div aria-hidden="true" style={{ position: "absolute", top: 30, right: 30, opacity: 0.2, pointerEvents: "none" }}>
            <ConfettiSvg className="animate-confetti" />
          </div>
          <div style={{ maxWidth: 680, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <div className="section-tag" style={{ background: "white", color: "#FF5F87" }}>📋 Upit za termin</div>
              <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", color: "#18213D", marginBottom: 12 }}>
                Proverite slobodan termin
              </h2>
              <p style={{ color: "#6B7A99", fontSize: "1rem" }}>
                Naš tim će vas kontaktirati radi potvrde dostupnosti i dogovora svih detalja.
              </p>
            </div>

            {submitted ? (
              <div style={{ background: "white", borderRadius: 28, padding: "48px 32px", textAlign: "center", boxShadow: "0 12px 40px rgba(255,95,135,0.12)" }}>
                <div style={{ fontSize: "4rem", marginBottom: 16 }}>🎉</div>
                <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: "1.6rem", color: "#18213D", marginBottom: 12 }}>Upit je primljen!</h3>
                <p style={{ color: "#6B7A99", fontSize: "1rem", lineHeight: 1.7 }}>Kontaktiraćemo vas uskoro radi potvrde termina i dogovora svih detalja.</p>
              </div>
            ) : (
              <div style={{ background: "white", borderRadius: 28, padding: "40px 36px", boxShadow: "0 12px 40px rgba(255,95,135,0.1)" }}>
                <form style={{ display: "flex", flexDirection: "column", gap: 18 }} onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-2col">
                    {[
                      { id: "ime", label: "Ime i prezime *", type: "text", placeholder: "Npr. Ana Petrović", required: true },
                      { id: "telefon", label: "Telefon *", type: "tel", placeholder: "06x xxx xxxx", required: true },
                    ].map((f) => (
                      <div key={f.id}>
                        <label htmlFor={f.id} style={{ display: "block", fontFamily: "'Fredoka', sans-serif", fontWeight: 600, color: "#18213D", fontSize: "0.9rem", marginBottom: 6 }}>{f.label}</label>
                        <input id={f.id} type={f.type} required={f.required} placeholder={f.placeholder} style={{ width: "100%", padding: "11px 14px", borderRadius: 12, border: "2px solid #E8EEF4", fontFamily: "'Nunito', sans-serif", fontSize: "0.92rem", color: "#18213D", outline: "none" }} />
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-2col">
                    <div>
                      <label htmlFor="datum" style={{ display: "block", fontFamily: "'Fredoka', sans-serif", fontWeight: 600, color: "#18213D", fontSize: "0.9rem", marginBottom: 6 }}>Željeni datum</label>
                      <input id="datum" type="date" style={{ width: "100%", padding: "11px 14px", borderRadius: 12, border: "2px solid #E8EEF4", fontFamily: "'Nunito', sans-serif", fontSize: "0.92rem", color: "#18213D", outline: "none", background: "white" }} />
                    </div>
                    <div>
                      <label htmlFor="vreme" style={{ display: "block", fontFamily: "'Fredoka', sans-serif", fontWeight: 600, color: "#18213D", fontSize: "0.9rem", marginBottom: 6 }}>Okvirno vreme</label>
                      <input id="vreme" type="time" style={{ width: "100%", padding: "11px 14px", borderRadius: 12, border: "2px solid #E8EEF4", fontFamily: "'Nunito', sans-serif", fontSize: "0.92rem", color: "#18213D", outline: "none", background: "white" }} />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }} className="form-3col">
                    {[
                      { id: "deca", label: "Broj dece", type: "number", placeholder: "Npr. 10" },
                      { id: "uzrast", label: "Uzrast dece", type: "text", placeholder: "Npr. 5–9 god." },
                      { id: "odrasli", label: "Broj odraslih", type: "number", placeholder: "Npr. 15" },
                    ].map((f) => (
                      <div key={f.id}>
                        <label htmlFor={f.id} style={{ display: "block", fontFamily: "'Fredoka', sans-serif", fontWeight: 600, color: "#18213D", fontSize: "0.9rem", marginBottom: 6 }}>{f.label}</label>
                        <input id={f.id} type={f.type} placeholder={f.placeholder} style={{ width: "100%", padding: "11px 14px", borderRadius: 12, border: "2px solid #E8EEF4", fontFamily: "'Nunito', sans-serif", fontSize: "0.92rem", color: "#18213D", outline: "none" }} />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label htmlFor="sadrzaji" style={{ display: "block", fontFamily: "'Fredoka', sans-serif", fontWeight: 600, color: "#18213D", fontSize: "0.9rem", marginBottom: 6 }}>Šta vas najviše zanima?</label>
                    <select id="sadrzaji" style={{ width: "100%", padding: "11px 14px", borderRadius: 12, border: "2px solid #E8EEF4", fontFamily: "'Nunito', sans-serif", fontSize: "0.92rem", color: "#18213D", outline: "none", background: "white" }}>
                      <option value="">Izaberite sadržaj</option>
                      <option value="aktivna">Aktivna igra (tobogani, trampoline...)</option>
                      <option value="gaming">PlayStation i arkadne igre</option>
                      <option value="sve">Sve aktivnosti</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="napomena" style={{ display: "block", fontFamily: "'Fredoka', sans-serif", fontWeight: 600, color: "#18213D", fontSize: "0.9rem", marginBottom: 6 }}>Dodatna napomena</label>
                    <textarea id="napomena" rows={3} placeholder="Posebni zahtevi, pitanja..." style={{ width: "100%", padding: "11px 14px", borderRadius: 12, border: "2px solid #E8EEF4", fontFamily: "'Nunito', sans-serif", fontSize: "0.92rem", color: "#18213D", outline: "none", resize: "vertical" }} />
                  </div>

                  <button type="submit" className="btn-primary" style={{ justifyContent: "center", fontSize: "1.05rem", padding: "16px 32px" }}>
                    🎂 Pošaljite upit
                  </button>
                </form>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
      <style>{`
        @media (max-width: 900px) {
          .birthday-hero-grid { grid-template-columns: 1fr !important; }
          .packages-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .form-2col, .form-3col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
