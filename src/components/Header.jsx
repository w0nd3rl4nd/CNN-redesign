import './Header.css';

function Header() {
  return (
    <>
        <div id="header_espacio_nav">
        <ul class="maintabs">
            {/* <img src="public/cnnLogoRed.png" alt="Logo CNN"> */}
            <li>World</li>
            <li>Politics</li>
            <li>Business</li>
            <li>Health</li>
            <li>Entertainment</li>
        </ul>
        </div>
    </>
  );
}

export default Header;