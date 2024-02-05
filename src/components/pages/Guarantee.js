import React, { PureComponent } from "react";

class Guarantee extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<>
				<div className="breadcrumbs__inner flex justify-center mt-10">
					<div className="breadcrumbs__item">Homepage</div>
					<p className="text-blue-400 mx-3"></p>
					<div className="breadcrumbs__item text-blue-400">Fresh Guarantee</div>
				</div>

				<div className="taste_quality text-4xl font-semibold text-center mt-10 mb-12">
					Guarantees of taste and quality
				</div>
				<div className="taste_quality__text text-center mb-10 mt-4">
					When making cakes, we use only natural ingredients, avoiding the use
					of converters.
				</div>

				<div className="taste_quality_products flex justify-between">
					<div className="taste_quality_item flex flex-col items-center">
						<img className="taste" src="images/Taste1.png" alt="alt" />
						<p className="taste_quality__text text-center text-xs mb-10 mt-4">
							100% almond flour
						</p>
					</div>
					<div className="taste_quality_item flex flex-col items-center">
						<img className="taste" src="images/Taste2.png" alt="alt" />
						<p className="taste_quality__text text-center text-xs mb-10 mt-4">
							100% safe food colors
						</p>
					</div>
					<div className="taste_quality_item flex flex-col items-center">
						<img className="taste" src="images/Taste3.png" alt="alt" />
						<p className="taste_quality__text text-center text-xs mb-10 mt-4">
							100% fruit purees and natural ingredients
						</p>
					</div>
				</div>
			</>
		);
	}
}

export default Guarantee;
