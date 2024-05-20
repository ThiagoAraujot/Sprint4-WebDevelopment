import "./Banner.scss";
import zebraImg from "../../assets/1-zebra.svg";
import "bootstrap-icons/font/bootstrap-icons.css";

const Banner = () => {
  return (
    <section id="banner">
      <div className="banner-txt">
        <h2 className="banner-subtitle">Bem-vindo(a) ao nosso site!</h2>
        <h1 className="banner-title">HC GAMING</h1>
        <p className="banner-descricao">
          Uma iniciativa voltada á proporcionar a melhor experiência para
          crianças e adolescentes, transformando toda sua jornada hospitalar
          divertida e intuitiva através de jogos!
        </p>
        <a href="#public">
          <button className="banner-button">Saiba Mais</button>
          <div className="home-scroll">
            <span className="home-scroll-name">Scroll down</span>
            <i className="bi bi-chevron-double-down"></i>
          </div>
        </a>
      </div>

      <img src={zebraImg} alt="" />
    </section>
  );
};

export default Banner;
