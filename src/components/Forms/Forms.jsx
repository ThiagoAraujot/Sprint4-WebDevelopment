import "./Forms.scss";
import axios from "axios";
import enfermeira4 from "../../assets/enfermeira4.png";
import { useState } from "react";

const Forms = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = async () => {
    try {
      const response = await axios.get(
        `https://emailvalidation.abstractapi.com/v1/?api_key=17e0ace0ce0a45dab211f11972afef48&email=${email}`
      );
      if (response.data.is_valid_format.value) {
        setMessage("Email is valid");
      } else {
        setMessage("Email is invalid");
      }
    } catch (error) {
      console.error("Error validating email:", error);
      setMessage("Error validating email");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateEmail();
  };

  return (
    <section id="form">
      <div className="banner-txt">
        <h2 className="banner-subtitle">Faça parte dessa iniciativa!</h2>
        <h1 className="banner-title">HC GAMING</h1>
        <form onSubmit={handleSubmit}>
          <img src={enfermeira4} alt="" className="form-img" />

          <div className="form-txt">
            <label id="label-nome" className="form-label">
              Nome
            </label>
            <input
              type="text"
              id="input-nome"
              placeholder="Nome completo"
              required
            />

            <label id="label-email" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              id="input-email"
              placeholder="Seu melhor email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label id="label-senha" className="form-label">
              Senha
            </label>
            <input
              type="password"
              id="input-senha"
              placeholder="Sua melhor senha"
              required
            />

            <button id="botao" type="submit">
              Fazer parte
            </button>

            <div id="usuario-cadastrado">{message}</div>
          </div>

          <img src="imagens/_0003.svg" alt="" className="form-img" />
        </form>
      </div>
    </section>
  );
};

export default Forms;
