import React, { PureComponent } from 'react'
import OrdersItem from './OrdersItem';

class OrdersList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            ordersList: this.props.orders
        }
    }

    componentDidUpdate = () => {
        if (this.props.orders.length !== this.state.ordersList.length || 
            this.props.orders.some((order, index) => order !== this.state.ordersList[index])) {
            this.setState({ ordersList: this.props.orders });
        }
    }

    render() {

        const { ordersList } = this.state;
        
        let content = '';
        let totalAmount = 0;

        if (ordersList) {
            content = ordersList.map((item, index) => {
                return (
                    <OrdersItem key={`orders${index}`} item={item} />
                )
            })
            totalAmount = ordersList.reduce((counter, item) => counter += parseInt(item.totalPrice), 0)
        };

        return (
            <>
                <div className='flex justify-between items-center'>
                <h2 className='text-2xl font-semibold my-4'>Orders:</h2>
                <p className='text-xl'>{ordersList.length} orders / Total amount: ${totalAmount}</p>
                </div>
                {content}
            </>
        )
    }
}

export default OrdersList