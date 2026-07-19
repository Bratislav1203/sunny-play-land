import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { SunSvg, StarSvg, CloudSvg, ConfettiSvg } from "@/components/svg/Decorations";

export const metadata: Metadata = {
  title: "Aktivnosti | Sunny Playland",
  description: "Tobogani, trampoline, lavirint, penjalice, PlayStation zona, arkadne igre i cafe za roditelje — sve aktivnosti u Sunny Playlandу.",
};

const categories = [
  {
    id: "aktivna",
    label: "🏃 Aktivna igra",
    color: "#EAF8FF",
    accent: "#338BFF",
    items: [
      { icon: "🛝", title: "3 tobogana", desc: "Tri raznobojna tobogana za brzu i uzbudljivu igru. Različite dužine i uglovi — za sve uzraste." },
      { icon: "⬆️", title: "3 trampoline", desc: "Tri trampoline za skakanje, zabavu i trošenje energije. Idealno za decu koja vole da se kreću." },
      { icon: "🧗", title: "Penjalice", desc: "Raznovrsne penjalice koje razvijaju snagu, koordinaciju i hrabrost kod dece." },
      { icon: "🌀", title: "Tunel", desc: "Uzbudljivi tunel za puzanje i istraživanje skrivenih prolaza — mali istraživači obožavaju." },
      { icon: "🎢", title: "2 ljuljaške", desc: "Dve ljuljaške za slobodan let, opuštanje i vreme za maštanje." },
      { icon: "🗺️", title: "Lavirint", desc: "Lavirint koji izaziva orijentaciju i logiku — pronađi izlaz i pobedi!" },
      { icon: "🏔️", title: "Zona za penjanje", desc: "Posebna zona sa preprekama i površinama za penjanje, za decu koja vole izazove." },
    ],
  },
  {
    id: "interaktivna",
    label: "💡 Interaktivna zabava",
    color: "#FFF0F5",
    accent: "#FF5F87",
    items: [
      { icon: "💡", title: "Interaktivni zid", desc: "Digitalni zid koji reaguje na pokret i dodir — spaja fizičku igru sa digitalnim sadržajima." },
      { icon: "🎨", title: "Crtanje i bojenje", desc: "Mirna zona za kreativne mališane koji vole da crtaju, boje i stvaraju." },
      { icon: "🏀", title: "Bazen sa lopticama", desc: "Klasični bazen sa lopticama — nezaobilazni deo svake igraonice." },
    ],
  },
  {
    id: "gaming",
    label: "🎮 Gaming zona",
    color: "#F5F0FF",
    accent: "#8059E8",
    items: [
      { icon: "🎮", title: "PlayStation zona", desc: "Sony PS5 konzole u posebno osmišljenoj gaming zoni sa udobnim sedištem." },
      { icon: "⚽", title: "FC 26", desc: "Najnoviji fudbalski simulator — turniri između prijatelja garantovani." },
      { icon: "🚗", title: "GTA V", desc: "Avanture u otvorenom svetu za starije igrače." },
      { icon: "⛏️", title: "Minecraft", desc: "Gradnja, istraživanje i preživljavanje — omiljeni izbor mlađih igrača." },
      { icon: "🎯", title: "Fortnite", desc: "Battle royale akcija za takmičarski duh." },
      { icon: "🕹️", title: "Arkadne igre", desc: "Klasični arkadni aparati za nostalgičnu zabavu — i stari i mladi uživaju." },
    ],
  },
  {
    id: "roditelji",
    label: "☕ Za roditelje",
    color: "#FFF8E8",
    accent: "#E8A040",
    items: [
      { icon: "☕", title: "Cafe prostor", desc: "Udoban cafe deo sa pregledom na prostor za igru — roditelji nikad ne gube decu iz vida." },
      { icon: "🧃", title: "Topli i hladni napici", desc: "Bogata ponuda napitaka — kafa, čaj, sokovi i drugo." },
      { icon: "🛋️", title: "Udobno sedenje", desc: "Prijatno namešteni prostor za odmor i opuštanje tokom igre dece." },
    ],
  },
];

