import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import FormWedding from "../elements/Forms/FormWedding";

class Wedding extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<>
				<div className="breadcrumbs__inner flex justify-center mt-10">
					<div className="breadcrumbs__item">Homepage</div>
					<p className="text-blue-400 mx-3">&gt;&gt;</p>
					<div className="breadcrumbs__item text-blue-400">
						Wedding proposals
					</div>
				</div>

				<div className="wedding_general flex justify-center  mt-12 relative">
					<div className="wedding_img md:w-auto md:max-w-xs relative">
						<img
							src="images/weddingmacaron.png"
							alt="weddingmacaroon"
							className="absolute ml-72 mt-48"
						/>
						<img
							src="images/weddingmacaron2.png"
							alt="weddingmacaroon2"
							className="absolute mt-36 -ml-10"
						/>
						<img
							src="images/weddingmeant.png"
							alt="meant"
							className="absolute mt-24 ml-72"
						/>
						<img src="images/weddingvase.png" alt="vase" />
					</div>

					<div className="wedding_info ml-60 mt-10 w-1/3">
						<h2 className="text-4xl text-center font-semibold mb-3">
							Wedding proposal
						</h2>
						<p className="text-center mb-1">
							Delicate macaroons with different flavors to decorate your wedding
							celebration
						</p>
						<div className="flex">
							<Link to="/">
								<div className="back__button text-black-400 border border-blue-400 hover:bg-blue-400 hover:text-white py-3 px-16 mt-10 rounded-md">
									<p>Presentation</p>
								</div>
							</Link>
							<Link to="/">
								<div className="back__button text-black-400 border border-blue-400 hover:bg-blue-400 hover:text-white py-3 px-16 mt-10 ml-4 rounded-md">
									<p>Pricelist</p>
								</div>
							</Link>
						</div>
						<p className="-ml-20 mt-10">Our Offers:</p>
						<p className="-ml-20 mt-2">
							It is pleasant, citizens, to observe how the actions of
							representatives of the opposition, overcoming the current
							difficult economic situation, are mixed with non-unique data to
							the point of complete unrecognizability, which is why their status
							of uselessness increases.
						</p>
					</div>
				</div>

				<div className="wedding_line">
					<hr
						className="w-full h-1 -mt-2"
						style={{ backgroundColor: "#F0BEB3" }}
					/>
				</div>

				<h2 className="text-3xl text-center font-semibold  mb-12 mt-10">
					Sets for weddings
				</h2>

				<div className="wedding__cards grid grid-cols-2 justify-items-stretch gap-y-5 gap-x-7 mb-8 sm:grid-cols-3 ">
					<div className="wedding__card flex flex-col justify-between bg-white max-w-[435px] rounded-md">
						<img
							className="w-full"
							src="images/weddingset1.png"
							alt="weddingset"
						/>

						<div className="wedding__card__text p-5">
							<p className="text-xl font-semibold">Set of 9 macarons</p>
							<p className="text-gray-600">
								With a festive stamp and wishes for the newlyweds
							</p>
						</div>

						<div className="wedding__card__buy border-t-2 border-t-gray-300 flex">
							<div className="wedding__card__price p-3  basis-3/5 flex items-center border-r-2 border-r-gray-300">
								<p className="text-xl text-red-500 font-semibold">$600</p>
							</div>

							<div className="wedding__card__cart px-2 basis-2/5 flex items-center justify-center">
								<img className="mr-2" src="images/cart.svg" alt="alt" />
								In cart
							</div>
						</div>
					</div>

					<div className="wedding__card flex flex-col justify-between bg-white max-w-[435px] rounded-md">
						<img
							className="w-full"
							src="images/weddingset2.png"
							alt="weddingset"
						/>
						<div className="wedding__card__text p-5">
							<p className="text-xl font-semibold">For guests</p>
							<p className="text-gray-600">
								Gift set of 2 macarons with the seal of the bride and groom in
								transparent packaging
							</p>
						</div>
						<div className="wedding__card__buy border-t-2 border-t-gray-300 flex">
							<div className="wedding__card__price p-3  basis-3/5 flex items-center border-r-2 border-r-gray-300">
								<p className="text-xl text-red-500 font-semibold">$200</p>
							</div>
							<div className="wedding__card__cart px-2 basis-2/5 flex items-center justify-center">
								<img className="mr-2" src="images/cart.svg" alt="alt" />
								In cart
							</div>
						</div>
					</div>

					<div className="wedding__card flex flex-col justify-between bg-white max-w-[435px] rounded-md">
						<img
							className="w-full"
							src="images/weddingset3.png"
							alt="weddingset"
						/>
						<div className="wedding__card__text p-5">
							<p className="text-xl font-semibold">Pyramid of macarons</p>
							<p className="text-gray-600">
								A wonderful addition to the holiday table
							</p>
						</div>
						<div className="wedding__card__buy border-t-2 border-t-gray-300 flex">
							<div className="wedding__card__price p-3  basis-3/5 flex items-center border-r-2 border-r-gray-300">
								<p className="text-xl text-red-500 font-semibold">$6600</p>
							</div>
							<div className="wedding__card__cart px-2 basis-2/5 flex items-center justify-center">
								<img className="mr-2" src="images/cart.svg" alt="alt" />
								In cart
							</div>
						</div>
					</div>

					<div className="wedding__card flex flex-col justify-between bg-white max-w-[435px] rounded-md">
						<img
							className="w-full"
							src="images/weddingset4.png"
							alt="weddingset"
						/>
						<div className="wedding__card__text p-5">
							<p className="text-xl font-semibold">Great Pyramid (10 floors)</p>
							<p className="text-gray-600">
								For a wedding or banquet, 240 macarons of your choice
							</p>
						</div>
						<div className="wedding__card__buy border-t-2 border-t-gray-300 flex">
							<div className="wedding__card__price p-3  basis-3/5 flex items-center border-r-2 border-r-gray-300">
								<p className="text-xl text-red-500 font-semibold">$14400</p>
							</div>
							<div className="wedding__card__cart px-2 basis-2/5 flex items-center justify-center">
								<img className="mr-2" src="images/cart.svg" alt="alt" />
								In cart
							</div>
						</div>
					</div>

					<div className="wedding__card flex flex-col justify-between bg-white max-w-[435px] rounded-md">
						<img
							className="w-full"
							src="images/weddingset5.png"
							alt="weddingset"
						/>
						<div className="wedding__card__text p-5">
							<p className="text-xl font-semibold">
								Macarons with guests' names
							</p>
							<p className="text-gray-600">
								Description of the sentence for a couple of lines or more
							</p>
						</div>
						<div className="wedding__card__buy border-t-2 border-t-gray-300 flex">
							<div className="wedding__card__price p-3  basis-3/5 flex items-center border-r-2 border-r-gray-300">
								<p className="text-xl text-red-500 font-semibold">$80</p>
							</div>
							<div className="wedding__card__cart px-2 basis-2/5 flex items-center justify-center">
								<img className="mr-2" src="images/cart.svg" alt="alt" />
								In cart
							</div>
						</div>
					</div>

					<div className="wedding__card flex flex-col justify-between bg-white max-w-[435px] rounded-md">
						<img
							className="w-full"
							src="images/weddingset6.png"
							alt="pweddingset"
						/>
						<div className="wedding__card__text p-5">
							<p className="text-xl font-semibold">Bachelorette party set</p>
							<p className="text-gray-600">
								A cheeky set for a bachelorette party. 30 macaroons with
								different flavors and funny names
							</p>
						</div>
						<div className="wedding__card__buy border-t-2 border-t-gray-300 flex">
							<div className="wedding__card__price p-3  basis-3/5 flex items-center border-r-2 border-r-gray-300">
								<p className="text-xl text-red-500 font-semibold">$3900</p>
							</div>
							<div className="pwedding__card__cart px-2 basis-2/5 flex items-center justify-center">
								<img className="mr-2" src="images/cart.svg" alt="alt" />
								In cart
							</div>
						</div>
					</div>
				</div>

				<div className="wedding_propose  flex mt-40 ">
					<div className="propose_img w-2/3 ">
						<img src="images/weddingpropose.png" alt="weddingpropose" />
					</div>

					<FormWedding />
				</div>

				<h2 className="text-3xl text-center font-semibold mt-20 mb-16">
					Answers on questions
				</h2>

				<div className="wedding_questions flex justify-between h-auto mb-20">
					<div className="w-1/3">
						<div className="question bg-white  rounded-md border-2 ">
							<div className="p-4">
								<h4 className="text-lg font-semibold mb-1">
									How long do macarons last?
								</h4>
							</div>
							<hr />
							<div className="p-4">
								<p className="text-base">Shelf life blah blah blah</p>
							</div>
						</div>
					</div>

					<div className="w-1/3 ml-6">
						<div className="question bg-white  rounded-md border-2 ">
							<div className="p-4">
								<h4 className="text-lg font-semibold mb-1">
									How quickly do we fulfill orders?
								</h4>
							</div>
							<hr />
							<div className="p-4">
								<p className="text-base">
									The standard order fulfillment time is 3-5 days. With a large
									circulation and during the pre-New Year season, it may
									increase. Because...
								</p>
							</div>
						</div>
					</div>

					<div className="w-1/3 ml-6">
						<div className="question bg-white  rounded-md border-2 ">
							<div className="p-4">
								<h4 className="text-lg font-semibold mb-1">And in 2 days?</h4>
							</div>
							<hr />
							<div className="p-4">
								<p className="text-base">
									Text about additional costs for urgent orders
								</p>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Wedding;
