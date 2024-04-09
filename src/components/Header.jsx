import "./Header.css";
import logoImg from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <img src={logoImg} alt="Stylized globe" />
      <h1>PlacePicker</h1>
      <p>
        Create your personal collection of places you would like to visit or you
        have visited.
      </p>
    </header>
  );
};

export default Header;
