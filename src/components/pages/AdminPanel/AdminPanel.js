import React, { PureComponent } from 'react'
import { getDataBaseInfo } from '../../services/Fetch';

class AdminPanel extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            orders: [],
            sets: [],
            sweets: [],
            news: [],
            showUsers: false,
            showOrders: false,
            showSets: false,
            showSweets: false,
            showNews: false,
        }
    }

    info = async (key) => {
        const data = await getDataBaseInfo(key);
        this.setState({ [key]: data })
    }

    getUsers = () => {
        this.info("users")
        this.setState({ showUsers: true });
    }

    getOrders = () => {
        this.info("orders")
        this.setState({ showOrders: true });
    }

    getSets = () => {
        this.info("sets")
        this.setState({ showSets: true });
    }

    getSweets = () => {
        this.info("sweets")
        this.setState({ showSweets: true });
    }

    getNews = () => {
        this.info("news")
        this.setState({ showNews: true });
    }

    render() {
        const { showNews, news } = this.state
        console.log(news);
        let newsItems = ''

        if (news) {
            newsItems = news.map((item, index) => {
                return (
                    <div className='news__item grid grid-cols-6 border my-2 bg-white p-4 items-center'>
                        <p>#{index + 1}</p>
                        <p>{item.date}</p>
                        <p>{item.header}</p>
                        <p><img className='size-24' src={item.image} alt="alt" /></p>
                        <button className='bg-green-200 rounded-md mx-4 py-2'>EDIT</button>
                        <button className='bg-red-200 rounded-md mx-4 py-2'>DELETE</button>
                    </div>
                )
            })
        };

        return (
            <>
                <h1 className='text-4xl text-center my-10'>Admin Panel</h1>
                <div className='categories flex justify-between text-blue-500 underline my-10'>
                    <button onClick={this.getUsers}>Users</button>
                    <button onClick={this.getOrders}>Orders</button>
                    <button onClick={this.getSets}>Sets</button>
                    <button onClick={this.getSweets}>Sweets</button>
                    <button onClick={this.getNews}>News</button>

                </div>
                <div className='grid my-10'>
                    {showNews ? newsItems : ''}
                </div>
            </>
        )
    }
}

export default AdminPanel