import React from "react";
import LogoMain from '../img/logoMain_White.svg'

class Header extends React.Component {
	state = {
		num: 0,
	};

	render() {
		return (
			<div>
				<header class="header">
					<div class="header__logo-box">
						<img src={LogoMain} alt="Logo" class="header__logo" />
					</div>

					<div class="header__text-box">
						<h1 class="heading-primary">
                            <span class="heading-primary--upper">Proyecto</span>
							<span class="heading-primary--main">GISKARD</span>
							<span class="heading-primary--sub">"DEMOCRATIZANDO EL ACCESO A LA TECNOLOGÍA SATELITAL"</span>
						</h1>

						<a href="mailto:hello@giskard.space" class="btn btn--white btn--animated"  >
							Mas Informacion
						</a>
					</div>
				</header>
			</div>
		);
	}
}

export default Header;
