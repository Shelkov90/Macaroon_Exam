import React, { PureComponent } from 'react'

class FormWholeSale extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {

		}
	}

	render() {
		return (
			<>
				<div className='wholesale_form py-2 px-12' style={{ backgroundColor: '#F7EBE5' }}>

					<h2 className='text-3xl text-center font-semibold mt-10 mb-12'>Order a quote or send a request for cooperation</h2>

					<form class="flex flex-col justify-center mb-6">

						<div class="form__wholesale flex gap-x-7 mb-10">

							<div class="form__inputs basis-2/3 grid grid-rows-2 grid-cols-2 gap-x-7">

								<label class="text-sm mb-2" for="name">Your name<input class="w-full p-4 mt-2" name="name" type="text" placeholder="Your name" /></label>
								<label class="text-sm mb-2" for="company">Your company<input class="w-full p-4 mt-2" name="company" type="text" placeholder="Your company" /></label>
								<label class="text-sm mb-2" for="phone">Your phone<input class="w-full p-4 mt-2" name="phone" type="nuber" placeholder="Your phone" /></label>
								<label class="text-sm mb-2" for="email">Your email<input class="w-full p-4 mt-2" name="email" type="email" placeholder="Your email" /></label>

							</div>

							<div class="form__textarea">
								<div class="text-sm mb-2">Add comment</div>
								<textarea name="" id="" cols="40" rows="5"></textarea>

							</div>

						</div>

						<button class="bg-red-500 text-white py-4 px-10 mx-auto hover:bg-red-600" type="submit">Order a quote</button>

					</form>

					<div class="form__lastText text-sm mb-12">By clicking on the "Place an order" button, I accept and agree
						to
						the <span class="text-blue-400 underline">Offer
							Agreement</span> and authorize the processing of my personal data in accordance with the
						<span class="text-blue-400 underline">Privacy Policy.</span>
					</div>
				</div>
			</>
		)
	}
}

export default FormWholeSale