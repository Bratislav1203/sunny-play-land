"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/aktivnosti", label: "Aktivnosti" },
  { href: "/rodjendani", label: "Rođendani" },
  { href: "/dnevna-igra", label: "Dnevna igra" },
  { href: "/galerija", label: "Galerija" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: scrolled ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid rgba(255,95,135,0.12)" : "1px solid transparent",
          transition: "all 0.3s ease",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.07)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            height: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Sunny Playland – početna"
            style={{ textDecoration: "none", display: "flex", alignItems: "center" }}
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <img
              src="/images/logo.png"
              alt="Sunny Playland"
              className="logo-tilt"
              style={{ height: 84, width: "auto", display: "block", transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)" }}
            />
          </Link>

          <style>{`
            @keyframes logo-wiggle {
              0%   { transform: rotate(0deg); }
              15%  { transform: rotate(-8deg); }
              35%  { transform: rotate(7deg); }
              55%  { transform: rotate(-5deg); }
              75%  { transform: rotate(4deg); }
              90%  { transform: rotate(-2deg); }
              100% { transform: rotate(0deg); }
            }
            .logo-tilt { transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
            .logo-tilt:hover { animation: logo-wiggle 0.7s ease-in-out infinite; transition: none; }
          `}</style>

          {/* Desktop nav */}
          <nav aria-label="Glavna navigacija" style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: "'Fredoka', sans-serif",
                  fontWeight: 500,
                  fontSize: "1rem",
                  color: "#18213D",
                  textDecoration: "none",
                  padding: "8px 14px",
                  borderRadius: 12,
                  transition: "background 0.2s, color 0.2s",
                }}
                className="nav-link"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#FFF0F5";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#FF5F87";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#18213D";
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="/rodjendani"
              className="btn-primary"
              style={{ marginLeft: 16, padding: "10px 24px", fontSize: "0.95rem" }}
            >
              🎂 Rezerviši termin
            </a>
          </nav>

          {/* Hamburger */}
          <button
            aria-label={open ? "Zatvori meni" : "Otvori meni"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              borderRadius: 10,
            }}
            id="hamburger-btn"
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 5, width: 24 }}>
              <span style={{ display: "block", height: 3, background: open ? "#FF5F87" : "#18213D", borderRadius: 2, transition: "all 0.3s", transform: open ? "rotate(45deg) translate(5.5px, 5.5px)" : "none" }} />
              <span style={{ display: "block", height: 3, background: open ? "#FF5F87" : "#18213D", borderRadius: 2, transition: "all 0.3s", opacity: open ? 0 : 1 }} />
              <span style={{ display: "block", height: 3, background: open ? "#FF5F87" : "#18213D", borderRadius: 2, transition: "all 0.3s", transform: open ? "rotate(-45deg) translate(5.5px, -5.5px)" : "none" }} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile nav overlay */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: 72,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 49,
            background: "rgba(255,255,255,0.98)",
            backdropFilter: "blur(10px)",
            display: "flex",
            flexDirection: "column",
            padding: "24px 24px 100px",
            gap: 8,
            overflowY: "auto",
          }}
          id="mobile-nav"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "'Fredoka', sans-serif",
                fontWeight: 600,
                fontSize: "1.5rem",
                color: "#18213D",
                textDecoration: "none",
                padding: "16px 20px",
                borderRadius: 16,
                borderBottom: "1px solid #FFF0F5",
                transition: "background 0.2s",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/rodjendani"
            className="btn-primary"
            onClick={() => setOpen(false)}
            style={{ marginTop: 16, textAlign: "center", justifyContent: "center", fontSize: "1.1rem", padding: "16px 32px" }}
          >
            🎂 Rezerviši termin
          </a>
          <a
            href="tel:+381692223390"
            className="btn-blue"
            onClick={() => setOpen(false)}
            style={{ textAlign: "center", justifyContent: "center", fontSize: "1.1rem", padding: "16px 32px" }}
          >
            📞 Pozovite nas
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          #hamburger-btn { display: flex !important; }
          nav[aria-label="Glavna navigacija"] { display: none !important; }
        }
      `}</style>
    </>
  );
}
