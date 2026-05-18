import HeaderPic from "./HeaderPic.JPG";

export default function HeaderContact() {
  return (
    <div
      className="header-contact"
      style={{
        display: "flex",
        flexDirection: "column",
        //justifyContent: "space-between",
        alignItems: "flex-start",
        textAlign: "left",
        borderLeft: "1px solid rgba(255, 255, 255, 0.18)",
        padding: "1.75rem",
        borderRadius: "1rem",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.18)), url(${HeaderPic})`,
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minWidth: "300px",
        width: "100%",
        maxWidth: "360px",
        minHeight: "220px",
        boxShadow: "0 16px 30px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div>
        <h2
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
            fontWeight: "700",
            letterSpacing: "0.05em",
            color: "#f7f3ed",
            textShadow: "0 1px 4px rgba(0, 0, 0, 0.4)",
            margin: 0,
          }}
        >
          Brent Kynell
        </h2>
      </div>

      <p
        style={{
          fontSize: "clamp(0.75rem, 1.5vw, 0.9rem)",
          color: "#f0ede8",
          letterSpacing: "0.05em",
          margin: 0,
          marginTop: "auto",
          textShadow: "0 1px 2px rgba(0, 0, 0, 0.35)",
          lineHeight: 1.5,
        }}
      >
        For inquiries — call/text
        <br />
        (000) 000-0000
      </p>
    </div>
  );
}
