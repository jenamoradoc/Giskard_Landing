import React from "react";

import profile1 from "../img/Profile_1.png";
import profile2 from "../img/Profile_2.png";
import videoBackground from "../img/story_video.mp4";
import videoWebm from "../img/launch_rocket.webm";


class Main extends React.Component {

	render() {
		return (
			<div>
				<section class="section-about">
					<div class="u-center-text u-margin-bottom-big">
						<h2 class="heading-secondary">One Core to rule them all</h2>
						<p class="paragraph">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
							ipsum sapiente aspernatur
						</p>
					</div>
					<div class="row">
						<div class="col-2-of-3">
							{/* <div class="column_primary">
								<div class="col-1-of-4">
									<div class="cuadrado">Cuadrado Generico</div>
								</div>
								<div class="col-1-of-4">
									<div class="cuadrado">Cuadrado Generico</div>
								</div>
								<div class="col-1-of-4">
									<div class="cuadrado">Cuadrado Generico</div>
								</div>
								<div class="col-1-of-4">
									<div class="cuadrado">Cuadrado Generico</div>
								</div>
							</div>
							<div class="column_secondary">
								<div class="col-1-of-4">
									<div class="cuadrado">Cuadrado Generico</div>
								</div>
								<div class="col-1-of-4">
									<div class="cuadrado">Cuadrado Generico</div>
								</div>
								<div class="col-1-of-4">
									<div class="cuadrado">Cuadrado Generico</div>
								</div>
								<div class="col-1-of-4">
									<div class="cuadrado">Cuadrado Generico</div>
								</div>
							</div> */}
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
								<h3 class="heading-tertiary u-margin-bottom-small">Test</h3>
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
						<h2 class="heading-secondary u-margin-top-big ">What Experts Say?</h2>
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
								<img
									src={profile2}
									alt="Person on a tour"
									class="story__img"
								/>
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
