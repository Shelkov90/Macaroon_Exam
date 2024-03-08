import React, { PureComponent } from "react";
import {
	removeProductFromCart,
	getDataBaseInfo,
	addDataBaseItem,
} from "../../services/Fetch";
import CheckoutModal from "../../elements/Modal/CheckoutModal";
import SweetSets from "../../elements/Sweet/SweetSets";

class Cart extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			cartItems: [],
			totalPrice: 0,
			deliveryCost: 0,
			isOpenCheckoutModal: false,
			selectedDeliveryMethod: null,
		};
	}

	componentDidMount() {
		this.getCartItems();
	}

	componentDidUpdate(prevProps, prevState) {
		const { cartItems } = this.state;
		if (prevState.cartItems !== cartItems) {
			this.calculateTotalPrice();
		}
	}

	getCartItems = async () => {
		try {
			const cartItems = await getDataBaseInfo("cart");
			if (!cartItems) return;
			this.setState({ cartItems });
			this.calculateTotalPrice(cartItems);
		} catch (error) {
			console.error("Error fetching cart items:", error);
		}
	};

	handleIncrement = async (productId) => {
		const { cartItems } = this.state;
		const existingItem = cartItems.find((item) => item.id === productId);

		if (existingItem) {
			// Если товар уже есть в корзине, увеличиваем его количество на 1
			const updatedCartItems = cartItems.map((item) => {
				if (item.id === productId) {
					const updatedQuantity = (item.quantity || 0) + 1;
					const updatedTotalPrice = item.price * updatedQuantity;
					return {
						...item,
						quantity: updatedQuantity,
						totalPrice: updatedTotalPrice,
					};
				}
				return item;
			});
			this.setState({ cartItems: updatedCartItems }, () => {
				this.calculateTotalPrice();
			});
		} else {
			try {
				// Получаем информацию о товаре из базы данных
				const productToAdd = await getDataBaseInfo("products", productId);
				if (!productToAdd) {
					console.error("Product not found in database.");
					return;
				}
				// Устанавливаем начальное количество товара в корзине равным 1
				productToAdd.quantity = 1;
				productToAdd.pricePerUnit = productToAdd.price;
				const updatedCartItems = [...cartItems, productToAdd];
				this.setState({ cartItems: updatedCartItems }, () => {
					this.calculateTotalPrice();
				});
			} catch (error) {
				console.error("Error fetching product information:", error);
			}
		}
	};

	handleDecrement = async (productId) => {
		const { cartItems } = this.state;
		const updatedCartItems = cartItems.map((item) => {
			if (item.id === productId && item.quantity > 1) {
				const updatedQuantity = item.quantity - 1;
				const updatedTotalPrice = item.price * updatedQuantity;
				return {
					...item,
					quantity: updatedQuantity,
					totalPrice: updatedTotalPrice,
				};
			}
			return item;
		});
		this.setState({ cartItems: updatedCartItems }, () => {
			this.calculateTotalPrice();
		});
	};

	calculateTotalPrice = () => {
		const { cartItems } = this.state;
		let sum = 0;
		if (cartItems && cartItems.length > 0) {
			sum = cartItems.reduce((total, item) => {
				let itemTotalPrice = 0;
				if (
					typeof item.price === "number" &&
					typeof item.quantity === "number"
				) {
					itemTotalPrice = item.price * item.quantity;
				}
				return total + itemTotalPrice;
			}, 0);
		}
		this.setState({ totalPrice: sum });
	};

	calculateItemTotalPrice = (productId, quantity) => {
		const { cartItems } = this.state;
		const updatedCartItems = cartItems.map((item) => {
			if (item.id === productId) {
				const updatedTotalPrice = item.price * quantity;
				return { ...item, totalPrice: updatedTotalPrice };
			}
			return item;
		});
		this.setState({ cartItems: updatedCartItems });
	};

	handleRemoveFromCart = async (productId) => {
		try {
			await removeProductFromCart(productId);
			console.log("Product successfully removed from cart.");

			// Удаляем товар из состояния корзины
			const updatedCartItems = this.state.cartItems.filter(
				(item) => item.id !== productId
			);
			const totalPrice = this.calculateTotalPrice(updatedCartItems);

			this.setState({ cartItems: updatedCartItems, totalPrice });

			console.log("Cart items successfully updated.");
		} catch (error) {
			console.error("Error removing product from cart:", error);
		}
	};

	handleSelectDeliveryMethod = (method, cost) => {
		const deliveryCost = method === "Delivery" ? 20 : 0;
		this.setState({ selectedDeliveryMethod: method, deliveryCost });
	};

	handleOpenCheckoutModal = (event) => {
		event.preventDefault();
		const { selectedDeliveryMethod, totalPrice, deliveryCost } = this.state;
		let newTotalPrice = totalPrice;
		if (selectedDeliveryMethod === "Delivery") {
			newTotalPrice += deliveryCost;
		}
		this.setState({ isOpenCheckoutModal: true, totalPrice: newTotalPrice });
	};

	handleCloseCheckoutModal = () => {
		this.setState({ isOpenCheckoutModal: false });
	};

	handleConfirmOrder = async () => {
		const { cartItems } = this.state;
		try {
			const order = {
				userId: "1",
				products: cartItems.map((item) => ({
					name: item.name,
					description: item.description,
					price: item.price,
					discount: item.discount,
					image: item.image,
				})),
				date: new Date().toLocaleDateString(),
				totalPrice: this.state.totalPrice,
				id: Math.random().toString(36).substring(7),
			};
			const response = await addDataBaseItem("orders", order);
			if (response) {
				console.log("Order added to database:", order);
				this.handleCloseCheckoutModal();
			} else {
				console.error("Error adding order to database:", response.statusText);
			}
		} catch (error) {
			console.error("Error adding order to database:", error);
		}
	};

	render() {
		const { cartItems, totalPrice } = this.state;
		const totalItems = cartItems.reduce(
			(total, item) => total + (item.quantity || 0),
			0
		);
		const productText = totalItems === 1 ? "product" : "products";

		return (
			<>
				<div className="breadcrumbs__inner flex justify-center mt-10 mb-10">
					<div className="breadcrumbs__item">Homepage</div>
					<p className="text-blue-400 mx-3">&gt;&gt;</p>
					<div className="breadcrumbs__item text-blue-400">Cart</div>
				</div>

				<div className="cart_title text-center">
					<h2 className="text-4xl font-semibold mb-6 text-center">Your Cart</h2>
					<p className="text-center text-gray-400 -mt-2 mb-10">
						{" "}
						{totalItems} {productText} / {totalPrice} $
					</p>
				</div>

				{cartItems.length > 0 && (
					<div className="cart_info flex justify-between items-start">
						<div className="product_info w-2/3 border p-4 bg-white">
							{cartItems.map((item, index) => (
								<div
									key={index}
									className="w-full border-b-2 p-4 bg-white flex items-center justify-between"
								>
									<div className="flex items-center space-x-4 w-3/5">
										<img src={item.image} alt="" className="w-20 h-20" />
										<div className="w-52 truncate">
											<p className="font-bold">{item.name}</p>
										</div>
									</div>
									<div className="flex items-center space-x-4 w-1/5">
										<button
											onClick={() => this.handleDecrement(item.id)}
											className="text-sm font-bold"
										>
											-
										</button>
										<span>
											{item.quantity !== undefined &&
												typeof item.quantity === "number"
												? item.quantity
												: 0}
										</span>
										<button
											onClick={() => this.handleIncrement(item.id)}
											className="text-sm font-bold"
										>
											+
										</button>
									</div>
									<div className="flex items-center space-x-4 w-1/5">
										<p>Price:</p>
										<p className="text-red-400">${item.totalPrice}</p>
										<div
											className="cursor-pointer"
											onClick={() => this.handleRemoveFromCart(item.id)}
										>
											✖️
										</div>
									</div>
								</div>
							))}
						</div>

						<div className="whole_cart_info w-72 border p-4 bg-white relative">
							<div className="flex flex-col justify-between h-full">
								<div>
									<p className="font-bold text-lg mb-4">Total</p>
									<div className="flex justify-between items-center">
										<p>Total price:</p>
										<p className="ml-auto">{totalPrice}</p>
									</div>
									<div className="border-dotted border-t border-gray-300 mb-2"></div>
									<div className="flex justify-between items-center">
										<p>Total quantity:</p>
										<p className="ml-auto">{totalItems}</p>
									</div>
									<div className="border-dotted border-t border-gray-300 mb-2"></div>
									<div className="flex justify-between items-center">
										<p>Delivery:</p>
										<p className="ml-auto">20$</p>
									</div>
									<div className="border-dotted border-t border-gray-300 mb-10"></div>
									<hr />
									<div className="flex justify-between items-center mt-2 mb-2">
										<p>To pay:</p>
										<p className="ml-auto">
											{this.state.selectedDeliveryMethod === "Delivery"
												? totalPrice + 20
												: totalPrice}
											$
										</p>
									</div>
									<hr />
								</div>
								<button
									className="bg-red-500 text-white px-4 py-2 mt-4 hover:bg-blue-500"
									onClick={this.handleOpenCheckoutModal}
								>
									Checkout
								</button>
							</div>
						</div>
					</div>
				)}

				<div className="delivery_info mt-10 w-2/3">
					<h2 className="text-2xl font-semibold mb-4 text-center">Delivery</h2>
					<p className="mb-4 text-center">
						Provide contact information and select a delivery method
					</p>
					<form className="delivery_form">
						<div className="user_contacts mb-4 flex justify-between">
							<div className="w-1/2">
								<label className="text-sm mb-2" htmlFor="name">
									Your name*
									<input
										className="w-full p-2 mt-2"
										name="name"
										type="text"
										placeholder="Your name"
									/>
								</label>
							</div>
							<div className="w-1/2 ml-2">
								<label className="text-sm mb-2" htmlFor="phone">
									Your phone*
									<input
										className="w-full p-2 mt-2"
										name="phone"
										type="number"
										placeholder="Your phone"
									/>
								</label>
							</div>
						</div>

						<div className="delivery_type mb-4">
							<label
								htmlFor="deliveryType"
								className="block text-sm font-medium text-gray-700 mb-4 mt-10"
							>
								Delivery Type
							</label>
							<div className="mt-1 flex justify-around w-full">
								<div
									className={`flex items-center cursor-pointer group border ${this.state.selectedDeliveryMethod === "Delivery"
										? "border-red-500"
										: "border-transparent"
										} w-1/2 bg-white p-4`}
									onClick={() =>
										this.handleSelectDeliveryMethod("Delivery", 20)
									}
								>
									<img
										src="/images/delivery1.svg"
										alt="Delivery"
										className="w-6 h-6 mr-2"
									/>
									<div>
										<p className="font-semibold">Delivery</p>
										<p className="text-red-400">$20</p>
									</div>
								</div>
								<div
									className={`flex items-center cursor-pointer group border ${this.state.selectedDeliveryMethod === "Pickup"
										? "border-green-500"
										: "border-transparent"
										} w-1/2 bg-white p-4 ml-2`}
									onClick={() => this.handleSelectDeliveryMethod("Pickup", 0)}
								>
									<img
										src="/images/delivery2.svg"
										alt="Pickup"
										className="w-6 h-6 mr-2"
									/>
									<div>
										<p className="font-semibold">Pickup</p>
										<p className="text-green-400">Free</p>
									</div>
								</div>
							</div>
						</div>

						<div className="delivery_adress mb-4 mt-10">
							<label
								htmlFor="address"
								className="block text-sm font-medium text-gray-700 mb-4"
							>
								Delivery Address
							</label>
							<textarea
								id="address"
								name="address"
								rows="3"
								className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								placeholder="No need to fill out at pick up"
								onFocus={(e) => (e.target.placeholder = "")}
								onBlur={(e) =>
									(e.target.placeholder = "Enter your delivery address here")
								}
							></textarea>
						</div>

						<div className="delivery_date flex justify-between">
							<div className="mb-4 mt-10 w-1/2">
								<label
									htmlFor="deliveryDate"
									className="block text-sm font-medium text-gray-700 mb-4 "
								>
									Delivery Date
								</label>
								<input
									id="deliveryDate"
									type="date"
									min={new Date().toISOString().split("T")[0]}
									className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm cursor-pointer"
								/>
							</div>

							<div className="mb-4 mt-10 w-1/2 ml-2">
								<label
									htmlFor="deliveryTime"
									className="block text-sm font-medium text-gray-700 mb-4"
								>
									Delivery Time
								</label>
								<select
									id="deliveryTime"
									className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm cursor-pointer"
								>
									<option value="10-12">10:00 - 12:00</option>
									<option value="12-14">12:00 - 14:00</option>
									<option value="14-16">14:00 - 16:00</option>
									<option value="16-18">16:00 - 18:00</option>
									<option value="16-18">18:00 - 20:00</option>
								</select>
							</div>
						</div>

						<div className="delivery_comments mb-4 mt-10">
							<label
								htmlFor="comment"
								className="block text-sm font-medium text-gray-700 mb-4"
							>
								Comments on the order
							</label>
							<textarea
								id="comment"
								name="comment"
								rows="3"
								className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								placeholder="Here you can write your wishes regarding anonymous delivery, postcard text, and more."
								onFocus={(e) => (e.target.placeholder = "")}
								onBlur={(e) =>
								(e.target.placeholder =
									"Here you can write your wishes regarding anonymous delivery, postcard text, and more.")
								}
							></textarea>
						</div>

						<div className="delivery_payment mb-8 mt-10">
							<h3 className="text-sm font-medium text-gray-700 mb-4">
								Payment Method
							</h3>
							<div className="flex">
								<div className="w-1/2">
									<label
										htmlFor="paymentCard"
										className="flex items-center space-x-2 cursor-pointer"
									>
										<input
											id="paymentCard"
											type="radio"
											name="paymentMethod"
											value="card"
											className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
										/>
										<span>Card</span>
									</label>
								</div>
								<div className="w-1/2">
									<label
										htmlFor="paymentCash"
										className="flex items-center space-x-2 cursor-pointer"
									>
										<input
											id="paymentCash"
											type="radio"
											name="paymentMethod"
											value="cash"
											className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
										/>
										<span>Cash</span>
									</label>
								</div>
							</div>
						</div>

						<hr />
						<div className="flex justify-between items-center mt-4 mb-4">
							<p className="text-sm font-medium text-gray-700 mb-4">
								Total order amount including delivery:
							</p>
							<p className="ml-auto text-red-400">
								{this.state.selectedDeliveryMethod === "Delivery"
									? totalPrice + 20
									: totalPrice}
								$
							</p>
						</div>

						<hr />
						<div className="text-center mt-4 mb-10">
							<button
								className="bg-red-500 text-white px-4 py-2 mt-4 hover:bg-blue-500 w-1/2"
								onClick={this.handleOpenCheckoutModal}
							>
								Checkout
							</button>
						</div>

						<div class="form__lastText text-sm mb-20">
							By clicking on the "Place an order" button, I accept and agree to
							the <span class="text-blue-400 underline">Offer Agreement</span>{" "}
							and authorize the processing of my personal data in accordance
							with the
							<span class="text-blue-400 underline ml-1">Privacy Policy.</span>
						</div>
					</form>
				</div>

				<SweetSets />
				
				{this.state.isOpenCheckoutModal && (
					<CheckoutModal
						isOpenCheckoutModal={this.state.isOpenCheckoutModal}
						onClose={this.handleCloseCheckoutModal}
						handleConfirmOrder={this.handleConfirmOrder}
					/>
				)}
			</>
		);
	}
}

export default Cart;
