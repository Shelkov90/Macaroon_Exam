import React, { PureComponent } from "react";

class Delivery extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<>
				<div className="breadcrumbs__inner flex justify-center mt-10">
					<div className="breadcrumbs__item">Homepage</div>
					<p className="text-blue-400 mx-3">&gt;&gt;</p>
					<div className="breadcrumbs__item text-blue-400">
						Delievery & payments
					</div>
				</div>

				<div className="flex justify-center mt-10 mb-12">

					<div className="delivery_img w-1/3 md:w-auto md:max-w-xs mt-6 relative">

						<img src="images/bike.png" alt="bike" className="w-full" />
						<img src="images/bike2.png" alt="bike" className="absolute  top-1/4 left-1/1"/>
						<img src="images/bike3.png" alt="bike" className="absolute  top-1/4 left-1/2"/>

					</div>
					
					<div className="delivery_info ml-60 mt-6">
						<h2 className='text-4xl font-semibold mb-6'>Delivery and payment</h2>
						<p className='text-base mb-6'>There are 2 delivery methods available to our customers: courier delivery in Odesa within the Ring Road and pickup.</p>
						<h4 className="text-2xl font-semibold">
							Courier delivery:</h4>
							<p className='text-base mb-6'>Couriers work every day from 11 to 21 hours. Delivery of pasta is carried out only in Odesa. <span className="text-red-500">Exact delivery area.</span></p>
							<p className='text-base mb-6'>If you are ready to accept an order between 12:00 and 17:00 or 17:00 and 21:00, delivery will cost 300$.</p>
							<p className='text-base mb-6'>For orders over 3,000$, delivery is FREE.</p>
							<p className='text-base mb-6'>If you place an order before 15:00, delivery is possible on the same day between 17:00 and 21:00.</p>
							<p className='text-base mb-6'>The courier will notify you of his arrival 30-40 minutes in advance.</p>


					</div>

				</div>

			</>
		);
	}
}

export default Delivery;
