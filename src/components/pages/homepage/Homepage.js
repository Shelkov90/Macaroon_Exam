import React, { PureComponent } from "react";

class Homepage extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div>
				<div className="main__banner flex justify-center items-center">
					<div className="main__banner__image basis-1/2 text-center">
						<img
							className="size-96"
							src="/images/main__banner.png"
							alt="main_banner"
						/>
					</div>

					<div className="content basis-1/4 flex flex-col items-center">
						<img
							className="inline mb-4"
							src="/images/main_logo.png"
							alt="main_banner"
						/>
						<p className="text-4xl font-semibold">True love</p>
						<p className="text-center">
							Macarons and other desserts made <br />
							with natural ingredients and made with love
						</p>
					</div>
				</div>

				<div className="main__services grid grid-cols-2 gap-3 mb-24">
					<div className="main__services__card bg-gradient-to-br from-orange-100 from-50% to-orange-200 to-50% p-9 flex flex-col items-center">
						<img className="mb-5" src="/images/card1.svg" alt="goods" />
						<p className="flex text-xl font-semibold">
							Ready-made sets
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="ml-3 w-7 h-7"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
								/>
							</svg>
						</p>
						<p className="text-balance text-center">
							Ready-made sets at a discount. You can choose a set for the
							appropriate occasion.
						</p>
					</div>

					<div className="main__services__card bg-gradient-to-bl from-pink-100 from-50% to-pink-200 to-50% p-9 flex flex-col items-center">
						<img className="mb-5" src="/images/card2.svg" alt="goods" />
						<p className="flex text-xl font-semibold">
							Build your set
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="ml-3 w-7 h-7"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
								/>
							</svg>
						</p>
						<p className="text-balance text-center">
							Choose the quantity of macarons and choose the flavors
						</p>
					</div>

					<div className="main__services__card bg-gradient-to-tr from-green-100 from-50% to-green-200 to-50% p-9 flex flex-col items-center">
						<img className="mb-5" src="/images/card3.svg" alt="goods" />
						<p className="flex text-xl font-semibold">
							Custom printed set
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="ml-3 w-7 h-7"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
								/>
							</svg>
						</p>
						<p className="text-balance text-center">
							Collect a set of macarons with a unique design.
						</p>
					</div>

					<div className="main__services__card bg-gradient-to-tl from-orange-100 from-50% to-orange-200 to-50% p-9 flex flex-col items-center">
						<img className="mb-5" src="/images/card4.svg" alt="goods" />
						<p className="flex text-xl font-semibold">
							Wedding proposals
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="ml-3 w-7 h-7"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
								/>
							</svg>
						</p>
						<p className="text-balance text-center">
							Delicate macaroons with different flavors to decorate your wedding
							celebration
						</p>
					</div>

					<div className="main__services__card bg-gradient-to-br from-teal-100 from-50% to-teal-200 to-50% p-9 flex flex-col items-center">
						<img className="mb-5" src="/images/card5.svg" alt="goods" />
						<p className="flex text-xl font-semibold">
							Corporate gifts
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="ml-3 w-7 h-7"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
								/>
							</svg>
						</p>
						<p className="text-balance text-center">
							From $3 per piece. With a unique design. A nice compliment for
							colleagues and partners
						</p>
					</div>

					<div className="main__services__card bg-gradient-to-bl from-purple-100 from-50% to-purple-200 to-50% p-9 flex flex-col items-center">
						<img className="mb-5" src="/images/card6.svg" alt="goods" />
						<p className="flex text-xl font-semibold">
							Wholesale supply
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="ml-3 w-7 h-7"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
								/>
							</svg>
						</p>
						<p className="text-balance text-center">
							Offer for coffee shops, cafes, hotels, etc. Look at the terms of
							cooperation and reviews.
						</p>
					</div>
				</div>

				<div className="main__promotions mb-24">
					<p className="text-4xl font-semibold text-center mb-12">Promotions</p>

					<div className="main__promotions__cards grid grid-cols-4 gap-7 justify-items-center mb-5">
						<div className="main__promotions__card max-w-[270px] relative">
							<p className="main__promotions__card--label absolute bg-blue-300 px-2 text-white top-4">
								FREE DELIVERY
							</p>
							<img src="/images/promotions1.png" alt="promotions" />
							<p className="main__promotions__card--description absolute w-full h-12 bottom-0 bg-blue-300 px-1 text-white">
								Free delivery in Odesa.
							</p>
						</div>

						<div className="main__promotions__card max-w-[270px] relative">
							<p className="main__promotions__card--label absolute bg-red-500 px-2 text-white top-4">
								NEW
							</p>
							<img src="/images/promotions2.png" alt="promotions" />
							<p className="main__promotions__card--description absolute w-full h-12 bottom-0 bg-red-500 px-1 text-white">
								Chocolate potato cake based on sponge cake!
							</p>
						</div>

						<div className="main__promotions__card max-w-[270px] relative">
							<p className="main__promotions__card--label absolute bg-red-500 px-2 text-white top-4">
								NEW
							</p>
							<img src="/images/promotions3.png" alt="promotions" />
							<p className="main__promotions__card--description absolute w-full h-12 bottom-0 bg-red-500 px-1 text-white">
								Delicious sweets based on macaroons and cream
							</p>
						</div>

						<div className="main__promotions__card max-w-[270px] relative">
							<p className="main__promotions__card--label absolute bg-red-500 px-2 text-white top-4">
								NEW
							</p>
							<img src="/images/promotions4.png" alt="promotions" />
							<p className="main__promotions__card--description absolute w-full h-12 bottom-0 bg-red-500 px-1 text-white">
								Caramel on a stick made from natural ingredients
							</p>
						</div>
					</div>

					<div className="main__promotions__cards--sliderDots flex gap-3 justify-end">
						<div className="bg-white border border-red-500 w-3 h-3"></div>
						<div className="bg-white border border-red-500 w-3 h-3"></div>
						<div className="bg-white border border-red-500 w-3 h-3"></div>
					</div>
				</div>

				<div className="main__holidays mb-24">
					<p className="text-4xl font-semibold text-center mb-12">
						Upcoming holidays
					</p>

					<div className="main__holidays__timeline flex justify-between items-center bg-no-repeat bg-center bg-contain">
						<div className="timeline__holiday relative">
							<img className="size-28" src="/images/holidays1.svg" alt="alt" />
							<p>Soon</p>
							<p>Best Friend's Birthday</p>
						</div>

						<div className="timeline__holiday relative">
							<img className="size-28" src="/images/holidays3.svg" alt="alt" />
							<p>Soon</p>
							<p>Best Friend's Birthday</p>
						</div>

						<div className="timeline__holiday relative">
							<img className="size-28" src="/images/holidays4.svg" alt="alt" />
							<p>Soon</p>
							<p>Best Friend's Birthday</p>
						</div>

						<div className="timeline__holiday relative">
							<img className="size-28" src="/images/holidays5.svg" alt="alt" />
							<p>Soon</p>
							<p>Best Friend's Birthday</p>
						</div>

						<div className="timeline__holiday relative">
							<img className="size-28" src="/images/holidays6.svg" alt="alt" />
							<p>Soon</p>
							<p>Best Friend's Birthday</p>
						</div>

						<div className="timeline__holiday relative">
							<img className="size-28" src="/images/holidays7.svg" alt="alt" />
							<p>Soon</p>
							<p>Best Friend's Birthday</p>
						</div>
					</div>
				</div>

				<div className="main__popular mb-24">
					<p className="text-4xl font-semibold text-center mb-12">Popular sets</p>

					<div className="main__popular__cards grid grid-cols-2 justify-items-stretch gap-y-5 gap-x-7 mb-8 sm:grid-cols-3">
						<div className="main__popular__card flex flex-col justify-between bg-white max-w-[435px] rounded-md">
							<img
								className="w-full"
								src="/images/Popular1.png"
								alt="popularImage"
							/>
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
									<img className="mr-2" src="/images/cart.svg" alt="alt" />
									In cart
								</div>
							</div>
						</div>

						<div className="main__popular__card flex flex-col justify-between bg-white max-w-[435px] rounded-md">
							<img
								className="w-full"
								src="/images/Popular2.png"
								alt="popularImage"
							/>
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
									<img className="mr-2" src="/images/cart.svg" alt="alt" />
									In cart
								</div>
							</div>
						</div>

						<div className="main__popular__card flex flex-col justify-between bg-white max-w-[435px] rounded-md">
							<img
								className="w-full"
								src="/images/Popular3.png"
								alt="popularImage"
							/>
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
									<img className="mr-2" src="/images/cart.svg" alt="alt" />
									In cart
								</div>
							</div>
						</div>

						<div className="main__popular__card flex flex-col justify-between bg-white max-w-[435px] rounded-md">
							<img
								className="w-full"
								src="/images/Popular4.png"
								alt="popularImage"
							/>
							<div className="popular__card__text p-5">
								<p className="text-xl font-semibold">Set for 9</p>
								<p className="text-gray-600">
									Set of 9 pieces in a square box. Flavors: chocolate,
									pistachio, cherry
								</p>
							</div>
							<div className="popular__card__buy border-t-2 border-t-gray-300 flex">
								<div className="popular__card__price p-3  basis-3/5 flex items-center border-r-2 border-r-gray-300">
									<p className="text-xl text-red-500 font-semibold">$70</p>
								</div>
								<div className="popular__card__cart px-2 basis-2/5 flex items-center justify-center">
									<img className="mr-2" src="/images/cart.svg" alt="alt" />
									In cart
								</div>
							</div>
						</div>

						<div className="main__popular__card flex flex-col justify-between bg-white max-w-[435px] rounded-md">
							<img
								className="w-full"
								src="/images/Popular5.png"
								alt="popularImage"
							/>
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
									<img className="mr-2" src="/images/cart.svg" alt="alt" />
									In cart
								</div>
							</div>
						</div>

						<div className="main__popular__card flex flex-col justify-between bg-white max-w-[435px] rounded-md">
							<img
								className="w-full"
								src="/images/Popular3.png"
								alt="popularImage"
							/>
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
									<img className="mr-2" src="/images/cart.svg" alt="alt" />
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

				<div className="main__news mb-24">
					<p className="text-4xl font-semibold text-center mb-12">News</p>

					<div className="main__news__articles grid grid-cols-3 justify-items-center gap-y-5 gap-x-2 mb-8">
						<div className="main__news__article bg-white max-w-[370px]">
							<img src="/images/News1.png" alt="newsImage" />
							<div className="news__article__inner p-5">
								<p className="news__article__date mb-2 text-sm text-gray-400">
									25/02/2023
								</p>
								<p className="news__article__header mb-2 font-semibold text-xl">
									The main holiday of spring is coming soon!
								</p>
								<p className="news__article__text">
									Girls love it when it’s tasty, beautiful and natural. See more
									sets with handmade desserts
								</p>
							</div>
						</div>

						<div className="main__news__article bg-white max-w-[370px]">
							<img src="/images/News2.png" alt="newsImage" />
							<div className="news__article__inner p-5">
								<p className="news__article__date mb-2 text-sm text-gray-400">
									17/02/2023
								</p>
								<p className="news__article__header mb-2 font-semibold text-xl">
									Competition for holidays!
								</p>
								<p className="news__article__text">
									Defender of the Holidays is coming soon! Delight your sweet
									tooth with delicious sets from MacaronShop
								</p>
							</div>
						</div>

						<div className="main__news__article bg-white max-w-[370px]">
							<img src="/images/News3.png" alt="newsImage" />
							<div className="news__article__inner p-5">
								<p className="news__article__date mb-2 text-sm text-gray-400">
									11/02/2023
								</p>
								<p className="news__article__header mb-2 font-semibold text-xl">
									Express competition for Valentine's Day
								</p>
								<p className="news__article__text">
									Gift in 2 days Valentine's Day is just around the corner. Tell
									us about your feelings with a sweet Valentine's card from
									MacaronShop
								</p>
							</div>
						</div>
					</div>

					<div className="main__news__more flex justify-center">
						<div className="more__button border border-blue-400 py-3 px-8 rounded-md">
							<p>All news</p>
						</div>
					</div>
				</div>

				<div className="main__other mb-24">
					<p className="text-4xl font-semibold text-center mb-12">
						We've taken care of everything
					</p>

					<div className="main__other__articles grid grid-cols-4 justify-items-center gap-y-5 gap-x-4">
						<div className="main__other__article max-w-[270px]">
							<img className="mb-4" src="/images/Other1.png" alt="otherImage" />
							<div className="main__other__text py-5">
								<p className="font-semibold text-xl mb-3">The best ingredients</p>
								<p className="text-sm text-gray-400">
									Something about super quality, the best chefs, freshness, etc.
								</p>
							</div>
						</div>
						<div className="main__other__article max-w-[270px]">
							<img className="mb-4" src="/images/Other2.png" alt="otherImage" />
							<div className="main__other__text py-5">
								<p className="font-semibold text-xl mb-3">Package</p>
								<p className="text-sm text-gray-400">
									Something about super boxes and bows and blah blah blah
								</p>
							</div>
						</div>
						<div className="main__other__article max-w-[270px]">
							<img className="mb-4" src="/images/Other3.png" alt="otherImage" />
							<div className="main__other__text py-5">
								<p className="font-semibold text-xl mb-3">
									Receipt on the day of order
								</p>
								<p className="text-sm text-gray-400">
									Same day of order delivery by courier or pickup
								</p>
							</div>
						</div>
						<div className="main__other__article max-w-[270px]">
							<img className="mb-4" src="/images/Other4.png" alt="otherImage" />
							<div className="main__other__text py-5">
								<p className="font-semibold text-xl mb-3">Anonymous delivery</p>
								<p className="text-sm text-gray-400">
									We can present your order as an anonymous gift
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Homepage;