export default function AktivnostiPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          style={{
            background: "linear-gradient(160deg, #EAF8FF 0%, #FFF0F5 100%)",
            position: "relative",
            overflow: "hidden",
            paddingBottom: 0,
          }}
        >
          <div aria-hidden="true" style={{ position: "absolute", top: 20, left: -20, opacity: 0.4, pointerEvents: "none" }}>
            <CloudSvg className="animate-float-slow" />
          </div>
          <div aria-hidden="true" style={{ position: "absolute", top: 30, right: 60, opacity: 0.5, pointerEvents: "none" }}>
            <SunSvg className="animate-rotate-slow" style={{ width: 80, height: 80 }} />
          </div>
          <div aria-hidden="true" style={{ position: "absolute", bottom: 60, right: 120, opacity: 0.4, pointerEvents: "none" }}>
            <StarSvg className="animate-float" style={{ width: 60, height: 60 }} />
          </div>

          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px 0", textAlign: "center", position: "relative", zIndex: 1 }}>
            <div className="section-tag" style={{ background: "white", color: "#338BFF" }}>🎪 Aktivnosti</div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", fontFamily: "'Fredoka', sans-serif", fontWeight: 700, color: "#18213D", marginBottom: 16, lineHeight: 1.1 }}>
              Aktivnosti za{" "}
              <span style={{ background: "linear-gradient(90deg, #338BFF, #8059E8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                svaki uzrast
              </span>
            </h1>
            <p style={{ color: "#6B7A99", fontSize: "clamp(1rem, 2vw, 1.2rem)", maxWidth: 600, margin: "0 auto 48px", lineHeight: 1.7 }}>
              Od aktivne igre i penjanja do PlayStation i arkadnih izazova — svako dete može pronaći svoju omiljenu avanturu.
            </p>
          </div>

          <div className="wave-divider" style={{ lineHeight: 0 }}>
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }} aria-hidden="true" preserveAspectRatio="none">
              <path d="M0 0C360 60 1080 60 1440 0V60H0Z" fill="white" />
            </svg>
          </div>
        </section>

        {/* Kategorije */}
        <section style={{ background: "white", paddingBottom: 80 }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px 0" }}>
            {categories.map((cat, ci) => (
              <div key={cat.id} style={{ marginBottom: 72 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
                  <div style={{ height: 4, flex: 1, background: `linear-gradient(90deg, ${cat.accent}, transparent)`, borderRadius: 2 }} />
                  <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: "clamp(1.4rem, 3vw, 1.9rem)", color: "#18213D", whiteSpace: "nowrap" }}>
                    {cat.label}
                  </h2>
                  <div style={{ height: 4, flex: 1, background: `linear-gradient(90deg, transparent, ${cat.accent})`, borderRadius: 2 }} />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 18 }}>
                  {cat.items.map((item) => (
                    <div
                      key={item.title}
                      className="card-hover"
                      style={{
                        background: cat.color,
                        borderRadius: 22,
                        padding: "26px 22px",
                        border: `2px solid ${cat.accent}20`,
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <div aria-hidden="true" style={{ position: "absolute", top: -16, right: -16, width: 60, height: 60, borderRadius: "50%", background: cat.accent, opacity: 0.07 }} />
                      <div style={{ width: 52, height: 52, borderRadius: 14, background: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", marginBottom: 14, boxShadow: `0 4px 12px ${cat.accent}20` }} aria-hidden="true">
                        {item.icon}
                      </div>
                      <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "1.15rem", color: "#18213D", marginBottom: 8 }}>
                        {item.title}
                      </h3>
                      <p style={{ color: "#6B7A99", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA baner */}
        <section style={{ background: "linear-gradient(135deg, #FF5F87, #8059E8)", padding: "64px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div aria-hidden="true" style={{ position: "absolute", top: 20, left: 40, opacity: 0.15, pointerEvents: "none" }}>
            <ConfettiSvg />
          </div>
          <div aria-hidden="true" style={{ position: "absolute", bottom: 20, right: 40, opacity: 0.15, pointerEvents: "none" }}>
            <ConfettiSvg />
          </div>
          <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: "clamp(1.6rem, 4vw, 2.6rem)", color: "white", marginBottom: 14 }}>
            Dođite da se igramo!
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
            Proverite dostupnost ili rezervišite termin za dečiji rođendan.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/rodjendani" style={{ background: "white", color: "#FF5F87", fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: "1rem", padding: "14px 30px", borderRadius: 50, textDecoration: "none", boxShadow: "0 6px 20px rgba(0,0,0,0.15)", transition: "transform 0.2s" }}>
              🎂 Rezervišite rođendan
            </a>
            <a href="tel:+381692223390" style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "2px solid white", fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: "1rem", padding: "14px 30px", borderRadius: 50, textDecoration: "none" }}>
              📞 Pozovite nas
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
