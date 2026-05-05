export default function Header() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1.5rem 3rem",
      borderBottom: "1px solid #2a2a2a",
      fontFamily: "'Cinzel Decorative', cursive",

      // fonts ranked for me 
    //jimbo: https://fonts.google.com/specimen/Jimbo?query=jimbo 3
    //cinzel: https://fonts.google.com/specimen/Cinzel+Decorative?query=cinzel+decorative 1
    //uncial: https://fonts.google.com/specimen/Uncial?query=uncial 2


    }}>
      <h1 style={{ fontSize: "1.8rem", fontWeight: "700" }}>Shadows Inc. Photography and Videography</h1>
      {/* <h1 style={{ fontSize: "1.8rem", fontWeight: "400", letterSpacing: "0.1em" }}>Brent</h1> */}
      <h2 style={{ fontSize: "1rem", fontWeight: "400", letterSpacing: "0.05em" }}>Brent Kynell (Place-holder-number)</h2>
    </div>
  );
}