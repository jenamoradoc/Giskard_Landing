import React from "react";

class Header extends React.Component {
	state = {
		num: 0,
	};

	render() {
		return (
			<div>
				<header class="header">
					<div class="header__logo-box">
						<img src="img/logo-white.png" alt="Logo" class="header__logo" />
					</div>

					<div class="header__text-box">
						<h1 class="heading-primary">
                            <span class="heading-primary--upper">Proyect</span>
							<span class="heading-primary--main">GISKARD</span>
							<span class="heading-primary--sub">Modular Space Tecnhonlogy</span>
						</h1>

						<a href="#section-tours" class="btn btn--white btn--animated">
							More Information
						</a>
					</div>
				</header>
			</div>
		);
	}
}

export default Header;
