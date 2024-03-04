import React, { PureComponent } from 'react'
import { deleteDataBaseItem } from '../../services/Fetch'

class OrdersItem extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isDelete: false
        }
    }

    deleteItem = async (key, id) => {
        deleteDataBaseItem(key,id)
        this.setState({ isDelete: true })
    }

    render() {

        const {item} = this.props;
        
        if(this.state.isDelete) return null;

        return (
            <div className='news__item flex justify-between border my-2 bg-white p-4 items-center'>
                
                <p>
                    <span className='font-semibold'>Date:</span> 
                    <br/> 
                    {item.date}
                </p>
                <p>
                    <span className='font-semibold'>User ID:</span> 
                    <br/> 
                    {item.userId}
                </p>
                <p>
                    <span className='font-semibold'>Total price:</span> 
                    <br/> 
                    ${item.totalPrice}
                </p>

                <button onClick={() => this.deleteItem("orders", item.id)} className='basis-1/6 bg-red-200 hover:bg-red-400 rounded-md mx-4 py-2'>DELETE</button>
             </div>
        )
    }
}

export default OrdersItem