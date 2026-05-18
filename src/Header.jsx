import HeaderContact from "./HeaderContact";
import HeaderTitle from "./HeaderTitle";

export default function Header() {
  return (
    <div className="header-top">
      <HeaderTitle />
      <HeaderContact />
    </div>
  );
}
