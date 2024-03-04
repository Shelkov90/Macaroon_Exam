import React, { PureComponent } from 'react'
import { getDataBaseInfo } from '../../services/Fetch';
import NewsList from './NewsList';
import UsersList from './UsersList';
import OrdersList from './OrdersList';
import ProductsList from './ProductsList';

class AdminItemList extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            orders: [],
            products: [],
            news: [],
            loading: false,
            error: null
        };
    }

    fetchData = async () => {
        this.setState({ loading: true });
        try {
            const data = await getDataBaseInfo(this.props.type);
            this.setState({ [this.props.type]: data, loading: false, error: null })
        } catch (error) {
            this.setState({ error: error.message, loading: false });
        }
    };

    componentDidMount() {
        this.fetchData();
    };

    componentDidUpdate(prevProps) {
        if (this.props.type !== prevProps.type) {
            this.fetchData();
        }
    };

    updateData = (typeData, data) => {
        this.setState({[typeData]: data});
    }

    render() {

        const { users, orders, products, news, loading, error } = this.state;

        let componentToRender;

        switch (this.props.type) {
            case 'users':
                componentToRender = <UsersList users={users} updateData={this.updateData} />;
                break;
            case 'orders':
                componentToRender = <OrdersList orders={orders} updateData={this.updateData} />;
                break;
            case 'products':
                componentToRender = <ProductsList products={products[0]} updateData={this.updateData} />;
                break;
            case 'news':
                componentToRender = <NewsList news={news} updateData={this.updateData} />;
                break;
            default:
                componentToRender = null;
        }

        return (
            <>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error: {error}</p>
                ) : (
                    componentToRender
                )}
            </>
        );
    }
}

export default AdminItemList;