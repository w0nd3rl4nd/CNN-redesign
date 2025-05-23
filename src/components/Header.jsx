import './Header.css';
import cnnLogoRed from "../assets/cnnLogoRed.png";

function Header() {
  return (
    <>
        <div id="header_espacio_nav">
        <ul class="maintabs">
            <img src="../assets/cnnLogoRed.png" alt="Logo CNN"></img>
            <li>World</li>
            <li>Politics</li>
            <li>Business</li>
            <li>Health</li>
            <li>Entertainment</li>
            
        </ul>
        <div id="nav-login">
            <li class="live">🔴 Live TV</li>
            <img clas="login" src="login.png" alt="Log In"></img>
        </div>
        
        </div>
    </>
  );
}

export default Header;