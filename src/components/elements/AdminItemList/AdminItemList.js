import React, { PureComponent } from 'react'
import { getDataBaseInfo } from '../../services/Fetch';
import NewsList from './NewsList';
import UsersList from './UsersList';

class AdminItemList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
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
              {this.props.type === "news" ? <NewsList news={this.state[this.props.type]} /> : ""}
              {this.props.type === "users" ? <UsersList users={this.state[this.props.type]} /> : ""}
            </>
        )
    }
}

export default AdminItemList