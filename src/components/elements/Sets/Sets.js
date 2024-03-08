import React, { PureComponent } from 'react';
import SetItem from './SetItem';
import { addProductToCart, getDataBaseInfo } from '../../services/Fetch';
import Modal from '../Modal/Modal';
class Sets extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            cart: [],
            isModalOpen: false,
        }
    }

    getSets = async () => {
        const key = "products";
        try {
            const data = await getDataBaseInfo(key);
            if (!data) return;
            this.setState({ items: data[0].sets });
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    componentDidMount() {
        this.getSets()
    }

    addToCart = async (set) => {
        try {
            // Добавляю товар в корзину
            await addProductToCart(set);
            // Обновляю состояние корзины, чтобы отобразить добавленный товар
            this.setState(prevState => ({
                cart: [...prevState.cart, set],
                isModalOpen: true,
            }));
            console.log('Item added to cart. Modal open:', this.state.isModalOpen);
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    }
    
    handleCloseModal = () => {
        this.setState({ isModalOpen: false }); // Закрываю модальное окно
    }

    handleContinueShopping = () => {
        this.setState({ isModalOpen: false }); // Закрываю модальное окно
    }

    handleCheckout = () => {
        // Переход к странице оформления покупки
        window.location.href = "/cart";
    }
    
    render() {
        const { items } = this.state;

        const content = items.map((set, index) => (
            <div 
                key={index} className="main__popular__card flex flex-col justify-between bg-white max-w-[435px] rounded-md block overflow-hidden transform transition duration-300 ease-in-out hover:shadow-xl">
                <SetItem
                    key={set.id}
                    set={set}
                    addToCart={this.addToCart} // передаю функцию для добавления в корзину
                    />
            </div>
        ));

        return (
            <>
                {content}
                <Modal 
                    isOpen={this.state.isModalOpen} 
                    onClose={this.handleCloseModal} 
                    onContinueShopping={this.handleContinueShopping} 
                    onCheckout={this.handleCheckout} 
                />
            </>
        )
    }
}

export default Sets
