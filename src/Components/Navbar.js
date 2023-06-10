import logo from "../assets/logoH.png";
import navImg from "../assets/sterren.jpg";
import "../App.css";

export default function Navbar() {
  return (
    <div className="nav-comp">
      <nav className="navbar">
        <a href="/">
          <img src={logo} alt="logo" width="80%" className="logo-img" />
        </a>
        <a href="https://nl.trustpilot.com/review/mobilae.be?utm_medium=trustbox&utm_source=MicroStar">
          <img src={navImg} alt="logo2" width="80%" className="nav-img" />
        </a>
      </nav>
    </div>
  );
}
