import React from "react";
import { Link } from "react-router-dom";
import viagem from "./viagem.jpg";
import Aventureira from "./aventureira.svg";
import Hiker from "./hiker.jpeg";
import "./Body.css";

const Body = () => {
  return (
    <body>
      <section className="section1">
        <container className="container">
          <div className="div-esq">
            <h1>
              Planeje sua viagem de forma simples e intuitiva, sem complicações.
            </h1>
            <p>
              Combinando tecnologia avançada e inteligência artificial,
              oferecemos roteiros personalizados que transformam suas
              preferências em experiências únicas.
            </p>
            <Link to="/signup" className="link">
              Comece Já
            </Link>
          </div>
          <div>
            <img className="img" alt="viagem" src={viagem} />
          </div>
        </container>
      </section>

      <section className="section2">
        <container className="container">
          <div>
            <img className="img" alt="aventureira" src={Aventureira} />
          </div>
          <div className="div-dir">
            <h1 className="vantagens-body">Vantagens do Nosso Aplicativo</h1>
            <p>
              Explore um novo horizonte em suas viagens com nosso aplicativo.
              Descubra como tornamos o planejamento de viagens simples,
              intuitivo e adaptado às suas preferências.
            </p>
            <ul className="features">
              <li>Planejamento de viagens personalizado</li>
              <li>Experiências únicas e inesquecíveis</li>
              <li>Inteligência artificial avançada</li>
              <li>Aplicativo intuitivo e fácil de usar</li>
              <li>Realidade aumentada</li>
            </ul>
          </div>
        </container>
      </section>

      <section className="section1">
        <container className="container">
          <div className="div-esq">
            <h1>Inscreva-se Já e <br /> <span>Viaje Sem Limites!</span></h1>
            <p>
              Assine agora e mergulhe em roteiros personalizados ilimitados que
              transformam suas viagens em experiências inesquecíveis. Seja o
              protagonista de cada jornada, com acesso exclusivo a aventuras
              feitas sob medida para você.
            </p>
            <Link to="/signup" className="link">
              Comece Grátis
            </Link>
            {/* <Link to="/plans" className="saiba">
              ▸ Saiba Mais
            </Link> */}
          </div>
          <div>
            <img className="img2" alt="aviao" src={Hiker} />
          </div>
        </container>
      </section>
    </body>
  );
};

export default Body;
