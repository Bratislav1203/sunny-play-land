"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { StarSvg, ConfettiSvg } from "@/components/svg/Decorations";
import { useState } from "react";

const filters = ["Sve", "Igraonica", "Gaming", "Arkada", "Cafe", "Rođendani"];

const items = [
  { icon: "🛝", label: "Tobogani", cat: "Igraonica", tall: true, bg: "#EAF8FF" },
  { icon: "⬆️", label: "Trampoline", cat: "Igraonica", tall: false, bg: "#FFF0F5" },
  { icon: "🌀", label: "Tunel", cat: "Igraonica", tall: true, bg: "#EEFDF4" },
  { icon: "💡", label: "Interaktivni zid", cat: "Igraonica", tall: false, bg: "#FFF8E8" },
  { icon: "🧗", label: "Penjalice", cat: "Igraonica", tall: false, bg: "#EAF8FF" },
  { icon: "🗺️", label: "Lavirint", cat: "Igraonica", tall: true, bg: "#F5F0FF" },
  { icon: "🎢", label: "Ljuljaške", cat: "Igraonica", tall: false, bg: "#FFF0F5" },
  { icon: "🏀", label: "Bazen sa lopticama", cat: "Igraonica", tall: false, bg: "#EEFDF4" },
  { icon: "🎮", label: "PlayStation zona", cat: "Gaming", tall: true, bg: "#F5F0FF" },
  { icon: "⚽", label: "FC 26", cat: "Gaming", tall: false, bg: "#EAF8FF" },
  { icon: "⛏️", label: "Minecraft", cat: "Gaming", tall: false, bg: "#FFF8E8" },
  { icon: "🕹️", label: "Arkadni aparati 1", cat: "Arkada", tall: true, bg: "#FFF0F5" },
  { icon: "🕹️", label: "Arkadni aparati 2", cat: "Arkada", tall: false, bg: "#EAF8FF" },
  { icon: "☕", label: "Cafe prostor", cat: "Cafe", tall: true, bg: "#FFF8E8" },
  { icon: "🧃", label: "Napici", cat: "Cafe", tall: false, bg: "#FFF0F5" },
  { icon: "🎂", label: "Proslava 1", cat: "Rođendani", tall: false, bg: "#FFF0F5" },
  { icon: "🎉", label: "Proslava 2", cat: "Rođendani", tall: true, bg: "#F5F0FF" },
  { icon: "🎈", label: "Proslava 3", cat: "Rođendani", tall: false, bg: "#FFF8E8" },
];

