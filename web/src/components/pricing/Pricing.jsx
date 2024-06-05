import React from 'react';
import './Pricing.css';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signup');
  };

  return (
    <div className='div-prices'>
      <h1 className='hagaum'>Nossos Planos</h1>
      <section className="pricing">
        <article className="card">
          <h2>Iniciante</h2>
          <div className="price">Grátis</div>
          <p>Para conhecer a plataforma.</p>
          <ul>
            <li>2 Créditos</li>
            <li>Roteiros Limitados</li>
            <li>Sem Armazenamento</li>
            <li>Sem suporte</li>
          </ul>
          <button onClick={handleClick}>Assine Já</button>
        </article>

        <article className="primary card">
          <h2>Membro</h2>
          <div className="price">R$10</div>
          <p>Para pessoas que gostam de viajar e querem ter experiencias melhores.</p>
          <ul>
            <li>3 Créditos por Mês</li>
            <li>Armazenamento de 5 Roteiros</li>
            <li>Histórico de Preferências</li>
            <li>Suporte por e-mail</li>
          </ul>
          <button onClick={handleClick}>Assine Já</button>
        </article>

        <article className="card">
          <h2>Pro</h2>
          <div className="price">R$20</div>
          <p>Para viajar o mundo.</p>
          <ul>
            <li>Roteiros e Armazenamento ilimitados.</li>
            <li>Suporte dedicado por telefone</li>
          </ul>
          <button onClick={handleClick}>Assine Já</button>
        </article>
      </section>
    </div>
  );
};

export default Pricing;
