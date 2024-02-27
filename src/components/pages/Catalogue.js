import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import Sweet from '../elements/Sweet/Sweet'


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

						<Sweet />

					</div>

				</div>
			</>
		)
	}
}

export default Catalogue