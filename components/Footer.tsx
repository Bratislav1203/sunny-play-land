"use client";
import { HeartSvg } from "./svg/Decorations";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#18213D",
        color: "white",
        paddingTop: 60,
        paddingBottom: 32,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Wave top */}
      <div style={{ position: "absolute", top: -2, left: 0, right: 0, lineHeight: 0, pointerEvents: "none" }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0 0C360 60 1080 60 1440 0V60H0V0Z" fill="#18213D"/>
        </svg>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 40, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg, #FFC928, #FF5F87)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>☀️</div>
              <div>
                <div style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: "1.4rem", color: "#FF91B2" }}>Sunny</div>
                <div style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "0.9rem", color: "#67B7FF" }}>Playland</div>
              </div>
            </div>
            <p style={{ color: "#A8B4D0", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: 260 }}>
              Dečija igraonica i cafe u srcu Višnjičke banje — mesto gde igra postaje avantura.
            </p>
            <a
              href="https://instagram.com/sunny_playland"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pratite Sunny Playland na Instagramu"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 16, color: "#FF91B2", textDecoration: "none", fontFamily: "'Fredoka', sans-serif", fontWeight: 500 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              @sunny_playland
            </a>
          </div>

          {/* Kontakt */}
          <div>
            <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "1.15rem", color: "#FF91B2", marginBottom: 16 }}>Kontakt</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, color: "#A8B4D0", fontSize: "0.9rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <span style={{ fontSize: "1rem", flexShrink: 0 }}>📍</span>
                <span>Slanački put 76d<br/>Sunnyville, Višnjička banja<br/>Beograd</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span>📞</span>
                <a href="tel:+381692223390" style={{ color: "#67B7FF", textDecoration: "none" }}>+381 69 222 33 90</a>
              </div>
            </div>
          </div>

          {/* Brze veze */}
          <div>
            <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "1.15rem", color: "#FF91B2", marginBottom: 16 }}>Brze veze</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { href: "#aktivnosti", label: "Aktivnosti" },
                { href: "#rodjendani", label: "Rođendani" },
                { href: "#dnevna-igra", label: "Dnevna igra" },
                { href: "#galerija", label: "Galerija" },
                { href: "#kontakt", label: "Kontakt" },
              ].map((l) => (
                <a key={l.href} href={l.href} style={{ color: "#A8B4D0", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#FF91B2")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#A8B4D0")}
                >
                  → {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "1.15rem", color: "#FF91B2", marginBottom: 16 }}>Rezerviši prostor</h3>
            <p style={{ color: "#A8B4D0", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: 16 }}>
              Planirate dečiji rođendan ili dolazak na dnevnu igru?
            </p>
            <a href="#rodjendani" className="btn-primary" style={{ fontSize: "0.9rem", padding: "12px 22px" }}>
              🎂 Pošaljite upit
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", justifyContent: "space-between" }}>
          <p style={{ color: "#6B7A99", fontSize: "0.82rem" }}>
            © {new Date().getFullYear()} Sunny Playland. Sva prava zadržana.
          </p>
          <p style={{ color: "#6B7A99", fontSize: "0.82rem", display: "flex", alignItems: "center", gap: 4 }}>
            Napravljeno sa <HeartSvg style={{ width: 16, height: 14 }} /> za sve male istraživače
          </p>
        </div>
      </div>
    </footer>
  );
}
