import React, { PureComponent } from 'react'
import OrdersItem from './OrdersItem';

class OrdersList extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            ordersList: this.props.orders,
            sortType: 'date'
        };
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.orders !== this.props.orders) {
            this.setState({ ordersList: this.props.orders });
        }

        if(prevState.sortType !== this.state.sortType){
            let sortedOrders = this.sorted(this.state.ordersList)
            this.props.updateData(sortedOrders)
        }

    }

    sorted = (arr) => {
       
        const { sortType } = this.state;
        
        switch(sortType) {
            case "date":
                return arr.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
            case "user":
                return arr.slice().sort((a, b) => a.userId.localeCompare(b.userId));
            case "price":
                return arr.slice().sort((a, b) => a.totalPrice - b.totalPrice);
            default:
                return arr;
        }
    };

    render() {
        console.log("render");
        let { ordersList } = this.state;

        let content = '';
        let totalAmount = 0;

        if(!ordersList) return null;

        content = ordersList.map((item, index) => (<OrdersItem key={`orders${index}`} item={item} />));

        totalAmount = ordersList.reduce((counter, item) => counter + parseInt(item.totalPrice), 0);

        return (
            <>
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl font-semibold my-4'>Orders:</h2>
                    <p className='text-xl'>{ordersList.length} orders / Total amount: ${totalAmount}</p>
                </div>
                <div className='text-right my-2'>
                    <select onChange={(e) => this.setState({sortType: e.target.value})} className='border border-blue-400 bg-inherit text-right text-blue-600 px-4 py-1 rounded-md cursor-pointer'>
                        <option value="date">date</option>
                        <option value="user">user</option>
                        <option value="price">price</option>
                    </select>
                </div>
                {content}
            </>
        );
    }
}

export default OrdersList;