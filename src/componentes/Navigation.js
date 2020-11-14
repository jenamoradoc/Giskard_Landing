import React from "react";

class Navigation extends React.Component {
	state = {
		num: 0,
	};

	render() {
		return (
			<div>
				<div class="navigation">
					<input
						type="checkbox"
						class="navigation__checkbox"
						id="navi-toggle"
					/>

					<label for="navi-toggle" class="navigation__button">
						<span class="navigation__icon">&nbsp;</span>
					</label>

					<div class="navigation__background">&nbsp;</div>

					<nav class="navigation__nav">
						<ul class="navigation__list">
							<li class="navigation__item">
								<a href="#" class="navigation__link">
									<span>01</span>About Giskard 
								</a>
							</li>
							<li class="navigation__item">
								<a href="#" class="navigation__link">
									<span>02</span>About 
								</a>
							</li>
							<li class="navigation__item">
								<a href="#" class="navigation__link">
									<span>03</span>Stories
								</a>
							</li>
							<li class="navigation__item">
								<a href="#" class="navigation__link">
									<span>04</span>Asimov Labs
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		);
	}
}

export default Navigation;
