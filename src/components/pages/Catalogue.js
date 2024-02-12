import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class Catalogue extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {

		}
	}

	render() {
		return (
			<>
				<div className="main__breadcrumbs mt-10 mb-12">

					<div className="breadcrumbs__inner flex justify-center">

						<div className="breadcrumbs__item">
							Homepage
						</div>

						<p className="text-blue-400 mx-3">&gt;&gt;</p>

						<div className="breadcrumbs__item text-blue-400">
							Catalogue
						</div>

					</div>

				</div>

				<div className="main__catalogue__banner">

					<div className="catalogue__banner__inner flex justify-center items-center md:pl-96 sm:pl-52 mb-10 bg-no-repeat bg-center bg-contain min-h-[385px]" style={{ backgroundImage: "url('../images/catalogueBG.png')" }}>

						<div className="catalogue__banner__info">

							<div className="banner__header text-4xl font-semibold text-center">
								Macaron cakes
							</div>
							<div className="banner__text text-center mb-10 mt-4">
								The coolest, best, fresh, airy, crispy pasta. the best we can do.
							</div>
							<div className="banner__buttons flex justify-between gap-x-2">
								<Link to="/ReadySets">
									<div className="banner__button border border-blue-400 py-4 px-14 rounded-md font-semibold cursor-pointer hover:bg-blue-400 hover:text-white">
										Ready-made sets
									</div>
								</Link>
								<div className="banner__button border border-blue-400 py-4 px-14 rounded-md font-semibold cursor-pointer hover:bg-blue-400 hover:text-white">
									Build your set
								</div>
							</div>

						</div>

					</div>

				</div>

				<div className="main__catalogue__categories mb-16">
					<div className="catalogue__categories__inner flex justify-between gap-x-7">
						<div className="categories__item flex flex-col items-center justify-between basis-1/3 py-10 rounded-md bg-gradient-to-t from-orange-400 to-orange-300">
							<img className="mt-5" src="/images/catalogue3.png" alt="alt" />
							<p className="text-white font-semibold text-2xl">Tubes with condensed milk</p>
						</div>
						<div className="categories__item flex flex-col items-center justify-between basis-1/3 py-10 rounded-md bg-gradient-to-t from-pink-400 to-pink-300">
							<img src="/images/catalogue2.png" alt="alt" />
							<p className="text-white font-semibold text-2xl">Eclairs</p>
						</div>
						<div className="categories__item flex flex-col items-center justify-between basis-1/3 py-10 rounded-md bg-gradient-to-t from-orange-300 to-orange-200">
							<img src="/images/catalogue1.png" alt="alt" />
							<p className="text-white font-semibold text-2xl">Profiteroles</p>
						</div>
					</div>
				</div>

				<div className="main__catalogue__choice mb-24">

					<div className="choice__inner">

						<div className="choice__header">
							<div className="text-4xl font-semibold text-center mb-5">Want to try everything at once?</div>
							<div className="text-xl text-center mb-5">Then take a look at our combo sets</div>
						</div>

						<div className="choice__products relative">

							<img className="absolute top-1/4 left-[-20px] cursor-pointer" src="/images/leftArrowSlide.svg" alt="alt" />

							<div className="choice__products__inner flex gap-x-7">

								<div className="choice__product__card basis-1/4 flex flex-col justify-between bg-white max-w-[435px] rounded-md">
									<img className="w-full" src="/images/choice1.png" alt="alt" />
									<div className="popular__card__text p-5">
										<p className="text-xl font-semibold">
											1 macaron and 1 eclair
										</p>
										<p className="text-gray-600">
											promo set
										</p>
									</div>
									<div className="popular__card__buy border-t-2 border-t-gray-300 flex">
										<div className="popular__card__price p-3  basis-3/5 flex items-center border-r-2 border-r-gray-300">
											<p className="text-xl text-red-500 font-semibold">$30</p>
										</div>
										<div className="popular__card__cart px-2 basis-2/5 flex items-center justify-center">
											<img className="mr-2" src="/images/cart.svg" alt="alt" />
											In cart
										</div>
									</div>
								</div>

								<div className="choice__product__card basis-1/4 flex flex-col justify-between bg-white max-w-[435px] rounded-md">
									<img className="w-full" src="/images/choice2.png" alt="alt" />
									<div className="popular__card__text p-5">
										<p className="text-xl font-semibold">
											A bit of everything
										</p>
										<p className="text-gray-600">
											3 eclairs, 4 straws, 6 macarons. Flavors: Strawberry - Basil, Coconut, Blue Cheese, Parmesan
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
										<p className="text-xl font-semibold">
											Even more
										</p>
										<p className="text-gray-600">
											3 eclairs, 4 straws, 6 macarons. Flavors: Strawberry - Basil, Coconut, Blue Cheese, Parmesan
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
										<p className="text-xl font-semibold">
											Even more
										</p>
										<p className="text-gray-600">
											3 eclairs, 4 straws, 6 macarons. Flavors: Strawberry - Basil, Coconut, Blue Cheese, Parmesan
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

							<img className="absolute top-1/4 right-[-20px] cursor-pointer" src="/images/rightArrowSlide.svg" alt="alt" />

						</div>

						<div className="choice__more flex justify-center mb-20 mt-10">
							<div className="choice__more__button border border-blue-400 px-10 py-4 rounded-md font-semibold cursor-pointer hover:bg-blue-400 hover:text-white">
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