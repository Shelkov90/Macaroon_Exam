import React, { Component } from "react";
import { Link } from "react-router-dom";

class SetItem extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		const { id, name, description, price, image } = this.props.set;

		return (
			<>
				<Link
					to={`/ReadySets/Sets/${id}`}
				>
					<img className="w-full rounded-t-lg transition duration-300 ease-in-out transform " src={image} alt="popularImage" />
					<div className="popular__card__text p-5 bg-white rounded-b-lg">
						<p className="text-xl font-semibold">{name}</p>
						<p className="text-gray-600">{description}</p>
					</div>
				</Link>

				<div className="popular__card__buy border-t-2 border-t-gray-300 flex">
					<div className="popular__card__price p-3  basis-3/5 flex items-center border-r-2 border-r-gray-300">
						<p className="text-xl text-red-500 font-semibold">${price}</p>
					</div>
					<div
						className="popular__card__cart group px-2 basis-2/5 flex items-center justify-center cursor-pointer overflow-hidden transition duration-300 ease-in-out hover:bg-blue-400 hover:text-white"
						onClick={() => {
							this.props.addToCart(this.props.set); // вызываю функцию addToCart
						}}
					>
						<svg className="mr-2" width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path className="group-hover:stroke-white" d="M14.2911 5.37085H1V20H14.2911V5.37085Z" stroke="black" strokeWidth="1.4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
							<path className="group-hover:stroke-white" d="M4.12207 7.15493V3.40845C4.12207 2.07042 5.10329 1 6.26292 1H9.02818C10.1878 1 11.169 2.07042 11.169 3.40845V7.15493" stroke="black" strokeWidth="1.4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
						In cart
					</div>
				</div>
			</>

		);
	}
}

export default SetItem;
