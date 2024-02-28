import React, { PureComponent } from 'react'

class OrdersList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        let content = '';

        if(!this.props.orders) return null;

        if (this.props.orders) {
            content = this.props.orders.map((item, index) => {
                return (
                    <div key={index} className='news__item grid grid-cols-8 border my-2 bg-white p-4 items-center'>
                        <p>#{index + 1}</p>
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
                        <p className='col-span-2'>
                            <span className='font-semibold'>Products:</span> 
                            <br/> 
                            {item?.products?.length}
                        </p>

                        <button className='bg-green-200 hover:bg-green-400 rounded-md mx-4 py-2'>EDIT</button>
                        <button className='bg-red-200 hover:bg-red-400 rounded-md mx-4 py-2'>DELETE</button>
                    </div>
                )
            })
        };

        return (
            <>
                <h2 className='text-2xl text-center font-semibold my-4'>Orders:</h2>
                {content ? content : ""}
            </>
        )
    }
}

export default OrdersList