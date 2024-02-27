import React, { PureComponent } from "react";
import { removeProductFromCart, clearCart, getDataBaseInfo } from "../../services/Fetch";

class Cart extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			cartItems: [],
			totalPrice: 0,
		};
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
		const existingItemIndex = cartItems.findIndex(item => item.id === productId);

		if (existingItemIndex !== -1) {
			// Если товар уже есть в корзине, увеличиваем его количество
			const updatedCartItems = cartItems.map((item, index) => {
				if (index === existingItemIndex) {
					const updatedQuantity = (item.quantity || 0) + 1;
					const updatedTotalPrice = item.price * updatedQuantity;
					return { ...item, quantity: updatedQuantity, totalPrice: updatedTotalPrice };
				}
				return item;
			});
			this.setState({ cartItems: updatedCartItems }, () => {
				this.calculateTotalPrice(); // Пересчитываем общую стоимость после обновления cartItems
			});
		} else {
			// Если товара еще нет в корзине, добавляем его с начальным количеством 1 и ценой за единицу товара
			const newItem = { id: productId, quantity: 1, price: 0 }; // Начальная цена установлена в 0
			const updatedCartItems = [...cartItems, newItem];
			this.setState({ cartItems: updatedCartItems }, () => {
				this.calculateTotalPrice(); // Пересчитываем общую стоимость после добавления нового товара
			});
		}
	};

	handleDecrement = async (productId) => {
		const { cartItems } = this.state;
		const updatedCartItems = cartItems.map(item => {
			if (item.id === productId && item.quantity > 1) {
				const updatedQuantity = item.quantity - 1;
				const updatedTotalPrice = item.price * updatedQuantity;
				return { ...item, quantity: updatedQuantity, totalPrice: updatedTotalPrice };
			}
			return item;
		});
		this.setState({ cartItems: updatedCartItems }, () => {
			this.calculateTotalPrice(); // Пересчитываю общую стоимость после обновления cartItems
		});
	};

	calculateTotalPrice = () => {
		const { cartItems } = this.state;
		let sum = 0;
		if (cartItems && cartItems.length > 0) {
			sum = cartItems.reduce((total, item) => {
				let itemTotalPrice = 0;
				if (typeof item.price === 'number' && typeof item.quantity === 'number') {
					itemTotalPrice = item.price * item.quantity;
				}
				return total + itemTotalPrice;
			}, 0);
		}
		this.setState({ totalPrice: sum });
	};

	calculateItemTotalPrice = (productId, quantity) => {
		const { cartItems } = this.state;
		const updatedCartItems = cartItems.map(item => {
			if (item.id === productId) {
				const updatedTotalPrice = item.price * quantity;
				return { ...item, totalPrice: updatedTotalPrice };
			}
			return item;
		});
		this.setState({ cartItems: updatedCartItems });
	};

	componentDidMount() {
		this.getCartItems();
	}

	handleRemoveFromCart = async (productId) => {
		try {
			console.log("Пытаюсь удалить продукт из корзины...");
			await removeProductFromCart(productId);
			console.log("Продукт успешно удален из корзины.");
			console.log("Ждем обновления базы данных...");
			// Добавляю небольшую задержку в 500 мс перед обновлением списка товаров
			await new Promise(resolve => setTimeout(resolve, 500));
			console.log("Обновляем список товаров после удаления...");
			await this.getCartItems();
			console.log("Список товаров успешно обновлен.");
		} catch (error) {
			console.error('Ошибка при удалении товара из корзины:', error);
		}
	};

	handleClearCart = async () => {
		try {
			await clearCart();
			this.setState({ cartItems: [], totalPrice: 0 }); // Очищаю состояние после очистки корзины
		} catch (error) {
			console.error('Error clearing cart:', error);
		}
	};

	render() {
		const { cartItems, totalPrice } = this.state;

		return (
			<>

				<div className="breadcrumbs__inner flex justify-center mt-10 mb-12">
					<div className="breadcrumbs__item">Homepage</div>
					<p className="text-blue-400 mx-3">&gt;&gt;</p>
					<div className="breadcrumbs__item text-blue-400">Cart</div>
				</div>

				<div className="grid grid-cols-1 gap-y-4">
					{cartItems.map((item, index) => (
						<div key={index} className="flex border-b-2 p-4" style={{ width: '670px' }}>
							<div className="flex items-center">
								<img src={item.image} alt="" className="w-16 h-16 mr-4" /> 
								<div>
									<p className="font-bold">{item.name}</p> 
									{item.details && item.details.length > 0 && item.details[0].tastes && (
										<ul>
											{item.details[0].tastes.map((taste, index) => (
												<li key={index}>{Object.keys(taste)}</li>
											))}
										</ul>
									)}
								</div>
							</div>
							<div className="flex flex-col items-center justify-center ml-auto mr-4">
								<div className="flex items-center border rounded-md px-2 mb-2">
									<button onClick={() => this.handleDecrement(item.id)} className="text-sm font-bold">-</button>
									<span className="mx-2">{item.quantity !== undefined && typeof item.quantity === 'number' ? item.quantity : 0}</span>
									<button onClick={() => this.handleIncrement(item.id)} className="text-sm font-bold">+</button>
								</div>
								<p>Стоимость: ${item.totalPrice}</p>
							</div>
							<div className="cursor-pointer ml-auto" onClick={() => this.handleRemoveFromCart(item.id)}>
								✖️
							</div>
						</div>
					))}
				</div>



			</>
		);
	}
}

export default Cart;
