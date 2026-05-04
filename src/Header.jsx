export default function Header() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1.5rem 3rem",
      borderBottom: "1px solid #2a2a2a",
      fontFamily: "'Cinzel Decorative', cursive",
    }}>
      <h1 style={{ fontSize: "1.8rem", fontWeight: "700" }}>My Portfolio</h1>
      <h1 style={{ fontSize: "1.8rem", fontWeight: "400", letterSpacing: "0.1em" }}>Brent</h1>
      <h2 style={{ fontSize: "1rem", fontWeight: "400", letterSpacing: "0.05em" }}>715-123-4567</h2>
    </div>
  );
}