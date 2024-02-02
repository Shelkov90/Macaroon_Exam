import React, { PureComponent } from 'react'

class Catalogue extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {

		}
	}

	render() {
		return (
			<>
				<div class="main__breadcrumbs mt-10 mb-12">

					<div class="breadcrumbs__inner flex justify-center">

						<div class="breadcrumbs__item">
							Homepage
						</div>

						<p class="text-blue-400 mx-3"></p>

						<div class="breadcrumbs__item text-blue-400">
							Catalogue
						</div>

					</div>

				</div>

				<div class="main__catalogue__banner">

					<div class="catalogue__banner__inner flex justify-center items-center md:pl-96 sm:pl-52 mb-10 bg-no-repeat bg-center bg-contain min-h-[385px]">

						<div class="catalogue__banner__info">

							<div class="banner__header text-4xl font-semibold text-center">
								Macaron cakes
							</div>
							<div class="banner__text text-center mb-10 mt-4">
								The coolest, best, fresh, airy, crispy pasta. the best we can do.
							</div>
							<div class="banner__buttons flex justify-between gap-x-2">
								<div class="banner__button border border-blue-400 py-4 px-14 rounded-md font-semibold cursor-pointer hover:bg-blue-400 hover:text-white">
									Ready-made sets
								</div>
								<div class="banner__button border border-blue-400 py-4 px-14 rounded-md font-semibold cursor-pointer hover:bg-blue-400 hover:text-white">
									Build your set
								</div>
							</div>

						</div>

					</div>

				</div>

				<div class="main__catalogue__categories mb-16">
					<div class="catalogue__categories__inner flex justify-between gap-x-7">
						<div class="categories__item flex flex-col items-center justify-between basis-1/3 py-10 rounded-md bg-gradient-to-t from-orange-400 to-orange-300">
							<img class="mt-5" src="images/catalogue3.png" alt="alt" />
							<p class="text-white font-semibold text-2xl">Tubes with condensed milk</p>
						</div>
						<div class="categories__item flex flex-col items-center justify-between basis-1/3 py-10 rounded-md bg-gradient-to-t from-pink-400 to-pink-300">
							<img src="images/catalogue2.png" alt="alt" />
							<p class="text-white font-semibold text-2xl">Eclairs</p>
						</div>
						<div class="categories__item flex flex-col items-center justify-between basis-1/3 py-10 rounded-md bg-gradient-to-t from-orange-300 to-orange-200">
							<img src="images/catalogue1.png" alt="alt" />
							<p class="text-white font-semibold text-2xl">Profiteroles</p>
						</div>
					</div>
				</div>

				<div class="main__catalogue__choice mb-24">

					<div class="choice__inner">

						<div class="choice__header">
							<div class="text-4xl font-semibold text-center mb-5">Want to try everything at once?</div>
							<div class="text-xl text-center mb-5">Then take a look at our combo sets</div>
						</div>

						<div class="choice__products relative">

							<img class="absolute top-1/4 left-[-20px] cursor-pointer" src="images/leftArrowSlide.svg" alt="alt" />

							<div class="choice__products__inner flex gap-x-7">

								<div class="choice__product__card basis-1/4 flex flex-col justify-between bg-white max-w-[435px] rounded-md">
									<img class="w-full" src="images/choice1.png" alt="alt" />
									<div class="popular__card__text p-5">
										<p class="text-xl font-semibold">
											1 macaron and 1 eclair
										</p>
										<p class="text-gray-600">
											promo set
										</p>
									</div>
									<div class="popular__card__buy border-t-2 border-t-gray-300 flex">
										<div class="popular__card__price p-3  basis-3/5 flex items-center border-r-2 border-r-gray-300">
											<p class="text-xl text-red-500 font-semibold">$30</p>
										</div>
										<div class="popular__card__cart px-2 basis-2/5 flex items-center justify-center">
											<img class="mr-2" src="images/cart.svg" alt="alt" />
											In cart
										</div>
									</div>
								</div>

								<div class="choice__product__card basis-1/4 flex flex-col justify-between bg-white max-w-[435px] rounded-md">
									<img class="w-full" src="images/choice2.png" alt="alt" />
									<div class="popular__card__text p-5">
										<p class="text-xl font-semibold">
											A bit of everything
										</p>
										<p class="text-gray-600">
											3 eclairs, 4 straws, 6 macarons. Flavors: Strawberry - Basil, Coconut, Blue Cheese, Parmesan
										</p>
									</div>
									<div class="popular__card__buy border-t-2 border-t-gray-300 flex">
										<div class="popular__card__price p-3  basis-3/5 flex items-center border-r-2 border-r-gray-300">
											<p class="text-xl text-red-500 font-semibold">$80</p>
										</div>
										<div class="popular__card__cart px-2 basis-2/5 flex items-center justify-center">
											<img class="mr-2" src="images/cart.svg" alt="alt" />
											In cart
										</div>
									</div>
								</div>

								<div class="choice__product__card basis-1/4 flex flex-col justify-between bg-white max-w-[435px] rounded-md">
									<img class="w-full" src="images/choice3.png" alt="alt" />
									<div class="popular__card__text p-5">
										<p class="text-xl font-semibold">
											Even more
										</p>
										<p class="text-gray-600">
											3 eclairs, 4 straws, 6 macarons. Flavors: Strawberry - Basil, Coconut, Blue Cheese, Parmesan
										</p>
									</div>
									<div class="popular__card__buy border-t-2 border-t-gray-300 flex">
										<div class="popular__card__price p-3  basis-3/5 flex items-center border-r-2 border-r-gray-300">
											<p class="text-xl text-red-500 font-semibold">$130</p>
										</div>
										<div class="popular__card__cart px-2 basis-2/5 flex items-center justify-center">
											<img class="mr-2" src="images/cart.svg" alt="alt" />
											In cart
										</div>
									</div>
								</div>

								<div class="choice__product__card basis-1/4 flex flex-col justify-between bg-white max-w-[435px] rounded-md">
									<img class="w-full" src="images/choice4.png" alt="alt" />
									<div class="popular__card__text p-5">
										<p class="text-xl font-semibold">
											Even more
										</p>
										<p class="text-gray-600">
											3 eclairs, 4 straws, 6 macarons. Flavors: Strawberry - Basil, Coconut, Blue Cheese, Parmesan
										</p>
									</div>
									<div class="popular__card__buy border-t-2 border-t-gray-300 flex">
										<div class="popular__card__price p-3  basis-3/5 flex items-center border-r-2 border-r-gray-300">
											<p class="text-xl text-red-500 font-semibold">$130</p>
										</div>
										<div class="popular__card__cart px-2 basis-2/5 flex items-center justify-center">
											<img class="mr-2" src="images/cart.svg" alt="alt" />
											In cart
										</div>
									</div>
								</div>

							</div>

							<img class="absolute top-1/4 right-[-20px] cursor-pointer" src="images/rightArrowSlide.svg" alt="alt" />

						</div>

						<div class="choice__more flex justify-center mb-20 mt-10">
							<div class="choice__more__button border border-blue-400 px-10 py-4 rounded-md font-semibold cursor-pointer hover:bg-blue-400 hover:text-white">
								All ready-made sets
							</div>
						</div>

					</div>

				</div>
			</>
		)
	}
}

export default Catalogue