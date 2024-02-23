import React, { PureComponent } from 'react'
import { getDataBaseInfo } from '../../services/Fetch';
import NewsList from './NewsList';
import UsersList from './UsersList';
import OrdersList from './OrdersList';
import ProductsList from './ProductsList';

class AdminItemList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            orders: [],
            products: [],
            news: [],
        }
    }

    componentDidMount = async() => {
        const data = await getDataBaseInfo(this.props.type);
        this.setState({ [this.props.type]: data })
    }

    componentDidUpdate = async(prevProps) => {
        const data = await getDataBaseInfo(this.props.type);
        
        if(this.props.type !== prevProps.type){
            this.setState({ [this.props.type]: data })
        } 
    }

    render() {

        return (
            <>
              {this.props.type === "users" ? <UsersList users={this.state[this.props.type]} /> : ""}
              {this.props.type === "orders" ? <OrdersList orders={this.state[this.props.type]} /> : ""}
              {this.props.type === "products" ? <ProductsList products={this.state[this.props.type]} /> : ""}
              {this.props.type === "news" ? <NewsList news={this.state[this.props.type]} /> : ""}
            </>
        )
    }
}

export default AdminItemList