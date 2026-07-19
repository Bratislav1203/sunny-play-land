export default function StickyMobileCTA() {
  return (
    <div className="sticky-mobile-cta" aria-label="Brze akcije">
      <a
        href="tel:+381692223390"
        className="btn-blue"
        style={{ flex: 1, justifyContent: "center", padding: "13px 10px", fontSize: "0.95rem" }}
        aria-label="Pozovite Sunny Playland"
      >
        📞 Pozovite
      </a>
      <a
        href="#rodjendani"
        className="btn-primary"
        style={{ flex: 1, justifyContent: "center", padding: "13px 10px", fontSize: "0.95rem" }}
        aria-label="Rezervišite termin"
      >
        🎂 Rezervišite
      </a>
    </div>
  );
}
