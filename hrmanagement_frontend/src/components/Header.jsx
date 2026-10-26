
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "60px",
        width: "100%",
        padding: "20px",
        backgroundColor: "#f2f2f2"
      }}
    >
      <Link to="/" style={{ display: "inline-block" }}>Home</Link>
      <Link to="/About" style={{ display: "inline-block" }}>About us</Link>
      <Link to="/Contact" style={{ display: "inline-block" }}>Contact us</Link>
    </nav>
  );
}

export default Header;
