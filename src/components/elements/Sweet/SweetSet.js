import React, { PureComponent, useState } from "react";
import { useParams } from "react-router-dom";
import SweetProvider, { useSets } from "./SweetContext";
import { addProductToCart } from "../../services/Fetch";
import Modal from "../Modal/Modal";
import WeddingSets from "../Wedding/WeddingSet";

export const SetWrapper = ({ addToCart, openModal }) => {
	const { id } = useParams();
	const sets = useSets();
	const set = sets.find((s) => parseInt(s.id) === parseInt(id, 10));

	const [showModal, setShowModal] = useState(false);

	const handleOpenModal = () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	const handleContinueShopping = () => {
		setShowModal(false);
	};

	const handleCheckout = () => {
		window.location.href = "/cart";
	};

	// Состояние для отслеживания текущей выбранной вкладки
	const [selectedTab, setSelectedTab] = useState("description");

	// Функция для изменения выбранной вкладки
	const selectTab = (tab) => {
		setSelectedTab(tab);
	};

	let tabContent;

	switch (selectedTab) {
		case "description":
			tabContent = set?.details[0]?.description;
			break;
		case "compound":
			tabContent = set?.details[0]?.compound;
			break;
		case "conditions":
			tabContent = set?.details[0]?.conditions;
			break;
		default:
			tabContent = set?.details[0]?.description;
	}

	if (!set || !sets) return <div> No sets </div>;

	return (
		<>
			<div className="set__breadcrumbs mt-10 mb-12">
				<div className="breadcrumbs__inner flex justify-center text-gray-400">
					<div className="breadcrumbs__item">Homepage</div>

					<p className="text-blue-400 mx-3">&gt;&gt;</p>

					<div className="breadcrumbs__item">Sweet sets</div>

					<p className="text-blue-400 mx-3">&gt;&gt;</p>

					<div className="breadcrumbs__item text-blue-400">{set.name}</div>
				</div>
			</div>

			<div className="set__product mb-16">
				<div className="set__inner">
					<div className="set__info flex gap-x-7 mb-9">
						<div className="set__info__photo basis-1/2">
							<img
								className="w-full rounded-md mb-4"
								src={set.image}
								alt="alt"
							/>
							<div className="photo__mini_photos grid gap-x-4 grid-cols-6">
								<img src={set.image} alt="alt" />
								<img src={set.image} alt="alt" />
								<img src={set.image} alt="alt" />
							</div>
						</div>

						<div className="set__info__details basis-1/2">
							<div className="details__header mb-4">
								<div className="main__header text-4xl font-semibold mb-3">
									{set.name}
								</div>
								<div className="second__header italic text-gray-600">
									{set.description}
								</div>
							</div>

							<div className="details__tastes bg-white rounded-md p-7 mb-3">
								<p className="text-xl font-semibold mb-2">Tastes:</p>
								{set.details && set.details.length > 0 ? (
									set.details[0].tastes.map((tasteObject, index) =>
										Object.entries(tasteObject).map(([flavor, quantity]) => (
											<li
												className="flex justify-between border-b-2 border-dotted my-1"
												key={flavor}
											>
												<span>{flavor}</span> <span>{quantity}</span>
											</li>
										))
									)
								) : (
									<div> No Tastes Info</div>
								)}
							</div>

							<div className="details__price bg-white rounded-md px-7 py-4 flex justify-between items-center mb-7">
								<p className="text-2xl font-semibold text-pink-600">
									$ {set.price}
								</p>

								<div
									className="price__toCart flex py-4 px-10 rounded-md bg-pink-600 text-white cursor-pointer hover:bg-pink-700 hover:text-white transition duration-300 ease-in-out"
									onClick={() => {
										addToCart(set); // вызываем функцию addToCart
										handleOpenModal();
									}}
								>
									<img className="mr-2" src="/images/whiteCart.svg" alt="alt" />
									To cart
								</div>
							</div>

							<div className="details__delivery__options">
								<div className="delivery__option flex items-center mb-2">
									<img className="mr-4" src="/images/delivery1.svg" alt="alt" />

									<p className="text-xs text-balance">
										Delivery from $40. On the day of order from 12 to 17 or from
										17 to 21. Free for orders over $200
									</p>
								</div>

								<div className="delivery__option flex items-center mb-2">
									<img className="mr-4" src="/images/delivery2.svg" alt="alt" />

									<p className="text-xs text-balance">
										Pickup is free. 3 hours after payment of the order
									</p>
								</div>

								<div className="delivery__option flex items-center mb-2">
									<img className="mr-4" src="/images/delivery3.svg" alt="alt" />

									<p className="text-xs text-balance">
										We can give it as an anonymous gift :)
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="set__description bg-white rounded-md px-6 pb-16">
						<div className="description__categories flex border-b-2 mb-10">
							<div
								className={`description__category px-4 py-5 font-semibold ${selectedTab === "description"
										? "border-b-4 border-pink-600"
										: ""
									}`}
								onClick={() => selectTab("description")}
								style={{ cursor: "pointer" }}
							>
								Description
							</div>
							<div
								className={`description__category px-4 py-5 font-semibold ${selectedTab === "compound" ? "border-b-4 border-pink-600" : ""
									}`}
								onClick={() => selectTab("compound")}
								style={{ cursor: "pointer" }}
							>
								Composition and nutritional value
							</div>
							<div
								className={`description__category px-4 py-5 font-semibold ${selectedTab === "conditions"
										? "border-b-4 border-pink-600"
										: ""
									}`}
								onClick={() => selectTab("conditions")}
								style={{ cursor: "pointer" }}
							>
								Conditions and shelf life
							</div>
						</div>

						<div className="description__text min-h-40">
							{tabContent?.map((item, index) => (
								<div key={index}>
									<p className="font-semibold">{item.header}</p>
									<p>{item.text}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Модальное окно */}
			{showModal && (
				<Modal
					isOpen={handleOpenModal}
					onClose={closeModal}
					onContinueShopping={handleContinueShopping}
					onCheckout={handleCheckout}
				/>
			)}
		</>
	);
};

class SweetSet extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			cart: [],
		};
	}

	addToCart = async (set) => {
		try {
			// Добавляем товар в корзину
			await addProductToCart(set);
			// Обновляем состояние корзины, чтобы отобразить добавленный товар
			this.setState((prevState) => ({
				cart: [...prevState.cart, set],
			}));
		} catch (error) {
			console.error("Error adding product to cart:", error);
		}
	};

	render() {
		return (
			<div>
				<SweetProvider>
					<SetWrapper
						addToCart={this.addToCart}
						openModal={this.props.openModal}
					/>
				</SweetProvider>

				<WeddingSets />
			</div>
		);
	}
}

export default SweetSet;
