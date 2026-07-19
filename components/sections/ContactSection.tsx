"use client";
import { CloudSvg, StarSvg } from "../svg/Decorations";

export default function ContactSection() {
  return (
    <section
      id="kontakt"
      aria-labelledby="contact-heading"
      style={{
        background: "linear-gradient(160deg, #18213D 0%, #2D1B69 60%, #18213D 100%)",
        paddingTop: 0,
        paddingBottom: 0,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dekoracije */}
      <div aria-hidden="true" style={{ position: "absolute", top: 40, left: 20, opacity: 0.1, pointerEvents: "none" }}>
        <CloudSvg className="animate-float-slow" style={{ width: 200, filter: "brightness(2)" }} />
      </div>
      <div aria-hidden="true" style={{ position: "absolute", bottom: 60, right: 40, opacity: 0.15, pointerEvents: "none" }}>
        <StarSvg className="animate-float" style={{ width: 70, height: 70, filter: "brightness(2)" }} />
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px 80px", position: "relative", zIndex: 1 }}>
        {/* Naslov */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="section-tag" style={{ background: "rgba(255,145,178,0.15)", color: "#FF91B2" }}>
            📍 Posetite nas
          </div>
          <h2
            id="contact-heading"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontFamily: "'Fredoka', sans-serif",
              fontWeight: 700,
              color: "white",
              marginBottom: 14,
            }}
          >
            Dođite i{" "}
            <span style={{ background: "linear-gradient(90deg, #FF91B2, #67B7FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              pokrenite avanturu
            </span>
          </h2>
          <p style={{ color: "#A8B4D0", fontSize: "1.05rem", maxWidth: 480, margin: "0 auto" }}>
            Sunny Playland čeka vas u Sunnyville kompleksu, Višnjička banja, Beograd.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Leva strana — info */}
          <div>
            {/* Info kartice */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
              {[
                {
                  icon: "📍",
                  title: "Adresa",
                  content: "Slanački put 76d\nSunnyville, Višnjička banja\nBeograd",
                },
                {
                  icon: "📞",
                  title: "Telefon",
                  content: "+381 69 222 33 90",
                  link: "tel:+381692223390",
                },
                {
                  icon: "📸",
                  title: "Instagram",
                  content: "@sunny_playland",
                  link: "https://instagram.com/sunny_playland",
                  external: true,
                },
                {
                  icon: "🕐",
                  title: "Radno vreme",
                  content: "Za informacije o radnom vremenu pozovite nas",
                  muted: true,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 18,
                    padding: "18px 20px",
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ fontSize: "1.4rem", flexShrink: 0 }} aria-hidden="true">{item.icon}</span>
                  <div>
                    <div style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, color: "#FF91B2", fontSize: "0.85rem", marginBottom: 4 }}>
                      {item.title}
                    </div>
                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        style={{ color: "#67B7FF", textDecoration: "none", fontFamily: "'Nunito', sans-serif", fontSize: "0.95rem", lineHeight: 1.5 }}
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p style={{ color: item.muted ? "#6B7A99" : "#D0DCF0", margin: 0, fontFamily: "'Nunito', sans-serif", fontSize: "0.95rem", lineHeight: 1.5, whiteSpace: "pre-line", fontStyle: item.muted ? "italic" : "normal" }}>
                        {item.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Mapa placeholder */}
            <div
              style={{
                width: "100%",
                aspectRatio: "16/9",
                borderRadius: 20,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                overflow: "hidden",
              }}
              aria-label="Mapa lokacije Sunny Playland"
            >
              <span style={{ fontSize: "2.5rem" }} aria-hidden="true">🗺️</span>
              <p style={{ color: "#6B7A99", fontFamily: "'Fredoka', sans-serif", fontSize: "0.95rem" }}>
                Google Maps embed ovde
              </p>
              <a
                href="https://maps.google.com/?q=Slanački+put+76d+Beograd"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-blue"
                style={{ fontSize: "0.9rem", padding: "10px 22px" }}
                aria-label="Prikaži lokaciju na Google mapama — otvara se u novom tabu"
              >
                🗺️ Prikaži na mapi
              </a>
            </div>
          </div>

          {/* Desna strana — formular */}
          <div>
            <div
              style={{
                background: "white",
                borderRadius: 28,
                padding: "36px 32px",
                boxShadow: "0 24px 60px rgba(0,0,0,0.2)",
              }}
            >
              <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: "1.4rem", color: "#18213D", marginBottom: 8 }}>
                Pošaljite upit
              </h3>
              <p style={{ color: "#6B7A99", fontSize: "0.9rem", marginBottom: 24 }}>
                Za informacije o dnevnoj igri, rođendanima ili bilo čemu drugom.
              </p>

              <form
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
                onSubmit={(e) => e.preventDefault()}
                aria-label="Formular za kontakt"
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>
                    <label htmlFor="contact-name" style={{ display: "block", fontFamily: "'Fredoka', sans-serif", fontWeight: 600, color: "#18213D", fontSize: "0.9rem", marginBottom: 6 }}>
                      Ime i prezime *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Npr. Ana Petrović"
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        borderRadius: 12,
                        border: "2px solid #E8EEF4",
                        fontFamily: "'Nunito', sans-serif",
                        fontSize: "0.92rem",
                        color: "#18213D",
                        outline: "none",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#338BFF")}
                      onBlur={(e) => (e.target.style.borderColor = "#E8EEF4")}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" style={{ display: "block", fontFamily: "'Fredoka', sans-serif", fontWeight: 600, color: "#18213D", fontSize: "0.9rem", marginBottom: 6 }}>
                      Telefon *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="06x xxx xxxx"
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        borderRadius: 12,
                        border: "2px solid #E8EEF4",
                        fontFamily: "'Nunito', sans-serif",
                        fontSize: "0.92rem",
                        color: "#18213D",
                        outline: "none",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#338BFF")}
                      onBlur={(e) => (e.target.style.borderColor = "#E8EEF4")}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-topic" style={{ display: "block", fontFamily: "'Fredoka', sans-serif", fontWeight: 600, color: "#18213D", fontSize: "0.9rem", marginBottom: 6 }}>
                    Tema upita
                  </label>
                  <select
                    id="contact-topic"
                    style={{
                      width: "100%",
                      padding: "11px 14px",
                      borderRadius: 12,
                      border: "2px solid #E8EEF4",
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: "0.92rem",
                      color: "#18213D",
                      outline: "none",
                      background: "white",
                      transition: "border-color 0.2s",
                      cursor: "pointer",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#338BFF")}
                    onBlur={(e) => (e.target.style.borderColor = "#E8EEF4")}
                  >
                    <option value="">Izaberite temu</option>
                    <option value="rodjendani">Dečiji rođendan</option>
                    <option value="dnevna">Dnevna igra</option>
                    <option value="info">Opšte informacije</option>
                    <option value="ostalo">Ostalo</option>
                  </select>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>
                    <label htmlFor="contact-date" style={{ display: "block", fontFamily: "'Fredoka', sans-serif", fontWeight: 600, color: "#18213D", fontSize: "0.9rem", marginBottom: 6 }}>
                      Željeni datum
                    </label>
                    <input
                      id="contact-date"
                      type="date"
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        borderRadius: 12,
                        border: "2px solid #E8EEF4",
                        fontFamily: "'Nunito', sans-serif",
                        fontSize: "0.92rem",
                        color: "#18213D",
                        outline: "none",
                        background: "white",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#338BFF")}
                      onBlur={(e) => (e.target.style.borderColor = "#E8EEF4")}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-children" style={{ display: "block", fontFamily: "'Fredoka', sans-serif", fontWeight: 600, color: "#18213D", fontSize: "0.9rem", marginBottom: 6 }}>
                      Broj dece
                    </label>
                    <input
                      id="contact-children"
                      type="number"
                      min="1"
                      placeholder="Npr. 10"
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        borderRadius: 12,
                        border: "2px solid #E8EEF4",
                        fontFamily: "'Nunito', sans-serif",
                        fontSize: "0.92rem",
                        color: "#18213D",
                        outline: "none",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#338BFF")}
                      onBlur={(e) => (e.target.style.borderColor = "#E8EEF4")}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" style={{ display: "block", fontFamily: "'Fredoka', sans-serif", fontWeight: 600, color: "#18213D", fontSize: "0.9rem", marginBottom: 6 }}>
                    Poruka
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Napišite nam šta vas zanima..."
                    style={{
                      width: "100%",
                      padding: "11px 14px",
                      borderRadius: 12,
                      border: "2px solid #E8EEF4",
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: "0.92rem",
                      color: "#18213D",
                      outline: "none",
                      resize: "vertical",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#338BFF")}
                    onBlur={(e) => (e.target.style.borderColor = "#E8EEF4")}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ justifyContent: "center", fontSize: "1rem", padding: "15px 32px" }}
                >
                  📨 Pošaljite upit
                </button>

                <p style={{ color: "#8899AA", fontSize: "0.82rem", textAlign: "center", margin: "4px 0 0", lineHeight: 1.5 }}>
                  Naš tim će vas kontaktirati radi potvrde dostupnosti i dogovora svih detalja.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
