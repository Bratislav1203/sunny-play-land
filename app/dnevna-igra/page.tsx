import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { SunSvg, CloudSvg, StarSvg, RainbowSvg } from "@/components/svg/Decorations";

export const metadata: Metadata = {
  title: "Dnevna igra | Sunny Playland",
  description: "Dođite na dnevnu igru u Sunny Playland — tobogani, trampoline, lavirint, PlayStation zona i cafe za roditelje. Proverite dostupnost.",
};

const available = [
  { icon: "🛝", label: "3 tobogana" },
  { icon: "⬆️", label: "3 trampoline" },
  { icon: "🌀", label: "Tunel" },
  { icon: "🗺️", label: "Lavirint" },
  { icon: "🧗", label: "Penjalice" },
  { icon: "🎢", label: "2 ljuljaške" },
  { icon: "💡", label: "Interaktivni zid" },
  { icon: "🏀", label: "Bazen sa lopticama" },
  { icon: "🎨", label: "Crtanje i bojenje" },
  { icon: "🕹️", label: "Arkadne igre" },
  { icon: "🎮", label: "PlayStation zona" },
  { icon: "☕", label: "Cafe za roditelje" },
];

const info = [
  { icon: "📅", title: "Dostupnost", desc: "Dnevna igra je dostupna u terminima kada nema organizovanih proslava. Preporučujemo da proverite pre dolaska.", accent: "#338BFF", bg: "#EAF8FF" },
  { icon: "📞", title: "Pre dolaska", desc: "Pozovite nas da proverite slobodne termine i aktuelno radno vreme. Izbegnite dolazak za vreme privatnih proslava.", accent: "#FF5F87", bg: "#FFF0F5" },
  { icon: "👪", title: "Za celu porodicu", desc: "Roditelji su uvek dobrodošli u cafe delu sa direktnim pogledom na prostor za igru.", accent: "#8059E8", bg: "#F5F0FF" },
];

export default function DnevnaIgraPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "linear-gradient(160deg, #EAF8FF 0%, #EEFDF4 100%)", position: "relative", overflow: "hidden", paddingBottom: 0 }}>
          <div aria-hidden="true" style={{ position: "absolute", top: 20, left: -20, opacity: 0.4, pointerEvents: "none" }}>
            <CloudSvg className="animate-float-slow" />
          </div>
          <div aria-hidden="true" style={{ position: "absolute", top: 30, right: 80, opacity: 0.6, pointerEvents: "none" }}>
            <SunSvg className="animate-rotate-slow" style={{ width: 90, height: 90 }} />
          </div>
          <div aria-hidden="true" style={{ position: "absolute", bottom: 80, left: "40%", opacity: 0.3, pointerEvents: "none" }}>
            <RainbowSvg style={{ width: 180 }} />
          </div>

          <div style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px 0", textAlign: "center", position: "relative", zIndex: 1 }}>
            <div className="section-tag" style={{ background: "white", color: "#45B95B" }}>🏃 Dnevna igra</div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)", fontFamily: "'Fredoka', sans-serif", fontWeight: 700, color: "#18213D", marginBottom: 16, lineHeight: 1.1 }}>
              Dnevna igra za{" "}
              <span style={{ background: "linear-gradient(90deg, #45B95B, #11B5C8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                male istraživače
              </span>
            </h1>
            <p style={{ color: "#6B7A99", fontSize: "clamp(1rem, 2vw, 1.15rem)", maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.75 }}>
              Dođite na igru, istraživanje i druženje u prostoru punom različitih sadržaja — tobogani, trampoline, lavirint, PlayStation i mnogo više.
            </p>

            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 20 }}>
              <a href="tel:+381692223390" className="btn-primary" style={{ fontSize: "1rem" }}>
                📞 Proverite dostupnost
              </a>
              <a href="/kontakt" className="btn-outline" style={{ fontSize: "1rem" }}>
                📋 Pošaljite upit
              </a>
            </div>

            <div style={{ background: "rgba(255,255,255,0.7)", borderRadius: 16, padding: "14px 24px", display: "inline-block", border: "1.5px solid rgba(69,185,91,0.25)", backdropFilter: "blur(8px)" }}>
              <p style={{ color: "#6B7A99", fontSize: "0.88rem", margin: 0, fontStyle: "italic" }}>
                ⚠️ Radno vreme i dostupnost mogu se razlikovati zbog privatnih proslava — preporučujemo da proverite telefonom pre dolaska.
              </p>
            </div>
          </div>

          <div className="wave-divider" style={{ lineHeight: 0, marginTop: 60 }}>
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }} aria-hidden="true" preserveAspectRatio="none">
              <path d="M0 0C360 60 1080 60 1440 0V60H0Z" fill="white" />
            </svg>
          </div>
        </section>

        {/* Info kartice */}
        <section style={{ background: "white", padding: "72px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 64 }} className="info-grid">
              {info.map((item) => (
                <div key={item.title} className="card-hover" style={{ background: item.bg, borderRadius: 24, padding: "32px 28px", border: `2px solid ${item.accent}20` }}>
                  <div style={{ width: 56, height: 56, borderRadius: 16, background: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem", marginBottom: 16, boxShadow: `0 4px 14px ${item.accent}20` }} aria-hidden="true">
                    {item.icon}
                  </div>
                  <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "#18213D", marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: "#6B7A99", fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Dostupni sadržaji */}
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <div className="section-tag" style={{ background: "#EAF8FF", color: "#338BFF" }}>🎪 Dostupni sadržaji</div>
              <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", color: "#18213D", marginBottom: 12 }}>
                Šta vas čeka na{" "}
                <span style={{ color: "#338BFF" }}>dnevnoj igri</span>
              </h2>
              <p style={{ color: "#6B7A99", fontSize: "0.95rem", maxWidth: 480, margin: "0 auto" }}>
                Dostupnost pojedinih sadržaja može zavisiti od termina — pozovite za više informacija.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 14 }}>
              {available.map((item) => (
                <div key={item.label} className="card-hover" style={{ background: "#F8FCFF", borderRadius: 18, padding: "20px 16px", border: "2px solid #E0F0FF", display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: "1.6rem", flexShrink: 0 }} aria-hidden="true">{item.icon}</span>
                  <span style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, color: "#18213D", fontSize: "0.95rem" }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "linear-gradient(135deg, #45B95B, #11B5C8)", padding: "64px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div aria-hidden="true" style={{ position: "absolute", top: 20, right: 60, opacity: 0.15, pointerEvents: "none" }}>
            <StarSvg className="animate-float" style={{ width: 80, height: 80, filter: "brightness(2)" }} />
          </div>
          <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: "clamp(1.6rem, 4vw, 2.6rem)", color: "white", marginBottom: 14 }}>
            Dođite da se igramo!
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", marginBottom: 32, maxWidth: 460, margin: "0 auto 32px" }}>
            Za informacije o dnevnoj igri pozovite nas ili pošaljite upit.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+381692223390" style={{ background: "white", color: "#45B95B", fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: "1rem", padding: "14px 30px", borderRadius: 50, textDecoration: "none", boxShadow: "0 6px 20px rgba(0,0,0,0.12)" }}>
              📞 Pozovite nas
            </a>
            <a href="/kontakt" style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "2px solid white", fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: "1rem", padding: "14px 30px", borderRadius: 50, textDecoration: "none" }}>
              📋 Pošaljite upit
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
      <style>{`
        @media (max-width: 900px) { .info-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 601px) and (max-width: 900px) { .info-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </>
  );
}
