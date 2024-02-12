/* eslint-disable jsx-a11y/iframe-has-title */
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

				<div className="delivery flex justify-center mt-10 mb-12 relative">

					<div className="delivery_img w-1/3 md:w-auto md:max-w-xs mt-6">
						<img src="images/meantbike.png" alt="bike" className="absolute mt-28 ml-8" />
						<img src="images/bike3.png" alt="bike" className="absolute w-48 mt-52 ml-48" />
						<img src="images/bike2.png" alt="bike" className="absolute w-44 mt-52 ml-10" />
						<img src="images/bike.png" alt="bike" className="w-full ml-10 mt-40" />
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

				<div className="pickup relative">

					<img src="images/pickupborder.png" alt="pickupborder" className=" mx-auto" />
					<div className="pickup_info flex justify-center -mt-1 mb-12 bg-white p-10">
						<div className="mt-6 w-1/3">
							<h4 className="text-2xl font-semibold mb-4">Pickup</h4>
							<p className='text-base mb-6'>You can place an order and pick it up yourself from our production facility at: st. Marshal Tukhachevsky 22 Business Center "Sova"</p>
							<p className='text-base mb-6'>The order must be placed before 20:00 in order to pick it up the next day at the pick-up point at any convenient time between 13:00 and 22:00.</p>
							<p className='text-base mb-10'>You can pay for your order by credit card in advance during checkout. You cannot pay directly upon receipt with a bank card.</p>
							<h4 className="text-2xl font-semibold  mb-4">Payment</h4>
							<p className='text-base mb-6'>You can pay for your order upon receipt in cash or pay for your order in advance by credit card. To do this, please indicate your chosen method when placing your order.</p>
							<p className='text-base mb-6'>Payment by credit card is convenient if you want to send desserts as a gift or do not want to bother with cash when receiving your order.</p>
							<p className='text-base mb-6'>If you do not have a Russian bank card, we can accept payment through the PayPal payment system.</p>
						</div>

						<div className="pickup_img w-1/3 md:w-auto md:max-w-xs mt-36 ml-28 relative">
							<img src="images/pickup2.png" alt="pickup2" className="absolute ml-6 -mt-2" />
							<img src="images/pickup3.png" alt="pickup3" className="absolute ml-10" />
							<img src="images/pickup1.png" alt="pickup1" className="ml-10" />
						</div>

					</div>
				</div>

				<div className="pickup_map w-full -mt-12">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2747.0653466612816!2d30.725265076200646!3d46.48701847110905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c631950d333da7%3A0xa70709bcd0330632!2z0YPQuy4g0KHQsNC00L7QstCw0Y8sIDMsINCe0LTQtdGB0YHQsCwg0J7QtNC10YHRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNjUwMDA!5e0!3m2!1sru!2sua!4v1701108493290!5m2!1sru!2sua"
						className="w-full h-96"
						style={{ border: "0" }}
						allowFullScreen={true}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade">
					</iframe>
				</div>
				
			</>
		);
	}
}

export default Delivery;
