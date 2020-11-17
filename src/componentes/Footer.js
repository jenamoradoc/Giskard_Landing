import React from "react";
import logo from "../img/giskard_logo.png";

class Footer extends React.Component {
  state = {
    num: 0,
  };

  render() {
    return (
      <div>
        <footer class="footer">
          <div class="footer__logo-box">
            <picture class="footer__logo">
              <source
                className="logo_main"
                srcset={logo}
                media="(max-width: 37.5em)"
              />
              <img
                className="logo_main"
                srcset={logo}
                alt="Full logo"
                src="img/logo-green-2x.png"
              />
            </picture>
          </div>
          <div class="row">
            <div class="col-1-of-2">
              <div class="footer__navigation">
                <ul class="footer__list">
                  <li class="footer__item">
                    <a href="#" class="footer__link">
                      Compañia
                    </a>
                  </li>
                  <li class="footer__item">
                    <a href="#" class="footer__link">
                      Contacto
                    </a>
                  </li>
                  <li class="footer__item">
                    <a href="#" class="footer__link">
                      Carreras
                    </a>
                  </li>
                  <li class="footer__item">
                    <a href="#" class="footer__link">
                      Politica de Privacidad
                    </a>
                  </li>
                  <li class="footer__item">
                    <a href="#" class="footer__link">
                      Terminos Y Condiciones
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-1-of-2">
              <p class="footer__copyright">
                Built by{" "}
                <a href="#" class="footer__link">
                  Asimov Tech Labs
                </a>{" "}
                for{" "}
                <a href="#" class="footer__link">
                  AIS 2020
                </a>
                . Copyright &copy; by Asimov Tech Labs.
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
