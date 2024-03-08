import React, { PureComponent } from "react";
import Sets from "../elements/Sets/Sets";
import { Link } from "react-router-dom";

class Gift extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="main__popular mt-10 mb-12">
				<div className="breadcrumbs__inner flex justify-center">
					<div className="breadcrumbs__item">Homepage</div>

					<p className="text-blue-400 mx-3">&gt;&gt;</p>

					<div className="breadcrumbs__item text-blue-400">Gift Baskets</div>
				</div>
				<p className="text-4xl font-semibold text-center mb-12 mt-10">Holiday sets</p>

				<div className="main__popular__cards grid grid-cols-2 justify-items-stretch gap-y-5 gap-x-7 mb-8 sm:grid-cols-3">

<Sets />

				</div>
				<Link to="/ReadySets">
						<div className="choice__more flex justify-center mb-20 mt-10">
							<div className="choice__more__button border border-blue-400 px-10 py-4 rounded-md font-semibold cursor-pointer hover:bg-blue-400 hover:text-white">
								All ready-made sets
							</div>
						</div>
					</Link>
			</div>
		);
	}
}

export default Gift;
