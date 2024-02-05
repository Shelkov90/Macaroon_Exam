import React, { PureComponent } from 'react'

class Contacts extends PureComponent {
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
					<p className="text-blue-400 mx-3"></p>
					<div className="breadcrumbs__item text-blue-400">Contacts</div>
				</div>

				<div className='flex justify-center'>
					<div className='contacts flex max-w-3xl'>
						<div className='contacts_img mr-10 mt-10'>
							<img src="images/ContactMacaroon.png" alt="alt" />
						</div>
						<div className='contacts_info mt-10 ml-40 mb-12'>
							<h2 className='text-4xl font-semibold mb-6'>Contacts</h2>
							<h5 className='text-2xl font-semibold mb-2'>Production :</h5>
							<p>Sadova, 22 </p>
							<p>Opening hours: from 8 to 19:30.</p>
							<h5 className='text-2xl font-semibold mt-6 mb-2'>Pickup points :</h5>
							<p>Cafe “Morosha”. Sadova, 22 (from 8 to 19:30)</p>
							<p>Cafe “Meant”. Deribasovcka, 22 (from 10 to 22)</p>
							<h5 className='text-2xl font-semibold mt-6 mb-2'>Phones :</h5>
							<p>(063) 309-82-88 main number</p>
							<p>(093) 841-86-29 for complaints and suggestions</p>
						</div>
					</div>
				</div>

			</>
		)
	}
}

export default Contacts