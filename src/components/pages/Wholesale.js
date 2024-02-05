import React, { PureComponent } from 'react'

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

				<div className='wholesale_info flex justify-center'>
					<div className='flex max-w-3xl'>
						<div className='wholesale_img mr-10 mt-10'>
							<img src="images/Wholesale.png" alt="alt" />
						</div>
						<div className='wholesale_info mt-10 ml-40 mb-12'>
							<h2 className='text-4xl text-center font-semibold mb-6'>Wholesale supply of cakes</h2>
							<p className='text-center mb-10'>Our macarons and straws <br /> are sold in the largest confectionery and coffee chains in Odessa.<br /> Join us!</p>
							<p className="mt-2">Our Offers:</p>
							<ul className="list-disc pl-6">
								<li className="mb-2">direct deliveries from the manufacturer, always fresh products;</li>
								<li className="mb-2">
									assortment with a high average check and margin;</li>
								<li className="mb-2">free acrylic show boxes for display cases;</li>
								<li className="mb-2">products for tasting or price reduction for promotions;</li>
								<li className="mb-2">flexible terms of cooperation and deliveries.</li>
							</ul>
						</div>
					</div>
				</div>
					<hr className="w-full" style={{ height: '2px', backgroundColor: '#F0BEB3' }} />
				

			</>
		)
	}
}

export default Wholesale