import React, { PureComponent } from 'react'
import News from '../../elements/News/News'

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

						<News count="full" />

					</div>

				</div>
			</>
		)
	}
}

export default Newspage