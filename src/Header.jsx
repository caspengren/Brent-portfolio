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
      <h2 style={{ fontSize: "clamp(0.75rem, 2vw, 1rem)", fontWeight: "400", letterSpacing: "0.05em" }}>
        Brent Kynell (Place-holder-number)
      </h2>
    </div>
  );
}