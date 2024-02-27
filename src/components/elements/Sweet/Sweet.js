import React, { PureComponent } from "react";

class Sweet extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			cart: [],
			isModalOpen: false,
		};
	}

	render() {
		return (
			<>
				{/* <div className="set__breadcrumbs mt-10 mb-12">
					<div className="breadcrumbs__inner flex justify-center text-gray-400">
						<div className="breadcrumbs__item">Homepage</div>

						<p className="text-blue-400 mx-3">&gt;&gt;</p>

						<div className="breadcrumbs__item text-blue-400">Sweet Sets</div>
					</div>
				</div> */}

				<div className="set_choice mb-24 mt-24">
					<div className="choice_inner">
						<div className="choice_header">
							<div className="text-4xl font-semibold text-center mb-5">
								Want to try everything at once?
							</div>
							<div className="text-xl text-center mb-12">
								Then take a look at our combo sets
							</div>
						</div>

						<div className="choice__products__inner flex gap-x-7">
							<div className="choice__product__card basis-1/4 flex flex-col justify-between bg-white max-w-[435px] rounded-md">
								<img className="w-full" src="/images/choice1.png" alt="alt" />
								<div className="popular__card__text p-5">
									<p className="text-xl font-semibold">
										1 macaron and 1 eclair
									</p>
									<p className="text-gray-600">promo set</p>
								</div>
								<div className="popular__card__buy border-t-2 border-t-gray-300 flex">
									<div className="popular__card__price p-3  basis-3/5 flex items-center border-r-2 border-r-gray-300">
										<p className="text-xl text-red-500 font-semibold">$30</p>
									</div>
									<div className="popular__card__cart px-2 basis-2/5 flex items-center justify-center"
											>
										<img className="mr-2" src="/images/cart.svg" alt="alt" />
										In cart
									</div>
								</div>
							</div>

							<div className="choice__product__card basis-1/4 flex flex-col justify-between bg-white max-w-[435px] rounded-md">
								<img className="w-full" src="/images/choice2.png" alt="alt" />
								<div className="popular__card__text p-5">
									<p className="text-xl font-semibold">A bit of everything</p>
									<p className="text-gray-600">
										3 eclairs, 4 straws, 6 macarons. Flavors: Strawberry -
										Basil, Coconut, Blue Cheese, Parmesan
									</p>
								</div>
								<div className="popular__card__buy border-t-2 border-t-gray-300 flex">
									<div className="popular__card__price p-3  basis-3/5 flex items-center border-r-2 border-r-gray-300">
										<p className="text-xl text-red-500 font-semibold">$80</p>
									</div>
									<div className="popular__card__cart px-2 basis-2/5 flex items-center justify-center">
										<img className="mr-2" src="/images/cart.svg" alt="alt" />
										In cart
									</div>
								</div>
							</div>

							<div className="choice__product__card basis-1/4 flex flex-col justify-between bg-white max-w-[435px] rounded-md">
								<img className="w-full" src="/images/choice3.png" alt="alt" />
								<div className="popular__card__text p-5">
									<p className="text-xl font-semibold">Even more</p>
									<p className="text-gray-600">
										3 eclairs, 4 straws, 6 macarons. Flavors: Strawberry -
										Basil, Coconut, Blue Cheese, Parmesan
									</p>
								</div>
								<div className="popular__card__buy border-t-2 border-t-gray-300 flex">
									<div className="popular__card__price p-3  basis-3/5 flex items-center border-r-2 border-r-gray-300">
										<p className="text-xl text-red-500 font-semibold">$130</p>
									</div>
									<div className="popular__card__cart px-2 basis-2/5 flex items-center justify-center">
										<img className="mr-2" src="/images/cart.svg" alt="alt" />
										In cart
									</div>
								</div>
							</div>

							<div className="choice__product__card basis-1/4 flex flex-col justify-between bg-white max-w-[435px] rounded-md">
								<img className="w-full" src="/images/choice4.png" alt="alt" />
								<div className="popular__card__text p-5">
									<p className="text-xl font-semibold">Even more</p>
									<p className="text-gray-600">
										3 eclairs, 4 straws, 6 macarons. Flavors: Strawberry -
										Basil, Coconut, Blue Cheese, Parmesan
									</p>
								</div>
								<div className="popular__card__buy border-t-2 border-t-gray-300 flex">
									<div className="popular__card__price p-3  basis-3/5 flex items-center border-r-2 border-r-gray-300">
										<p className="text-xl text-red-500 font-semibold">$130</p>
									</div>
									<div className="popular__card__cart px-2 basis-2/5 flex items-center justify-center">
										<img className="mr-2" src="/images/cart.svg" alt="alt" />
										In cart
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="choice__more flex justify-center mb-20 mt-10">
						<div className="choice__more__button border border-blue-400 px-10 py-4 rounded-md font-semibold cursor-pointer hover:bg-blue-400 hover:text-white">
							All ready-made sets
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Sweet;
