import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import News from "../../elements/News/News";
import Sets from "../../elements/Sets/Sets";


class Homepage extends PureComponent {
    
	constructor(props) {
        super(props)

        this.state = {
            
        }
    }

	render() {

		return (
			<div>
				
				<div className="main__banner flex flex-col md:flex-row-reverse justify-evenly items-center">
					<div className="flex flex-col basis-full md:basis-1/4 items-center">
						<img
							className="inline mt-16 mb-10 md:mb-4 md:mt-0"
							src="/images/main_logo.png"
							alt="main_banner"
						/>
						<p className="text-2xl md:text-4xl font-semibold">True love</p>
						<p className="text-sm md:text-xl text-center text-balance">
							Macarons and other desserts made with natural ingredients and made
							with love
						</p>
					</div>

					<div className="main__banner__image my-10 md:my-0 basis-full md:basis-1/2 text-center">
						<img src="/images/MainBanner_sm.png" alt="main_banner" />
					</div>
				</div>

				<div className="main__services grid md:grid-cols-2 md:gap-3 mb-24">

					<div className="main__services__card flex flex-col items-stretch md:items-center border-b-2 border-gray-300 md:border-none md:bg-gradient-to-br from-orange-100 from-50% to-orange-200 to-50% py-4 md:p-9">
						<Link to="/ReadySets">
							<img
								className="hidden md:block mb-5 mx-auto"
								src="/images/card1.svg"
								alt="goods"
							/>
							<p className="flex justify-between text-xl font-semibold">
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
						</Link>
						<p className="hidden md:block text-balance text-center">
							Ready-made sets at a discount. You can choose a set for the
							appropriate occasion.
						</p>
					</div>

					<div className="main__services__card flex flex-col items-stretch md:items-center border-b-2 border-gray-300 md:border-none md:bg-gradient-to-bl from-pink-100 from-50% to-pink-200 to-50% py-4 md:p-9">
						<img
							className="hidden md:block mb-5 mx-auto"
							src="/images/card2.svg"
							alt="goods"
						/>
						<p className="flex justify-between text-xl font-semibold">
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
						<p className="hidden md:block text-balance text-center">
							Choose the quantity of macarons and choose the flavors
						</p>
					</div>

					<div className="main__services__card flex flex-col items-stretch md:items-center border-b-2 border-gray-300 md:border-none md:bg-gradient-to-tr from-green-100 from-50% to-green-200 to-50% py-4 md:p-9">
						<img
							className="hidden md:block mb-5 mx-auto"
							src="/images/card3.svg"
							alt="goods"
						/>
						<p className="flex justify-between text-xl font-semibold">
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
						<p className="hidden md:block text-balance text-center">
							Collect a set of macarons with a unique design.
						</p>
					</div>

					<div className="main__services__card flex flex-col items-stretch md:items-center border-b-2 border-gray-300 md:border-none md:bg-gradient-to-tl from-orange-100 from-50% to-orange-200 to-50% py-4 md:p-9">

						<Link to="/Wedding">
							<img
								className="hidden md:block mb-5 mx-auto"
								src="/images/card4.svg"
								alt="goods"
							/>
							<p className="flex justify-center text-xl font-semibold">
								Wedding proposal
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
							<p className="hidden md:block text-balance text-center">
								Delicate macaroons with different flavors to decorate your
								wedding celebration
							</p>
						</Link>

					</div>

					<div className="main__services__card flex flex-col items-stretch md:items-center border-b-2 border-gray-300 md:border-none md:bg-gradient-to-br from-teal-100 from-50% to-teal-200 to-50% py-4 md:p-9">
						<img
							className="hidden md:block mb-5 mx-auto"
							src="/images/card5.svg"
							alt="goods"
						/>
						<p className="flex justify-between text-xl font-semibold">
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
						<p className="hidden md:block text-balance text-center">
							From $3 per piece. With a unique design. A nice compliment for
							colleagues and partners
						</p>
					</div>

					<div className="main__services__card flex flex-col items-stretch md:items-center border-b-2 border-gray-300 md:border-none md:bg-gradient-to-bl from-purple-100 from-50% to-purple-200 to-50% py-4 md:p-9">

						<Link to="/Wholesale">
							<img
								className="hidden md:block mb-5 mx-auto"
								src="/images/card6.svg"
								alt="goods"
							/>
							<p className="flex justify-center text-xl font-semibold">
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
							<p className="hidden md:block text-balance text-center">
								Offer for coffee shops, cafes, hotels, etc. Look at the terms of
								cooperation and reviews.
							</p>
						</Link>

					</div>

				</div>

				<div className="main__promotions mb-24">
					<p className="text-4xl font-semibold text-center mb-12">Promotions</p>

					<div className="main__promotions__cards grid grid-cols-2 md:grid-cols-4 gap-7 justify-items-center mb-5">
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
						<div className="slider__dot--active bg-red-500 border border-red-500 w-3 h-3"></div>
						<div className="slider__dot--deactive bg-white border border-red-500 w-3 h-3"></div>
						<div className="slider__dot--deactive bg-white border border-red-500 w-3 h-3"></div>
					</div>
				</div>

				<div className="main__holidays mb-24">
					<p className="text-4xl font-semibold text-center mb-12">
						Upcoming holidays
					</p>

					<div className="main__holidays__timeline flex justify-between items-center relative">
						<div className="holidays__dotted__line absolute w-5/6 top-1/3 left-10 border-t-8 border-dotted border-gray-300"></div>

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
					<p className="text-4xl font-semibold text-center mb-12">
						Popular sets
					</p>

					<div className="main__popular__cards grid grid-cols-2 justify-items-stretch gap-y-5 gap-x-7 mb-8 sm:grid-cols-3">

						<Sets />

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
						<News count="three"/>
					</div>

					<div className="main__news__more flex justify-center">
						<Link to="/Newspage">
							<div className="more__button border border-blue-400 hover:bg-blue-400 hover:text-white py-3 px-8 rounded-md">
								<p>All news</p>
							</div>
						</Link>
					</div>
				</div>

				<div className="main__other mb-24">
					<p className="text-4xl font-semibold text-center mb-12">
						We've taken care of everything
					</p>

					<div className="main__other__articles text-balance grid grid-cols-4 justify-items-center gap-y-5 gap-x-4">
						<div className="main__other__article max-w-[270px]">
							<img className="mb-4" src="/images/Other1.png" alt="otherImage" />
							<div className="main__other__text py-5">
								<p className="font-semibold text-xl mb-3">
									The best ingredients
								</p>
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
