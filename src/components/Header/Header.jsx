import Logo from "../../assets/Logo.png";
import Nav from "../Nav/Nav.jsx";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div>
        <img src={Logo} alt="Logo de la página que dice La guarida de Papel" />
      </div>
      <Nav />
    </header>
  );
};

export default Header;
