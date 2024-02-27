import React, { PureComponent } from "react";

class FormWedding extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<>
				<div className="propose_info w-2/3">
					<h2 className="text-3xl text-center font-semibold  mb-4">
						We are open to new ideas
					</h2>

					<p>
						Each event is unique and we are ready to offer individual solutions
						for your event
					</p>

					<form className="flex flex-col justify-center mt-10">
						<div className="form__wedding">
							<div className="form__inputs basis-2/3 grid grid-cols-2 gap-x-7">
								<label className="text-sm mb-2" for="name">
									Your name*
									<input
										className="w-full p-2 mt-2"
										name="name"
										type="text"
										placeholder="Your name"
									/>
								</label>

								<label className="text-sm mb-2" for="phone">
									Your phone*
									<input
										className="w-full p-2 mt-2"
										name="phone"
										type="nuber"
										placeholder="Your phone"
									/>
								</label>

								<div className="form__textarea">
									<div className="text-sm mb-2">Describe your idea</div>
									<textarea
										className="w-full"
										name=""
										id=""
										cols="40"
										rows="2"
									></textarea>

									<button
										className="bg-red-500 text-white py-2 px-10 mx-auto mt-10 mb-2 hover:bg-red-600"
										type="button"
									>
										Send a request
									</button>
								</div>
							</div>

							<div className="form__lastText text-sm mb-12">
								By clicking on the "Place an order" button, I accept and agree
								to the{" "}
								<span className="text-blue-400 underline">Offer Agreement</span> and
								authorize the processing of my personal data in accordance with
								the
								<span className="text-blue-400 underline">Privacy Policy.</span>
							</div>
						</div>
					</form>
				</div>
			</>
		);
	}
}

export default FormWedding;
