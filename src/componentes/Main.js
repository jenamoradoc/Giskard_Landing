import React from "react";

import profile1 from "../img/Profile_1.png";
import profile2 from "../img/Profile_2.png";
import videoBackground from "../img/story_video.mp4";
import videoWebm from "../img/launch_rocket.webm";
import photoframe1 from '../img/temporal_1.jpg'
import photoframe2 from '../img/temporal_2.jpg'
import photoframe3 from '../img/temporal_3.jpg'

class Main extends React.Component {
  render() {
    return (
      <div>
        <section class="section-about">
          <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary">Democratizando el acceso a la tecnología satelital</h2>
            <p class="paragraph">
			"Gracias a la disponibilidad de modulos independientes listos para ser certificados, construir un satelite sera como decidir de que sabor quieres tu pizza"            </p>
          </div>
          <div class="row">
            <div class="col-2-of-3">
              <h3 class="heading-tertiary u-margin-bottom-small">
                You're going to fall in love with nature
              </h3>
              <p class="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur libero repellat quis
                consequatur ducimus quam nisi exercitationem omnis earum qui.
              </p>

              <h3 class="heading-tertiary u-margin-bottom-small">
                Live adventures like you never have before
              </h3>
              <p class="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores nulla deserunt voluptatum nam.
              </p>

              <a href="#" class="btn-text">
                Learn more &rarr;
              </a>
            </div>
            <div class="col-1-of-3">Aqui tomo 1 espacio</div>
          </div>
        </section>
        <section class="section-about">
          <div class="row">
            <div class="col-1-of-2">
              <div class="composition">
                <img
                 srcset={photoframe1}
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="Photo 1"
                  class="composition__photo composition__photo--p1"
                  src={photoframe1}
                />

                <img
				 srcset={photoframe2}
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="Photo 2"
                  class="composition__photo composition__photo--p2"
                  src={photoframe2}
                />

                <img
                  srcset={photoframe3}
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="Photo 3"
                  class="composition__photo composition__photo--p3"
                  src={photoframe3}
                />
              </div>
              <p class="paragraph">espacio</p>
            </div>
            <div class="col-1-of-2">
              <h3 class="heading-tertiary u-margin-bottom-small">
                You're going to fall in love with nature
              </h3>
              <p class="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur libero repellat quis
                consequatur ducimus quam nisi exercitationem omnis earum qui.
              </p>

              <a href="#" class="btn-text">
                Learn more &rarr;
              </a>
            </div>
          </div>
        </section>

        <section class="section-features">
          <div class="row">
            <div class="col-1-of-4">
              <div class="feature-box">
                <i class="feature-box__icon icon-basic-world"></i>
                <h3 class="heading-tertiary u-margin-bottom-small">Design</h3>
                <p class="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur.
                </p>
              </div>
            </div>

            <div class="col-1-of-4">
              <div class="feature-box">
                <i class="feature-box__icon icon-basic-compass"></i>
                <h3 class="heading-tertiary u-margin-bottom-small">
                  Simulation
                </h3>
                <p class="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur.
                </p>
              </div>
            </div>

            <div class="col-1-of-4">
              <div class="feature-box">
                <i class="feature-box__icon icon-basic-map"></i>
                <h3 class="heading-tertiary u-margin-bottom-small">
                  Manufacture
                </h3>
                <p class="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur.
                </p>
              </div>
            </div>

            <div class="col-1-of-4">
              <div class="feature-box">
                <i class="feature-box__icon icon-basic-map"></i>
                <h3 class="heading-tertiary u-margin-bottom-small">Test & certifications</h3>
                <p class="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="section-stories">
          <div class="bg-video">
            <video
              autoPlay="autoplay"
              loop="loop"
              muted
              class="bg-video__content"
            >
              <source src={videoBackground} type="video/mov" />
              <source src={videoWebm} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary u-margin-top-big ">
              What Experts Say?
            </h2>
          </div>

          <div class="row">
            <div class="story">
              <figure class="story__shape">
                <img src={profile1} alt="Person on a tour" class="story__img" />
                <figcaption class="story__caption">James Marshall</figcaption>
              </figure>
              <div class="story__text">
                <h3 class="heading-tertiary u-margin-bottom-small">
                  A effetive solution to a expensive problem
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="story">
              <figure class="story__shape">
                <img src={profile2} alt="Person on a tour" class="story__img" />
                <figcaption class="story__caption">Jack Wilson</figcaption>
              </figure>
              <div class="story__text">
                <h3 class="heading-tertiary u-margin-bottom-small">
                  A sustainable and effective solution
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.
                </p>
              </div>
            </div>
          </div>

          <div class="u-center-text u-margin-top-huge">
            <a href="#" class="btn-text">
              Read all stories &rarr;
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
