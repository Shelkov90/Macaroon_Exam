import React from 'react';
import { Link } from "react-router-dom";

const SweetItem = ({ set, addToCart }) => {
	const { id, name, description, price, image } = set;

		return (
			<>
				<Link to={`/Sweet/SweetSets/${id}`}>
					<img className="w-full rounded-t-lg transition duration-300 ease-in-out transform" src={image} alt="popularImage" />
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
						className="popular__card__cart px-2 basis-2/5 flex items-center justify-center cursor-pointer overflow-hidden transition duration-300 ease-in-out hover:bg-blue-400 hover:text-white"
						onClick={() => {
							addToCart(set); // вызываем функцию addToCart
						}}
					>
						<img className="mr-2" src="/images/cart.svg" alt="alt" />
						In cart
					</div>
				</div>
			</>
		);
	}


export default SweetItem;
