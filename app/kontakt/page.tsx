"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { CloudSvg, StarSvg } from "@/components/svg/Decorations";
import { useState } from "react";

const faqs = [
  { q: "Kako mogu da rezervišem dečiji rođendan?", a: "Pošaljite upit putem formulara na ovoj stranici ili nas pozovite direktno na +381 69 222 33 90. Naš tim će vas kontaktirati radi potvrde termina i dogovora svih detalja." },
  { q: "Da li je potrebno rezervisati dnevnu igru?", a: "Preporučujemo da nas kontaktirate pre dolaska kako biste proverili dostupnost, posebno jer u određenim terminima mogu biti organizovane privatne proslave." },
  { q: "Za koji uzrast je igraonica namenjena?", a: "Sunny Playland nudi sadržaje za različite uzraste — od aktivne igre, ljuljaški i bazena sa lopticama za mlađe, do PlayStation zone i arkadnih igara za stariju decu." },
  { q: "Da li postoji prostor za roditelje?", a: "Da! Sunny Playland ima poseban cafe deo za odrasle sa udobnim sedištem, toplim i hladnim napicima i direktnim pogledom na prostor za igru." },
  { q: "Koje PlayStation igre su dostupne?", a: "U ponudi su PS5 igre poput FC 26, GTA V, Minecraft, Fortnite i druge popularne naslove. Za ažuriranu listu pozovite nas." },
  { q: "Gde se Sunny Playland nalazi?", a: "Sunny Playland se nalazi na adresi Slanački put 76d, u okviru Sunnyville kompleksa, Višnjička banja, Beograd." },
  { q: "Kako mogu da proverim slobodan termin?", a: "Za najpreciznije informacije o slobodnim terminima kontaktirajte Sunny Playland telefonom na +381 69 222 33 90." },
];

