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
			<NavLink to="/Cart">
				<div className="relative flex items-center">
					{cartLength ? (
						<div className="absolute bottom-2 left-5 bg-red-400 rounded-full p-1 text-xs text-white font-semibold">
							{cartLength}
						</div>
					) : null}
					<img className="ml-8 mr-2" src="/images/bag.svg" alt="Cart" />
					Cart
				</div>
			</NavLink>
		);
	}
}

export default CartIcon;