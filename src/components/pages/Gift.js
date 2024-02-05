import React, { PureComponent } from "react";

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
					<div className="main__popular__card flex flex-col justify-between bg-white max-w-[435px] rounded-md">
						<img className="w-full" src="images/Popular1.png" alt="popularImage" />
						<div className="popular__card__text p-5">
							<p className="text-xl font-semibold">Heart</p>
							<p className="text-gray-600">
								24 pieces in a heart-shaped box. <br />
								Assorted 6 flavors
							</p>
						</div>
						<div className="popular__card__buy border-t-2 border-t-gray-300 flex">
							<div className="popular__card__price p-3  basis-3/5 flex items-center border-r-2 border-r-gray-300">
								<p className="text-xl text-red-500 font-semibold">$200</p>
							</div>
							<div className="popular__card__cart px-2 basis-2/5 flex items-center justify-center">
								<img className="mr-2" src="images/cart.svg" alt="alt" />
								In cart
							</div>
						</div>
					</div>

					<div className="main__popular__card flex flex-col justify-between bg-white max-w-[435px] rounded-md">
						<img className="w-full" src="images/Popular2.png" alt="popularImage" />
						<div className="popular__card__text p-5">
							<p className="text-xl font-semibold">Beauty will save the world</p>
							<p className="text-gray-600">
								Set 16 pcs. Flavors: Strawberry - Basil, Coconut, Blue Cheese,
								Parmesan
							</p>
						</div>
						<div className="popular__card__buy border-t-2 border-t-gray-300 flex">
							<div className="popular__card__price p-3  basis-3/5 flex items-center border-r-2 border-r-gray-300">
								<p className="text-xl text-red-500 font-semibold">$60</p>
							</div>
							<div className="popular__card__cart px-2 basis-2/5 flex items-center justify-center">
								<img className="mr-2" src="images/cart.svg" alt="alt" />
								In cart
							</div>
						</div>
					</div>

					<div className="main__popular__card flex flex-col justify-between bg-white max-w-[435px] rounded-md">
						<img className="w-full" src="images/Popular3.png" alt="popularImage" />
						<div className="popular__card__text p-5">
							<p className="text-xl font-semibold">Round set</p>
							<p className="text-gray-600">
								40 macaroons in a round box with a personal inscription
							</p>
						</div>
						<div className="popular__card__buy border-t-2 border-t-gray-300 flex">
							<div className="popular__card__price p-3  basis-3/5 flex items-center border-r-2 border-r-gray-300">
								<p className="text-xl text-red-500 font-semibold">$240</p>
							</div>
							<div className="popular__card__cart px-2 basis-2/5 flex items-center justify-center">
								<img className="mr-2" src="images/cart.svg" alt="alt" />
								In cart
							</div>
						</div>
					</div>

					<div className="main__popular__card flex flex-col justify-between bg-white max-w-[435px] rounded-md">
						<img className="w-full" src="images/Popular4.png" alt="popularImage" />
						<div className="popular__card__text p-5">
							<p className="text-xl font-semibold">Set for 9</p>
							<p className="text-gray-600">
								Set of 9 pieces in a square box. Flavors: chocolate, pistachio,
								cherry
							</p>
						</div>
						<div className="popular__card__buy border-t-2 border-t-gray-300 flex">
							<div className="popular__card__price p-3  basis-3/5 flex items-center border-r-2 border-r-gray-300">
								<p className="text-xl text-red-500 font-semibold">$70</p>
							</div>
							<div className="popular__card__cart px-2 basis-2/5 flex items-center justify-center">
								<img className="mr-2" src="images/cart.svg" alt="alt" />
								In cart
							</div>
						</div>
					</div>

					<div className="main__popular__card flex flex-col justify-between bg-white max-w-[435px] rounded-md">
						<img className="w-full" src="images/Popular5.png" alt="popularImage" />
						<div className="popular__card__text p-5">
							<p className="text-xl font-semibold">Set for 16</p>
							<p className="text-gray-600">
								Set 16 pcs. Flavors: salted caramel, blue cheese, parmesan,
								chocolate
							</p>
						</div>
						<div className="popular__card__buy border-t-2 border-t-gray-300 flex">
							<div className="popular__card__price p-3  basis-3/5 flex items-center border-r-2 border-r-gray-300">
								<p className="text-xl text-red-500 font-semibold">$110</p>
							</div>
							<div className="popular__card__cart px-2 basis-2/5 flex items-center justify-center">
								<img className="mr-2" src="images/cart.svg" alt="alt" />
								In cart
							</div>
						</div>
					</div>

					<div className="main__popular__card flex flex-col justify-between bg-white max-w-[435px] rounded-md">
						<img className="w-full" src="images/Popular3.png" alt="popularImage" />
						<div className="popular__card__text p-5">
							<p className="text-xl font-semibold">Heart</p>
							<p className="text-gray-600">
								24 pieces in a heart-shaped box. <br />
								Assorted 6 flavors
							</p>
						</div>
						<div className="popular__card__buy border-t-2 border-t-gray-300 flex">
							<div className="popular__card__price p-3  basis-3/5 flex items-center border-r-2 border-r-gray-300">
								<p className="text-xl text-red-500 font-semibold">$190</p>
							</div>
							<div className="popular__card__cart px-2 basis-2/5 flex items-center justify-center">
								<img className="mr-2" src="images/cart.svg" alt="alt" />
								In cart
							</div>
						</div>
					</div>
				</div>

				<div className="main__popular__more flex justify-center">
					<div className="more__button border border-blue-400 py-3 px-8 rounded-md">
						<p>All holiday sets</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Gift;