export default function KontaktPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "linear-gradient(160deg, #18213D 0%, #2D1B69 100%)", position: "relative", overflow: "hidden", paddingBottom: 0 }}>
          <div aria-hidden="true" style={{ position: "absolute", top: 30, left: 20, opacity: 0.1, pointerEvents: "none" }}>
            <CloudSvg className="animate-float-slow" style={{ filter: "brightness(2)", width: 200 }} />
          </div>
          <div aria-hidden="true" style={{ position: "absolute", top: 40, right: 80, opacity: 0.15, pointerEvents: "none" }}>
            <StarSvg className="animate-float" style={{ width: 70, height: 70, filter: "brightness(2)" }} />
          </div>

          <div style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px 0", textAlign: "center", position: "relative", zIndex: 1 }}>
            <div className="section-tag" style={{ background: "rgba(255,145,178,0.15)", color: "#FF91B2" }}>📍 Kontakt</div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)", fontFamily: "'Fredoka', sans-serif", fontWeight: 700, color: "white", marginBottom: 16, lineHeight: 1.1 }}>
              Posetite nas i{" "}
              <span style={{ background: "linear-gradient(90deg, #FF91B2, #67B7FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                pokrenite avanturu
              </span>
            </h1>
            <p style={{ color: "#A8B4D0", fontSize: "clamp(1rem, 2vw, 1.1rem)", maxWidth: 500, margin: "0 auto 48px", lineHeight: 1.75 }}>
              Sunny Playland čeka vas u Sunnyville kompleksu, Višnjička banja, Beograd.
            </p>
          </div>

          <div style={{ lineHeight: 0, marginTop: 40 }}>
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }} aria-hidden="true" preserveAspectRatio="none">
              <path d="M0 0C360 60 1080 60 1440 0V60H0Z" fill="#EAF8FF" />
            </svg>
          </div>
        </section>

        {/* Info + formular */}
        <section style={{ background: "#EAF8FF", padding: "60px 24px 80px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }} className="contact-layout">

            {/* Leva strana */}
            <div>
              <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: "1.6rem", color: "#18213D", marginBottom: 24 }}>Informacije</h2>

              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
                {[
                  { icon: "📍", title: "Adresa", content: "Slanački put 76d\nSunnyville, Višnjička banja\nBeograd", link: null },
                  { icon: "📞", title: "Telefon", content: "+381 69 222 33 90", link: "tel:+381692223390" },
                  { icon: "📸", title: "Instagram", content: "@sunny_playland", link: "https://instagram.com/sunny_playland", external: true },
                  { icon: "🕐", title: "Radno vreme", content: "Za informacije o radnom vremenu pozovite nas", link: null, muted: true },
                ].map((item) => (
                  <div key={item.title} style={{ background: "white", borderRadius: 18, padding: "18px 20px", display: "flex", gap: 16, alignItems: "flex-start", border: "1.5px solid #D8EEFF", boxShadow: "0 3px 12px rgba(51,139,255,0.06)" }}>
                    <span style={{ fontSize: "1.4rem", flexShrink: 0 }} aria-hidden="true">{item.icon}</span>
                    <div>
                      <div style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, color: "#338BFF", fontSize: "0.82rem", marginBottom: 3 }}>{item.title}</div>
                      {item.link ? (
                        <a href={item.link} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} style={{ color: "#18213D", fontFamily: "'Nunito', sans-serif", fontSize: "0.95rem", textDecoration: "none", lineHeight: 1.5 }}>
                          {item.content}
                        </a>
                      ) : (
                        <p style={{ color: item.muted ? "#8899AA" : "#18213D", margin: 0, fontFamily: "'Nunito', sans-serif", fontSize: "0.95rem", lineHeight: 1.5, whiteSpace: "pre-line", fontStyle: item.muted ? "italic" : "normal" }}>
                          {item.content}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mapa placeholder */}
              <div style={{ width: "100%", aspectRatio: "16/9", borderRadius: 20, background: "white", border: "1.5px solid #D8EEFF", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, overflow: "hidden" }} aria-label="Mapa lokacije">
                <span style={{ fontSize: "2.5rem" }} aria-hidden="true">🗺️</span>
                <p style={{ color: "#8899AA", fontFamily: "'Fredoka', sans-serif", fontSize: "0.95rem", textAlign: "center", padding: "0 20px" }}>
                  Google Maps embed ovde<br />
                  <span style={{ fontSize: "0.8rem" }}>Slanački put 76d, Višnjička banja</span>
                </p>
                <a href="https://maps.google.com/?q=Slana%C4%8Dki+put+76d+Beograd" target="_blank" rel="noopener noreferrer" className="btn-blue" style={{ fontSize: "0.88rem", padding: "10px 20px" }}>
                  🗺️ Prikaži na mapi
                </a>
              </div>
            </div>

            {/* Desna strana — formular */}
            <div>
              <div style={{ background: "white", borderRadius: 28, padding: "36px 32px", boxShadow: "0 12px 40px rgba(51,139,255,0.1)", border: "1.5px solid #D8EEFF" }}>
                <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#18213D", marginBottom: 8 }}>Pošaljite upit</h2>
                <p style={{ color: "#6B7A99", fontSize: "0.9rem", marginBottom: 24 }}>Za informacije o dnevnoj igri, rođendanima ili bilo čemu drugom.</p>

                {submitted ? (
                  <div style={{ textAlign: "center", padding: "32px 0" }}>
                    <div style={{ fontSize: "3rem", marginBottom: 12 }}>✅</div>
                    <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "#18213D", marginBottom: 8 }}>Poruka primljena!</h3>
                    <p style={{ color: "#6B7A99", fontSize: "0.95rem", lineHeight: 1.7 }}>Kontaktiraćemo vas uskoro.</p>
                  </div>
                ) : (
                  <form style={{ display: "flex", flexDirection: "column", gap: 16 }} onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="form-2col">
                      {[
                        { id: "k-ime", label: "Ime i prezime *", type: "text", placeholder: "Npr. Ana Petrović", required: true },
                        { id: "k-tel", label: "Telefon *", type: "tel", placeholder: "06x xxx xxxx", required: true },
                      ].map((f) => (
                        <div key={f.id}>
                          <label htmlFor={f.id} style={{ display: "block", fontFamily: "'Fredoka', sans-serif", fontWeight: 600, color: "#18213D", fontSize: "0.9rem", marginBottom: 6 }}>{f.label}</label>
                          <input id={f.id} type={f.type} required={f.required} placeholder={f.placeholder} style={{ width: "100%", padding: "11px 14px", borderRadius: 12, border: "2px solid #E8EEF4", fontFamily: "'Nunito', sans-serif", fontSize: "0.92rem", color: "#18213D", outline: "none" }} />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label htmlFor="k-tema" style={{ display: "block", fontFamily: "'Fredoka', sans-serif", fontWeight: 600, color: "#18213D", fontSize: "0.9rem", marginBottom: 6 }}>Tema upita</label>
                      <select id="k-tema" style={{ width: "100%", padding: "11px 14px", borderRadius: 12, border: "2px solid #E8EEF4", fontFamily: "'Nunito', sans-serif", fontSize: "0.92rem", color: "#18213D", outline: "none", background: "white" }}>
                        <option value="">Izaberite temu</option>
                        <option value="rodjendan">Dečiji rođendan</option>
                        <option value="dnevna">Dnevna igra</option>
                        <option value="info">Opšte informacije</option>
                        <option value="ostalo">Ostalo</option>
                      </select>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="form-2col">
                      <div>
                        <label htmlFor="k-datum" style={{ display: "block", fontFamily: "'Fredoka', sans-serif", fontWeight: 600, color: "#18213D", fontSize: "0.9rem", marginBottom: 6 }}>Željeni datum</label>
                        <input id="k-datum" type="date" style={{ width: "100%", padding: "11px 14px", borderRadius: 12, border: "2px solid #E8EEF4", fontFamily: "'Nunito', sans-serif", fontSize: "0.92rem", color: "#18213D", outline: "none", background: "white" }} />
                      </div>
                      <div>
                        <label htmlFor="k-deca" style={{ display: "block", fontFamily: "'Fredoka', sans-serif", fontWeight: 600, color: "#18213D", fontSize: "0.9rem", marginBottom: 6 }}>Broj dece</label>
                        <input id="k-deca" type="number" min="1" placeholder="Npr. 10" style={{ width: "100%", padding: "11px 14px", borderRadius: 12, border: "2px solid #E8EEF4", fontFamily: "'Nunito', sans-serif", fontSize: "0.92rem", color: "#18213D", outline: "none" }} />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="k-poruka" style={{ display: "block", fontFamily: "'Fredoka', sans-serif", fontWeight: 600, color: "#18213D", fontSize: "0.9rem", marginBottom: 6 }}>Poruka</label>
                      <textarea id="k-poruka" rows={4} placeholder="Napišite nam šta vas zanima..." style={{ width: "100%", padding: "11px 14px", borderRadius: 12, border: "2px solid #E8EEF4", fontFamily: "'Nunito', sans-serif", fontSize: "0.92rem", color: "#18213D", outline: "none", resize: "vertical" }} />
                    </div>

                    <button type="submit" className="btn-primary" style={{ justifyContent: "center", fontSize: "1rem", padding: "14px 32px" }}>
                      📨 Pošaljite upit
                    </button>
                    <p style={{ color: "#8899AA", fontSize: "0.82rem", textAlign: "center", margin: 0, lineHeight: 1.5 }}>
                      Naš tim će vas kontaktirati radi dogovora svih detalja.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: "white", padding: "72px 24px 80px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="section-tag" style={{ background: "#EAF8FF", color: "#338BFF" }}>❓ Česta pitanja</div>
              <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", color: "#18213D" }}>
                FAQ
              </h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ borderRadius: 18, border: "2px solid #E8EEF4", overflow: "hidden", background: openFaq === i ? "#F8FCFF" : "white", transition: "background 0.2s" }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    style={{ width: "100%", textAlign: "left", padding: "18px 22px", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}
                  >
                    <span style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "1rem", color: "#18213D", lineHeight: 1.4 }}>{faq.q}</span>
                    <span style={{ flexShrink: 0, fontSize: "1.1rem", color: "#338BFF", transition: "transform 0.2s", transform: openFaq === i ? "rotate(45deg)" : "none" }} aria-hidden="true">+</span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: "0 22px 18px" }}>
                      <p style={{ color: "#6B7A99", fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
      <style>{`
        @media (max-width: 900px) {
          .contact-layout { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .form-2col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
