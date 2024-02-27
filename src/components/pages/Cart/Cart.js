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


	componentDidMount() {
		this.getCartItems();
	}

	calculateTotalPrice = (cartItems) => {
		let sum = 0;
		if (!cartItems) {
			return sum;
		}
		sum = cartItems.reduce((total, item) => total + item.price, 0);
		this.setState({ totalPrice: sum });
	};

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
				{cartItems.length > 0 ? (
					<div>
						<ul>
							{cartItems.map((item, index) => (
								<li key={index}>
									{index + 1}. {item.name} - ${item.price}
									<button onClick={() => this.handleRemoveFromCart(item.id)}>Remove</button>
								</li>
							))}
						</ul>
						<p>Общая стоимость: ${totalPrice}</p>
						<button onClick={this.handleClearCart}>Clear Cart</button>
					</div>
				) : (
					<p>Ваша корзина пуста</p>
				)}
			</>
		);
	}
}

export default Cart;
