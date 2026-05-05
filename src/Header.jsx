// Header component for the portfolio site
// Displays the main site title and the owner's name/placeholder
export default function Header() {
  return (
    <div
      // Flex container for inline header layout
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.5rem 3rem",
        borderBottom: "1px solid #2a2a2a",
        fontFamily: "'Cinzel Decorative', cursive",
        // Font preferences (ranked):
        // 1. Cinzel Decorative
        // 2. Uncial
        // 3. Jimbo
      }}
    >
      {/* Main site title */}
      <h1 style={{ fontSize: "1.8rem", fontWeight: "700" }}>
        Shadows Inc. Photography and Videography
      </h1>
      {/* Optional alternate title style (commented out) */}
      {/* <h1 style={{ fontSize: "1.8rem", fontWeight: "400", letterSpacing: "0.1em" }}>Brent</h1> */}
      {/* Owner's name and placeholder for contact/number */}
      <h2 style={{ fontSize: "1rem", fontWeight: "400", letterSpacing: "0.05em" }}>
        Brent Kynell (Place-holder-number)
      </h2>
    </div>
  );
}