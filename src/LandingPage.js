import React from "react";

import { FiArrowRight } from "react-icons/fi";

import "./styles/global.css";
import "./styles/pages/LandingPage.css";

export default function LandingPage() {
  return (
    <div id="page-landing">
      <main>
        <div className="sign-up wrapper">
          <section>
            <h1>ELAS DESBANCAM</h1>
            <h2>Domine seu valioso dinheiro em poucos dias.</h2>
            <p>
              Com nossas dicas você vai em poucos dias sentir a diferença no
              bolso, e o melhor, sem mudanças drásticas
            </p>
          </section>
          <div className="card-signup">
            <h3>Inscreva-se</h3>
            <input type="text" placeholder="Nome" maxLength="50" />
            <input type="email" placeholder="Email" />
            <button onClick={() => {}}>Quero me inscrever</button>
            <label className="checkbox">
              <input
                type="checkbox"
                name="accept-notification"
                id="checkbox-header"
              />
              <span className="checkmark">Aceito receber notificações</span>
            </label>

            <div className="wrapper">
              <div className="signup-footer-text">
                <FiArrowRight size={26} color="#f5f5f5" />
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div className="signup-footer-text">
                <FiArrowRight size={26} color="#f5f5f5" />
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-course wrapper">
          <div className="square" />

          <div className="about-course-text">
            <h1>Falar do curso</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
        <div className="learning-method">
          <h1>Métodos de aprendizagem</h1>
          <div className="learning-wrapper">
            <section>
              <h3>Lorem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </section>
            <section>
              <h3>Lorem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </section>
            <section>
              <h3>Lorem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </section>
          </div>
        </div>
        <div className="message">
          <h2>
            Comece agora mesmo o primeiro passo é você ter vontate e não
            precisar fazer mudanças bruscas pois você vai desistir logo
          </h2>
        </div>
        <div className="about-we">
          <h1>Sobre nós</h1>
          <div className="about-we-wrapper">
            <section>
              <h3>Nome dela e biogafria breve</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </section>
            <div className="square" />
          </div>
        </div>
        <div className="sign-up wrapper">
          <section>
            <h1>ELAS DESBANCAM</h1>
            <h2>Mudar esse texto.</h2>
            <p>
              Mude(salve) sua saúde financeira aprenda mais sobre educação
              financeira e pare de pagar mico.
            </p>
            <p>
              Se você quer mudar sua situação financeira rápido sem ter
              complicações este curso é feito pra você.
            </p>
          </section>
          <div className="card-signup">
            <h3>Inscreva-se</h3>
            <input type="text" placeholder="Nome" maxLength="50" />
            <input type="email" placeholder="Email" />
            <button onClick={() => {}}>Quero me inscrever</button>
            <label className="checkbox">
              <input
                type="checkbox"
                name="accept-notification"
                id="checkbox-header"
              />
              <span className="checkmark">Aceito receber notificações</span>
            </label>

            <div className="wrapper">
              <div className="signup-footer-text">
                <FiArrowRight size={26} color="#f5f5f5" />
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div className="signup-footer-text">
                <FiArrowRight size={26} color="#f5f5f5" />
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
