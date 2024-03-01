import React, { PureComponent } from 'react'
import { deleteDataBaseItem, editDataBaseItem } from '../../services/Fetch'

class UsersItem extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            item: this.props.item,
            editable: false,
            isDelete: false,
            isAdmin: this.props.item.isAdmin
        }
    }

    setEditStatus = () => {
        this.setState({ editable: true })
    }

    changeAdminStatus = () => {
        this.setState({ isAdmin: !this.state.isAdmin })
    }

    removeEditStatus = () => {
        this.setState({ editable: false })
    }

    saveEditableItem = async (key, id, user) => { 
        editDataBaseItem(key, id, user)
        this.setState({ item: user })
        this.removeEditStatus();
    }

    deleteItem = async (key, id) => {
        deleteDataBaseItem(key,id)
        this.setState({ isDelete: true })
    }

    render() {

        const {item, editable, isDelete, isAdmin} = this.state;
        
        if(isDelete) return null

        let user = {
            id: item.id,
            name: item.name,
            surname: item.surname,
            email: item.email,
            phone: item.phone,
            password: item.password,
            isAdmin: isAdmin,
            city: item.city,
            company: item.company
        }


        return (
            <div className='news__item flex justify-between border rounded-xl shadow-md my-2 bg-white p-4'>
                
                <div className='flex flex-col justify-between basis-1/6'>   
                    <p className='flex justify-between'>
                        <span className='font-semibold'>ID: </span> 
                        {editable ? 
                        <input 
                            onChange={(e) => {user.id = e.target.value}} 
                            className='border border-blue-400 w-full ml-2 text-right' 
                            type="text" 
                            defaultValue={user.id} /> : 
                        item.id} 
                    </p>
                    <p className='flex justify-between'>
                        <span className='font-semibold'>Name: </span>
                        {editable ? 
                        <input 
                            onChange={(e) => {user.name = e.target.value}} 
                            className='border border-blue-400 w-full ml-2 text-right' 
                            type="text" 
                            defaultValue={user.name} /> : 
                        item.name}
                    </p>
                    <p className='flex justify-between'>
                        <span className='font-semibold'>Surname: </span>
                        {editable ? 
                        <input 
                            onChange={(e) => {user.surname = e.target.value}} 
                            className='border border-blue-400 w-full ml-2 text-right' 
                            type="text" 
                            defaultValue={user.surname} /> : 
                        item.surname}
                    </p>
                </div>
                
                <hr className='border border-gray h-full'/>
                
                <div className='flex flex-col justify-between basis-1/6'>   
                    <p className='flex justify-between'>
                        <span className='font-semibold'>Email: </span>
                        {editable ? 
                        <input 
                            onChange={(e) => {user.email = e.target.value}} 
                            className='border border-blue-400 w-full ml-2 text-right' 
                            type="text" 
                            defaultValue={user.email} /> : 
                        item.email}
                    </p>
                    <p className='flex justify-between'>
                        <span className='font-semibold'>Phone: </span>
                        {editable ? 
                        <input 
                            onChange={(e) => {user.phone = e.target.value}} 
                            className='border border-blue-400 w-full ml-2 text-right' 
                            type="text" 
                            defaultValue={user.phone} /> : 
                        item.phone}
                    </p>
                    <p className='flex justify-between'>
                        <span className='font-semibold'>Password: </span>
                        {editable ? 
                        <input 
                            onChange={(e) => {user.password = e.target.value}} 
                            className='border border-blue-400 w-full ml-2 text-right' 
                            type="text" 
                            defaultValue={user.password} /> : 
                        item.password}
                    </p>
                </div>

                <hr className='border border-gray h-full'/>

                <div className='flex flex-col justify-between basis-1/6'>   
                    <p className='flex justify-between'>
                        <span className='font-semibold'>Admin roots: </span>
                        {editable ? 
                        <button onClick={this.changeAdminStatus} className='bg-blue-100 px-1 rounded-md text-blue-500 hover:bg-blue-200' type='button'>{isAdmin ? 'Yes' : 'No'}</button>: 
                        user.isAdmin ? 'Yes' : 'No'}
                       
                    </p>
                    <p className='flex justify-between'>
                        <span className='font-semibold'>Company: </span>
                        {editable ? 
                        <input 
                            onChange={(e) => {user.company = e.target.value}} 
                            className='border border-blue-400 w-full ml-2 text-right' 
                            type="text" 
                            defaultValue={user.company} /> : 
                        item.company}
                    </p>
                    <p className='flex justify-between'>
                        <span className='font-semibold'>City: </span>
                        {editable ? 
                        <input 
                            onChange={(e) => {user.city = e.target.value}} 
                            className='border border-blue-400 w-full ml-2 text-right' 
                            type="text" 
                            defaultValue={user.city} /> : 
                        item.city}
                    </p>
                </div>

                <div className='flex flex-col justify-evenly basis-1/5'>
                    {editable ? 
                    <button onClick={() => this.saveEditableItem("users", item.id, user)} className='bg-green-200 hover:bg-green-400 rounded-md m-2 py-2'>SAVE</button> : 
                    <button onClick={() => this.setEditStatus()} className='bg-green-200 hover:bg-green-400 rounded-md m-2 py-2'>EDIT</button>
                    }
                    <button onClick={() => this.deleteItem("users", item.id)} className='bg-red-200 hover:bg-red-400 rounded-md m-2 py-2'>DELETE</button>
                </div>
            </div>
        )
    }
}

export default UsersItem