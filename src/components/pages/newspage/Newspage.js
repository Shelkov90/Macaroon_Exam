import React, { PureComponent } from 'react'

class Newspage extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			
		}
	}

	render() {
		return (
			<>
				<div className="main__breadcrumbs mt-10 mb-5">

					<div className="breadcrumbs__inner flex justify-center">

						<div className="breadcrumbs__item">
							Homepage
						</div>

						<p className="text-blue-400 mx-3">&gt;&gt;</p>

						<div className="breadcrumbs__item text-blue-400">
							Newspage
						</div>

					</div>

				</div>

				<div className="text-4xl font-semibold text-center mb-12">News</div>

				<div className="main__tags mb-7">

					<div className="tags__inner flex">

						<div className="tags__item bg-orange-100 rounded-2xl py-1 px-3 mx-1 text-sm text-gray-600">All news
						</div>
						<div className="tags__item bg-orange-100 rounded-2xl py-1 px-3 mx-1 text-sm text-gray-600">Assortment
							updates</div>
						<div className="tags__item bg-orange-100 rounded-2xl py-1 px-3 mx-1 text-sm text-gray-600">Promotions
						</div>
						<div className="tags__item bg-orange-100 rounded-2xl py-1 px-3 mx-1 text-sm text-gray-600">Competitions
						</div>
						<div className="tags__item bg-orange-100 rounded-2xl py-1 px-3 mx-1 text-sm text-gray-600">gift for 14th
							February</div>
						<div className="tags__item bg-orange-100 rounded-2xl py-1 px-3 mx-1 text-sm text-gray-600">Spring</div>

					</div>

				</div>

				<div className="main__news mb-24">

					<div className="news__inner grid grid-cols-3 gap-7 justify-between">

						<div className="news__article bg-white rounded-md mb-7">
							<img className="w-full" src="images/News4.png" alt="newsAlt"/>
							<div className="article__inner p-5 min-h-60">
								<p className="article__date text-sm text-gray-400">
									05.04.2023
								</p>
								<p className="article__header text-xl font-semibold my-2">
									Easter holiday is ahead
								</p>
								<p className="article__text text-sm">
									Delight your loved ones with delicious Easter pasta sets. Our new collection of gifts is
									already on sale.
								</p>
							</div>
						</div>

						<div className="news__article bg-white rounded-md mb-7">
							<img className="w-full" src="images/News5.png" alt="newsAlt"/>
							<div className="article__inner p-5 min-h-60">
								<p className="article__date text-sm text-gray-400">
									30.03.2023
								</p>
								<p className="article__header text-xl font-semibold my-2">
									Appetizing sets with NEW flavors
								</p>
								<p className="article__text text-sm">
									We are ready to present you a collection of new mind-blowing pasta flavors
								</p>
							</div>
						</div>

						<div className="news__article bg-white rounded-md mb-7">
							<img className="w-full" src="images/News6.png" alt="newsAlt"/>
							<div className="article__inner p-5 min-h-60">
								<p className="article__date text-sm text-gray-400">
									23.03.2023
								</p>
								<p className="article__header text-xl font-semibold my-2">
									We bake fluffy and soft muffins
								</p>
								<p className="article__text text-sm">
									Their velvety structure and impressive weight will impress absolutely anyone!
								</p>
							</div>
						</div>

						<div className="news__article bg-white rounded-md mb-7">
							<img className="w-full" src="images/News7.png" alt="newsAlt"/>
							<div className="article__inner p-5 min-h-60">
								<p className="article__date text-sm text-gray-400">
									25.02.2023
								</p>
								<p className="article__header text-xl font-semibold my-2">
									Is there a wedding ahead?
								</p>
								<p className="article__text text-sm">
									We offer several original and simple design ideas. Guests will definitely remember
								</p>
							</div>
						</div>

						<div className="news__article bg-white rounded-md mb-7">
							<img className="w-full" src="images/News8.png" alt="newsAlt"/>
							<div className="article__inner p-5 min-h-60">
								<p className="article__date text-sm text-gray-400">
									26.02.2023
								</p>
								<p className="article__header text-xl font-semibold my-2">
									Gifts for women
								</p>
								<p className="article__text text-sm">
									The day is just around the corner! Delight your sweet tooth with delicious sets from MacaronShop
								</p>
							</div>
						</div>

						<div className="news__article bg-white rounded-md mb-7">
							<img className="w-full" src="images/News5.png" alt="newsAlt"/>
							<div className="article__inner p-5 min-h-60">
								<p className="article__date text-sm text-gray-400">
									25.02.2023
								</p>
								<p className="article__header text-xl font-semibold my-2">
									The main holiday of spring is coming soon!
								</p>
								<p className="article__text text-sm">
									Girls love it when it’s tasty, beautiful and natural. See more sets with handmade desserts
								</p>
							</div>
						</div>

						<div className="news__article bg-white rounded-md mb-7">
							<img className="w-full" src="images/News6.png" alt="newsAlt"/>
							<div className="article__inner p-5 min-h-60">
								<p className="article__date text-sm text-gray-400">
									25.02.2023
								</p>
								<p className="article__header text-xl font-semibold my-2">
									The main holiday of spring is coming soon!
								</p>
								<p className="article__text text-sm">
									Girls love it when it’s tasty, beautiful and natural. See more sets with handmade desserts
								</p>
							</div>
						</div>

						<div className="news__article bg-white rounded-md mb-7">
							<img className="w-full" src="images/News2.png" alt="newsAlt"/>
							<div className="article__inner p-5 min-h-60">
								<p className="article__date text-sm text-gray-400">
									05.04.2023
								</p>
								<p className="article__header text-xl font-semibold my-2">
									Easter holiday is ahead
								</p>
								<p className="article__text text-sm">
									Delight your loved ones with delicious Easter pasta sets. Our new collection of gifts is
									already on sale.
								</p>
							</div>
						</div>

						<div className="news__article bg-white rounded-md mb-7">
							<img className="w-full" src="images/News3.png" alt="newsAlt"/>
							<div className="article__inner p-5 min-h-60">
								<p className="article__date text-sm text-gray-400">
									11.02.2023
								</p>
								<p className="article__header text-xl font-semibold my-2">
									Express competition for Valentine's Day
								</p>
								<p className="article__text text-sm">
									Gift in 2 days Valentine's Day is just around the corner. Tell us about your feelings with a sweet Valentine's card from MacaronShop
								</p>
							</div>
						</div>

					</div>

				</div>
			</>
		)
	}
}

export default Newspage