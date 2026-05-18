import HeaderContact from "./HeaderContact";
import HeaderTitle from "./HeaderTitle";

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
        color: "#f0ede8",
      }}
    >
      <HeaderTitle />
      <HeaderContact />
    </div>
  );
}
