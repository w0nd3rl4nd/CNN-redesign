import './Header2.css';
import cnnLogoRed from "../assets/cnnLogoRed.png";
import loginImg from "../assets/login.png"; // Asegúrate de tener esta imagen en assets

function Header() {
  return (
    <div id="header_espacio_nav">
      <div className="nav-left">
        <img src={cnnLogoRed} alt="Logo CNN" className="logo" />
        <ul className="maintabs">
          <li>World</li>
          <li>Politics</li>
          <li>Business</li>
          <li>Health</li>
          <li>Entertainment</li>
        </ul>
      </div>
      <div className="nav-right">
        <li className="live">🔴 Live TV</li>
        <img className="login" src={loginImg} alt="Log In" />
      </div>
    </div>
  );
}

export default Header;
