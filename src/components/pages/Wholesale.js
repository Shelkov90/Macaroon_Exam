import React, { PureComponent } from 'react'
import FormWholeSale from '../elements/Forms/FormWholeSale'

class Wholesale extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {

		}
	}

	render() {
		return (
			<>
				<div className="breadcrumbs__inner flex justify-center mt-10">
					<div className="breadcrumbs__item">Homepage</div>
					<p className="text-blue-400 mx-3">&gt;&gt;</p>
					<div className="breadcrumbs__item text-blue-400">Offers for legal entities</div>
				</div>

				<div className='wholesale_general flex justify-center mb-10 mt-12'>

					<div className='wholesale_img w-1/3 md:w-auto md:max-w-xs '>
						<img src="images/Wholesale.png" alt="alt" />
					</div>

					<div className='wholesale_info ml-10'>
						<h2 className='text-4xl text-center font-semibold mb-3'>Wholesale supply of cakes</h2>
						<p className='text-center mb-1'>Our macarons and straws <br /> are sold in the largest confectionery and coffee chains in Odessa.<br /> Join us!</p>
						<p>Our Offers:</p>
						<ul className="list-disc pl-6 text-sm">
							<li>direct deliveries from the manufacturer, always fresh products;</li>
							<li>
								assortment with a high average check and margin;</li>
							<li>free acrylic show boxes for display cases;</li>
							<li>products for tasting or price reduction for promotions;</li>
							<li>flexible terms of cooperation and deliveries.</li>
						</ul>
					</div>

				</div>

				<div className='wholesale_line'>
					<hr className="w-full h-1 mt-4" style={{ backgroundColor: '#F0BEB3' }} />
				</div>

				<div className='wholesale_offers'>

					<h2 className='text-3xl text-center font-semibold mt-10 mb-12'>What can we offer you:</h2>

					<ul className="flex flex-wrap justify-center list-none mb-12 text-sm">
						<li className="w-1/4 p-4">
							<img src="images/wholesale1.png" alt="wholesale1" className="mx-auto mb-2" />
							<p className="text-center">Corporate gifts</p>
						</li>
						<li className="w-1/4 p-4">
							<img src="images/wholesale2.png" alt="wholesale2" className="mx-auto mb-2" />
							<p className="text-center">Cooperation with online stores</p>
						</li>
						<li className="w-1/4 p-4">
							<img src="images/wholesale3.png" alt="wholesale3" className="mx-auto mb-2" />
							<p className="text-center">Cooperation with cafes and restaurants</p>
						</li>
						<li className="w-1/4 p-4">
							<img src="images/wholesale4.png" alt="wholesale4" className="mx-auto mb-2" />
							<p className="text-center">Cooperation with coffee shops</p>
						</li>
						<li className="w-1/4 p-4">
							<img src="images/wholesale5.png" alt="wholesale5" className="mx-auto mb-2" />
							<p className="text-center">Cooperation with hotels</p>
						</li>
						<li className="w-1/4 p-4">
							<img src="images/wholesale6.png" alt="wholesale6" className="mx-auto mb-2" />
							<p className="text-center">For Retail</p>
						</li>
						<li className="w-1/4 p-4">
							<img src="images/wholesale7.png" alt="wholesale7" className="mx-auto mb-2" />
							<p className="text-center">Candy bars for events</p>
						</li>
						<li className="w-1/4 p-4">
							<img src="images/wholesale8.png" alt="wholesale8" className="mx-auto mb-2" />
							<p className="text-center">And for other areas of business</p>
						</li>

					</ul>
				</div>

				<FormWholeSale />

				<div className='wholesale_recommendations mb-12'>

					<h2 className='text-3xl text-center font-semibold mt-10 mb-12'>We are recommended</h2>

					<div className='wholesale_reviews flex justify-between h-auto mb-14'>

						<div className='w-1/3'>

							<div className='review bg-white  rounded-md border-2 '>
								<div className='p-4'>
									<h4 className='text-lg font-semibold mb-1'>Very good pies and straws, I recommend</h4>
									<p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
								</div>
								<hr />
								<div className='p-4 text-right'>
									<div className="flex items-center justify-end">
										<div>
											<p className='text-sm font-semibold'>Will Smith</p>
											<p className='text-sm font-semibold'>WB Production</p>
										</div>
										<img src="images/review.png" alt="review" className="ml-4" />
									</div>
								</div>
							</div>

							<div className='review bg-white mt-4 rounded-md border-2'>
								<div className='p-4'>
									<h4 className='text-lg font-semibold mb-1'>Very good pies and straws, I recommend</h4>
									<p className='text-base'>While only part of the overall picture,the rapidly developing third world countries, regardless of their level, should be listed as key contenders.</p>
								</div>
								<hr />
								<div className='p-4 text-right'>
									<div className="flex items-center justify-end">
										<div>
											<p className='text-sm font-semibold'>J.K.Rowling</p>
											<p className='text-sm font-semibold'>HP Production</p>
										</div>
										<img src="images/review.png" alt="review" className="ml-4" />
									</div>
								</div>
							</div>

						</div>

						<div className='w-1/3'>
							<div className='review bg-white ml-4 rounded-md border-2'>
								<div className='p-4'>
									<h4 className='text-lg font-semibold mb-1'>Very good pies and straws, I recommend</h4>
									<p className='text-base'>Banal but irrefutable conclusions, as well as representatives of modern social reserves, are associatively distributed across industries. The opposite point of view implies that many famous personalities may be made public.</p>
								</div>
								<hr />
								<div className='p-4 text-right'>
									<div className="flex items-center justify-end ">
										<div>
											<p className='text-sm font-semibold'>Homer Simpson</p>
											<p className='text-sm font-semibold'>Spriengfield Corp.</p>
										</div>
										<img src="images/review.png" alt="review" className="ml-4" />
									</div>
								</div>
							</div>
						</div>

						<div className='w-1/3'>
							<div className='review bg-white ml-4 rounded-md border-2'>
								<div className='p-4'>
									<h4 className='text-lg font-semibold mb-1'>Very good pies and straws, I recommend</h4>
									<p className='text-base'>Key features of the project structure are ambiguous and will be cited as contenders for the role of key factors. And also clear signs of the victory of institutionalization will be blocked within their own rational limitations. Elements of the political process are functionally separated into independent elements. In our quest to improve the user experience, we miss that representatives of modern social reserves are made public.</p>
								</div>
								<hr />
								<div className='p-4 text-right'>
									<div className="flex items-center justify-end ">
										<div>
											<p className='text-sm font-semibold'>Bart Simpson</p>
											<p className='text-sm font-semibold'>Spriengfield Corp.</p>
										</div>
										<img src="images/review.png" alt="review" className="ml-4" />
									</div>
								</div>
							</div>
						</div>

					</div>

					<div className='wholesale_brands flex justify-between items-center mb-12'>

						<div>
							<img src="images/reviewlogo1.png" alt="reviewlogo1" />
						</div>

						<div>
							<img src="images/reviewlogo2.png" alt="reviewlogo2" />
						</div>

						<div>
							<img src="images/reviewlogo4.png" alt="reviewlogo4" />
						</div>

						<div>
							<img src="images/reviewlogo3.png" alt="reviewlogo3" />
						</div>

						<div>
							<img src="images/reviewlogo5.png" alt="reviewlogo5" />
						</div>

						<div>
							<img src="images/reviewlogo6.png" alt="reviewlogo6" />
						</div>

					</div>

				</div>

			</>
		)
	}
}

export default Wholesale