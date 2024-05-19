import "./Navbar.scss";
import logoImg from "../../assets/hc-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img className="logo" src={logoImg} alt="logo HC" />
        <p className="nav-logo-txt">Gaming</p>
      </div>
      <ul className="nav-list">
        <li>
          <a className="nav-txt" href="#banner">
            Home
          </a>
        </li>
        <li>
          <a className="nav-txt" href="#public">
            Público
          </a>
        </li>
        <li>
          <a className="nav-txt" href="#problema">
            Dores
          </a>
        </li>
        <li>
          <a className="nav-txt" href="#impactos">
            Impactos
          </a>
        </li>
        <li>
          <a className="nav-txt" href="#gamification">
            Projeto
          </a>
        </li>
        <li>
          <a className="nav-txt" href="#objetivo">
            Objetivo
          </a>
        </li>
        <li>
          <a className="nav-txt" href="#positivos">
            Benefícios
          </a>
        </li>
        <li>
          <a className="nav-txt" href="#form">
            Entre em contato
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