export default function GalerijaPage() {
  const [active, setActive] = useState("Sve");
  const [lightbox, setLightbox] = useState<null | typeof items[0]>(null);

  const filtered = active === "Sve" ? items : items.filter((i) => i.cat === active);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "linear-gradient(160deg, #EAF8FF 0%, #FFF0F5 100%)", position: "relative", overflow: "hidden", paddingBottom: 0 }}>
          <div aria-hidden="true" style={{ position: "absolute", top: 30, right: 60, opacity: 0.4, pointerEvents: "none" }}>
            <StarSvg className="animate-float" style={{ width: 70, height: 70 }} />
          </div>
          <div aria-hidden="true" style={{ position: "absolute", bottom: 60, left: 40, opacity: 0.3, pointerEvents: "none" }}>
            <ConfettiSvg className="animate-confetti" />
          </div>

          <div style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px 0", textAlign: "center", position: "relative", zIndex: 1 }}>
            <div className="section-tag" style={{ background: "white", color: "#338BFF" }}>📸 Galerija</div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)", fontFamily: "'Fredoka', sans-serif", fontWeight: 700, color: "#18213D", marginBottom: 16, lineHeight: 1.1 }}>
              Pogledajte naš{" "}
              <span style={{ color: "#338BFF" }}>prostor</span>
            </h1>
            <p style={{ color: "#6B7A99", fontSize: "clamp(1rem, 2vw, 1.1rem)", maxWidth: 500, margin: "0 auto 48px", lineHeight: 1.7 }}>
              Tobogani, trampoline, gaming zona, cafe — sve što vas čeka u Sunny Playlandу.
            </p>
          </div>

          <div className="wave-divider" style={{ lineHeight: 0, marginTop: 20 }}>
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }} aria-hidden="true" preserveAspectRatio="none">
              <path d="M0 0C480 60 960 60 1440 0V60H0Z" fill="white" />
            </svg>
          </div>
        </section>

        {/* Galerija */}
        <section style={{ background: "white", padding: "48px 24px 80px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            {/* Filteri */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 40 }} role="group" aria-label="Filtrirajte galeriju">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  aria-pressed={active === f}
                  style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "0.92rem", padding: "9px 20px", borderRadius: 50, border: active === f ? "2px solid #338BFF" : "2px solid #D0E8F8", background: active === f ? "#338BFF" : "white", color: active === f ? "white" : "#6B7A99", cursor: "pointer", transition: "all 0.2s" }}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Masonry grid */}
            <div style={{ columns: "3 260px", columnGap: 16 }} className="gallery-col">
              {filtered.map((item, i) => (
                <div
                  key={i}
                  className="card-hover"
                  onClick={() => setLightbox(item)}
                  style={{ breakInside: "avoid", marginBottom: 16, borderRadius: 20, overflow: "hidden", cursor: "pointer", background: item.bg, border: "2px solid rgba(0,0,0,0.04)" }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Otvori sliku: ${item.label}`}
                  onKeyDown={(e) => e.key === "Enter" && setLightbox(item)}
                >
                  <div style={{ aspectRatio: item.tall ? "3/4" : "4/3", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10 }}>
                    <span style={{ fontSize: "3rem" }} aria-hidden="true">{item.icon}</span>
                    <span style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, color: "#8899AA", fontSize: "0.88rem" }}>{item.label}</span>
                  </div>
                  <div style={{ padding: "10px 14px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(255,255,255,0.6)" }}>
                    <span style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, color: "#18213D", fontSize: "0.88rem" }}>{item.label}</span>
                    <span style={{ background: "#EAF8FF", color: "#338BFF", fontSize: "0.72rem", fontFamily: "'Fredoka', sans-serif", padding: "3px 10px", borderRadius: 50 }}>{item.cat}</span>
                  </div>
                </div>
              ))}
            </div>

            <p style={{ textAlign: "center", marginTop: 16, color: "#8899AA", fontSize: "0.85rem", fontStyle: "italic" }}>
              * Dodajte prave fotografije prostora
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#EAF8FF", padding: "64px 24px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", color: "#18213D", marginBottom: 12 }}>
            Sviđa vam se šta vidite?
          </h2>
          <p style={{ color: "#6B7A99", fontSize: "1rem", marginBottom: 28, maxWidth: 420, margin: "0 auto 28px" }}>
            Dođite da to iskusite uživo — ili rezervišite dečiji rođendan.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/rodjendani" className="btn-primary">🎂 Rezervišite rođendan</a>
            <a href="tel:+381692223390" className="btn-blue">📞 Pozovite nas</a>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}
          role="dialog"
          aria-modal="true"
          aria-label={`Uvećana slika: ${lightbox.label}`}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{ position: "absolute", top: 20, right: 24, background: "rgba(255,255,255,0.15)", border: "none", color: "white", fontSize: "1.5rem", width: 44, height: 44, borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
            aria-label="Zatvori"
          >
            ✕
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ background: lightbox.bg, borderRadius: 28, maxWidth: 560, width: "100%", padding: 48, display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}
          >
            <span style={{ fontSize: "5rem" }} aria-hidden="true">{lightbox.icon}</span>
            <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: "1.4rem", color: "#18213D" }}>{lightbox.label}</h3>
            <span style={{ background: "#EAF8FF", color: "#338BFF", fontSize: "0.82rem", fontFamily: "'Fredoka', sans-serif", padding: "5px 14px", borderRadius: 50 }}>{lightbox.cat}</span>
            <p style={{ color: "#8899AA", fontSize: "0.85rem", fontStyle: "italic", textAlign: "center" }}>Ovde će biti prava fotografija</p>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 600px) { .gallery-col { columns: 2 140px !important; } }
      `}</style>
    </>
  );
}
