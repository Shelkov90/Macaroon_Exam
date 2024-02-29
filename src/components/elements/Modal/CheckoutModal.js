import React, { PureComponent } from 'react';

class CheckoutModal extends PureComponent {
	render() {
		const { isOpenCheckoutModal, onClose, handleConfirmOrder } = this.props;

		if (!isOpenCheckoutModal) return null;

		return (
			<div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
				<div className="bg-gray-100 rounded-lg p-8 relative">
					<span className="absolute top-0 right-0 mt-1 mr-1 text-3xl text-gray-600 cursor-pointer" onClick={onClose}>&times;</span>

					<p className="text-center mb-6 text-lg">Are you sure you want to proceed with your order?</p>
					<div className="flex justify-center space-x-4">
						<button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-10 rounded-md" onClick={onClose}>Cancel</button>
						<button className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white py-2 px-10 rounded-md" onClick={handleConfirmOrder}>Confirm Order</button>
					</div>
				</div>
			</div>
		);
	}
}

export default CheckoutModal;
