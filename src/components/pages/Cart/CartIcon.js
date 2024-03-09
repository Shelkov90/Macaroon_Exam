import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class CartIcon extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cartLength: 0, // Инициализирем состояние корзины
		};
	}

	render() {
		const { cartLength } = this.props;

		return (
			<div className="relative flex items-center">
				<NavLink className="flex" to="/Cart">
					{cartLength ? (
						<div className="absolute bottom-1 left-3 bg-red-400 rounded-full px-1 text-xs text-white font-semibold">
							{cartLength}
						</div>
					) : null}
					<img className="mr-2" src="/images/bag.svg" alt="Cart" />
					<span className='hidden sm:block'>Cart</span> 
				</NavLink>
			</div>
		);
	}
}

export default CartIcon;