import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class CartIcon extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cartLength: 0, // Инициализирую состояние корзины
		};
	}

	render() {
		const { cartLength } = this.props;

		return (
			<div className="relative flex items-center">
				{cartLength ? (
					<div className="absolute bottom-2 left-5 bg-red-400 rounded-full p-1 text-xs text-white font-semibold">
						{cartLength}
					</div>
				) : null}
				<NavLink className="flex group" to="/Cart">
				<svg className="mr-2" width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path className="group-hover:stroke-blue-500" d="M14.2911 5.37085H1V20H14.2911V5.37085Z" stroke="black" strokeWidth="1.4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
					<path className="group-hover:stroke-blue-500" d="M4.12207 7.15493V3.40845C4.12207 2.07042 5.10329 1 6.26292 1H9.02818C10.1878 1 11.169 2.07042 11.169 3.40845V7.15493" stroke="black" strokeWidth="1.4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
				<span className="hidden sm:block group-hover:text-blue-500">Cart</span> 
				</NavLink>
			</div>
		);
	}
}

export default CartIcon;