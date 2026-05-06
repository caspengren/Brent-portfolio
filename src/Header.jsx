export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
        padding: "1.5rem 2.5rem",
        borderBottom: "1px solid #2a2a2a",
        fontFamily: "'Cinzel Decorative', cursive",
        backgroundColor: "#0f0f0f",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(1rem, 3vw, 1.8rem)",
          fontWeight: "700",
          letterSpacing: "0.05em",
          color: "#f0ede8",
        }}
      >
        Shadows Inc. Photography and Videography
      </h1>

      <div
        className="header-contact"
        style={{
          textAlign: "right",
          borderLeft: "1px solid #2a2a2a",
          paddingLeft: "1.5rem",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(0.75rem, 2vw, 1rem)",
            fontWeight: "400",
            letterSpacing: "0.08em",
            color: "#f0ede8",
          }}
        >
          Brent Kynell
        </h2>
        <p
          style={{
            fontSize: "clamp(0.65rem, 1.5vw, 0.8rem)",
            color: "#777",
            letterSpacing: "0.06em",
            marginTop: "0.3rem",
          }}
        >
          For inquiries — call/text: (000) 000-0000
        </p>
      </div>
    </div>
  );
}