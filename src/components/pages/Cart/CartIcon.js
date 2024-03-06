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
				<NavLink className="flex" to="/Cart">
				<img className="mr-2" src="/images/bag.svg" alt="Cart" />
				<span className="hidden sm:block">Cart</span> 
				</NavLink>
			</div>
		);
	}
}

export default CartIcon;