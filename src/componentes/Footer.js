import React from "react";

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
								srcset="img/logo-green-small-1x.png 1x, img/logo-green-small-2x.png 2x"
								media="(max-width: 37.5em)"
							/>
							<img
								srcset="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x"
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
											Company
										</a>
									</li>
									<li class="footer__item">
										<a href="#" class="footer__link">
											Contact us
										</a>
									</li>
									<li class="footer__item">
										<a href="#" class="footer__link">
											Carrers
										</a>
									</li>
									<li class="footer__item">
										<a href="#" class="footer__link">
											Privacy policy
										</a>
									</li>
									<li class="footer__item">
										<a href="#" class="footer__link">
											Terms
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
								for {" "}
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
