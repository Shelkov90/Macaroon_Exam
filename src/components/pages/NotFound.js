/* eslint-disable react/jsx-no-undef */
import React, { PureComponent } from 'react'
import { Link } from "react-router-dom";


class NotFound extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {

		}
	}

	render() {
		return (
			<>
				<div className='mt-10 mb-12 flex flex-col items-center'>

					<h3 className='text-lg font-semibold text-center mb-20'>
						Sorry, page not found
					</h3>

					<div className="error_img relative">
						<img src="images/macaroon404.png" alt="sadmacaroon" className="absolute -top-6 left-32 z-3" />
						<img src="images/404.png" alt="404" className="mx-auto z-2" />
						<img src="images/sad.png" alt="sad" className="absolute top-20 left-60 z-4" />
						<img src="images/pickup3.png" alt="pickup3" className="absolute top-0 left-48 z-1" />
					</div>

					
						<Link to="/">
							<div className="back__button text-red-400 border border-red-400 hover:bg-red-400 hover:text-white py-3 px-28 mt-20 rounded-md">
								<p>Back</p>
							</div>
						</Link>
					

				</div>
			</>
		)
	}
}

export default NotFound