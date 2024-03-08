import React, { PureComponent } from "react";
import SweetSets from "./SweetSets";
import { Link } from "react-router-dom";
class Sweet extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {

		};
	}

	render() {
		return (
			<>
				<div className="set__breadcrumbs mt-10 mb-12">
					<div className="breadcrumbs__inner flex justify-center text-gray-400">
						<div className="breadcrumbs__item">Homepage</div>

						<p className="text-blue-400 mx-3">&gt;&gt;</p>

						<div className="breadcrumbs__item text-blue-400">Sweet Sets</div>
					</div>
				</div>

				<div className="set_choice mb-24">
					<div className="choice_inner">
						<div className="choice_header">
							<div className="text-4xl font-semibold text-center mb-5">
								Want to try everything at once?
							</div>
							<div className="text-xl text-center mb-12">
								Then take a look at our combo sets
							</div>
						</div>
						<SweetSets />
					</div>

					<Link to="/ReadySets">
						<div className="choice__more flex justify-center mb-20 mt-10">
							<div className="choice__more__button border border-blue-400 px-10 py-4 rounded-md font-semibold cursor-pointer hover:bg-blue-400 hover:text-white">
								All ready-made sets
							</div>
						</div>
					</Link>
					
				</div>
			</>
		);
	}
}

export default Sweet;
