import React, { PureComponent } from 'react'
import AdminItemList from '../../elements/AdminItemList/AdminItemList';

class AdminPanel extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            type: "users"
        }
    }

    getInfo = (e) => {
        this.setState({type: e.target.dataset.name})
    }

    render() {
        return (
            <>
                <h1 className='text-4xl text-center my-10'>Admin Panel</h1>

                <div className='admin__categories flex justify-between text-blue-500 my-10'>

                    <button className='border px-5 py-2 border-blue-300 rounded-md hover:bg-blue-500 hover:text-white' data-name="users" onClick={this.getInfo}>Users</button>
                    <button className='border px-5 py-2 border-blue-300 rounded-md hover:bg-blue-500 hover:text-white' data-name="orders" onClick={this.getInfo}>Orders</button>
                    <button className='border px-5 py-2 border-blue-300 rounded-md hover:bg-blue-500 hover:text-white' data-name="products" onClick={this.getInfo}>Products</button>
                    <button className='border px-5 py-2 border-blue-300 rounded-md hover:bg-blue-500 hover:text-white' data-name="news" onClick={this.getInfo}>News</button>

                </div>

                <div className='grid my-10'>
                    {this.state.type ? <AdminItemList type={this.state.type} /> : ""}
                </div>
            </>
        )
    }
}

export default AdminPanel