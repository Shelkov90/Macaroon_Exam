import React, { PureComponent } from 'react'
import UsersItem from './UsersItem'
import CreateUserAccount from './CreateUserAccount'

class UsersList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            usersList: this.props.users,
            showNewUserForm: false
        }
    }

    componentDidUpdate = () => {
        if (this.props.users.length !== this.state.usersList.length || 
            this.props.users.some((user, index) => user !== this.state.usersList[index])) {
            this.setState({ usersList: this.props.users });
        }
    }

    

    createNewItem = () => {
        this.setState({ 
            showNewUserForm: true
         })
    }

    closeNewItemForm = () => {
        this.setState({ 
            showNewUserForm: false
         })
    }

    addNewItem = async (user) => {
        this.setState(prevState => ({ 
            usersList: [...prevState.usersList, user],
            showNewUserForm: false
         }))

    }

    render() {

        const { usersList, showNewUserForm } = this.state;

        let content = '';

        if (usersList) {
            content = usersList.map((item, index) => {
                return (
                    <UsersItem key={`users${index}`} item={item}/>
                )
            })
        };

        return (
            <>
                <div className='flex justify-between items-center'>
                    <h2 key={"news__header"} className='text-2xl text-center font-semibold my-4'>Users - {usersList.length} accounts:</h2>
                    <button onClick={this.createNewItem} className=' bg-green-200 text-blue-500 font-semibold rounded-md my-5 px-4 py-2 cursor-pointer hover:bg-green-400'>ADD NEW</button>
                </div>
                {showNewUserForm ? <CreateUserAccount addNewItem={this.addNewItem} closeNewItemForm={this.closeNewItemForm} /> : ''}
                {content}
            </>
        )
    }
}

export default UsersList