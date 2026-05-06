export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "0.5rem",
        padding: "1.5rem 2rem",
        borderBottom: "1px solid #2a2a2a",
        fontFamily: "'Cinzel Decorative', cursive",
      }}
    >
      <h1 style={{ fontSize: "clamp(1rem, 3vw, 1.8rem)", fontWeight: "700" }}>
        Shadows Inc. Photography and Videography
      </h1>
      <div style={{ textAlign: "right" }}>
        <h2 style={{ fontSize: "clamp(0.75rem, 2vw, 1rem)", fontWeight: "400", letterSpacing: "0.05em" }}>
          Brent Kynell
        </h2>
        <p style={{ fontSize: "clamp(0.65rem, 1.5vw, 0.85rem)", color: "#aaa", letterSpacing: "0.05em", marginTop: "0.2rem" }}>
          For inquiries — call/text: (000) 000-0000
        </p>
      </div>
    </div>
  );
}