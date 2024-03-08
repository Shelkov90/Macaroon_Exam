import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
class Footer extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {

		}
	}

	render() {
		return (
			<footer className="bg-gray-200 pt-8 pb-14 sm:py-16">

				<div className="footer px-4 sm:w-5/6 flex flex-col sm:flex-row sm:justify-between gap-x-2 mx-auto max-w-[1170px]">

					<div className="footer__about sm:basis-1/2 md:basis-2/6">

						<div className="footer__about__items flex flex-col sm:flex-row items-start sm:items-center sm:justify-end gap-6 mb-6">

							<div className="footer__about__item flex items-center sm:block sm:basis-1/4">
								<img className="size-12 mr-4 mb-2 mx-auto" src="/images/footer1.svg" alt="footer" />
								<p className="text-xl sm:text-sm text-gray-600 text-balance text-center">Cooking by hand and with love</p>
							</div>

							<div className="footer__about__item flex items-center sm:block sm:basis-1/4">
								<img className="size-12 mr-4 mb-2 mx-auto" src="/images/footer2.svg" alt="footer" />
								<p className="text-xl sm:text-sm text-gray-600 text-balance text-center">We will deliver on the day of order</p>
							</div>

							<div className="footer__about__item flex items-center sm:block sm:basis-1/4">
								<img className="size-12 mr-4 mb-2 mx-auto" src="/images/footer3.svg" alt="footer" />
								<p className="text-xl sm:text-sm text-gray-600 text-balance text-center">100% almond flour and natural ingredients</p>
							</div>

						</div>

						<div className="text-sm text-gray-400">
							© 2024 SHELKOV & CHECHEL, <br /> Macaronshop LLC "STEP EXAM", Odesa, Sadova Street, 3
						</div>
					</div>

					<div className="footer__links hidden md:flex basis-3/6 justify-evenly">

						<div className="footer__links__column basis-1/4">
							<p className="uppercase font-semibold mb-4">information</p>
							<Link to="/Contacts"><p className="text-sm text-gray-600 mb-2">About company</p></Link>
							<Link to="/Guarantee"><p className="text-sm text-gray-600 mb-2">Guarantees of taste and freshness</p></Link>
							<Link to="Delivery"><p className="text-sm text-gray-600 mb-2">Shipping and payment</p></Link>
							<Link to="/Contacts"><p className="text-sm text-gray-600 mb-2">Contacts</p></Link>
						</div>

						<div className="footer__links__column basis-1/4">
							<p className="uppercase font-semibold mb-4">catalogue</p>
							<p className="text-sm text-gray-600 mb-2">Dessert catalog</p>
							<Link to="/ReadySets"><p className="text-sm text-gray-600 mb-2">Ready-made sets</p></Link>
							<p className="text-sm text-gray-600 mb-2">Build your set</p>
							<p className="text-sm text-gray-600 mb-2">Stock</p>
						</div>

						<div className="footer__links__column basis-1/4">
							<p className="uppercase font-semibold mb-4">for bussiness</p>
							<p className="text-sm text-gray-600 mb-2">Corporate gifts</p>
							<p className="text-sm text-gray-600 mb-2">For legal entities</p>
							<p className="text-sm text-gray-600 mb-2">Opoviks</p>
						</div>

					</div>

					<div className="footer__contacts sm:basis-1/6 flex flex-row-reverse sm:flex-col justify-between mb-4 sm:mb-0">

						<div className="phone text-right">
							<p className="text-xl font-semibold">+380507375982</p>
							<p className="text-sm text-gray-600">from 8 a.m. to 9 p.m.</p>
						</div>

						<div className="social-links flex flex-end self-end">
							<a className="ml-3" href="/"><img className='size-14 sm:size-auto' src="/images/inst.svg" alt="alt" /></a>
							<a className="ml-3" href="/"><img className='size-14 sm:size-auto' src="/images/fb.svg" alt="alt" /></a>
							<a className="ml-3" href="/"><img className='size-14 sm:size-auto' src="/images/fb.svg" alt="alt" /></a>
						</div>

					</div>

				</div>

			</footer>
		)
	}
}

export default Footer