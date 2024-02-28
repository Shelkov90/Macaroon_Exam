import React, { PureComponent } from 'react'
import { addDataBaseItem } from '../../services/Fetch'

class CreateUserAccount extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            id: "id",
            name: "name",
            surname: "surname",
            email: "email",
            phone: "phone",
            password: "password",
            isAdmin: false,
            city: "city",
            company: "company"
        }
    }

    closeForm = () => {
        this.props.closeNewItemForm()
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        let user = {
            id: e.target[0].value,
            name: e.target[1].value,
            surname: e.target[2].value,
            email: e.target[3].value,
            phone: e.target[4].value,
            password: e.target[5].value,
            isAdmin: false,
            company: e.target[6].value,
            city: e.target[7].value
        }

        let newUser = await addDataBaseItem("users", user)

        console.log(newUser);
        this.props.addNewItem(newUser)
    }

    render() {

        const { id, name, surname, email, phone, password, company, city } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>

                <div className='news__item flex justify-between border rounded-xl shadow-md my-2 bg-white p-4'>
                    
                    <div className='flex flex-col justify-between basis-1/6'>   
                        <p className='flex justify-between'>
                            <span className='font-semibold'>ID: </span> 
                            <input 
                                onChange={(e) => this.setState({ id: e.target.value })} 
                                className='border border-blue-400 w-full ml-2 text-right' 
                                type="text" 
                                defaultValue={id} /> 
                        </p>
                        <p className='flex justify-between'>
                            <span className='font-semibold'>Name: </span>
                            <input 
                                onChange={(e) => this.setState({ name: e.target.value })} 
                                className='border border-blue-400 w-full ml-2 text-right' 
                                type="text" 
                                defaultValue={name} />
                        </p>
                        <p className='flex justify-between'>
                            <span className='font-semibold'>Surname: </span>
                            <input 
                                onChange={(e) => this.setState({ surname: e.target.value })} 
                                className='border border-blue-400 w-full ml-2 text-right' 
                                type="text" 
                                defaultValue={surname} />
                        </p>
                    </div>
                    
                    <hr className='border border-gray h-full'/>
                    
                    <div className='flex flex-col justify-between basis-1/6'>   
                        <p className='flex justify-between'>
                            <span className='font-semibold'>Email: </span>
                            <input 
                                onChange={(e) => this.setState({ email: e.target.value })} 
                                className='border border-blue-400 w-full ml-2 text-right' 
                                type="text" 
                                defaultValue={email} />
                        </p>
                        <p className='flex justify-between'>
                            <span className='font-semibold'>Phone: </span>
                            <input 
                                onChange={(e) => this.setState({ phone: e.target.value })} 
                                className='border border-blue-400 w-full ml-2 text-right' 
                                type="text" 
                                defaultValue={phone} />
                        </p>
                        <p className='flex justify-between'>
                            <span className='font-semibold'>Password: </span>
                            <input 
                                onChange={(e) => this.setState({ password: e.target.value })} 
                                className='border border-blue-400 w-full ml-2 text-right' 
                                type="text" 
                                defaultValue={password} />
                        </p>
                    </div>

                    <hr className='border border-gray h-full'/>

                    <div className='flex flex-col justify-between basis-1/6'>   
                        <p className='flex justify-between'>
                            <span className='font-semibold'>Admin roots: </span>
                            No options
                        </p>
                        <p className='flex justify-between'>
                            <span className='font-semibold'>Company: </span>
                            <input 
                                onChange={(e) => this.setState({ company: e.target.value })} 
                                className='border border-blue-400 w-full ml-2 text-right' 
                                type="text" 
                                defaultValue={company} />
                        </p>
                        <p className='flex justify-between'>
                            <span className='font-semibold'>City: </span>
                            <input 
                                onChange={(e) => this.setState({ city: e.target.value })} 
                                className='border border-blue-400 w-full ml-2 text-right' 
                                type="text" 
                                defaultValue={city} />
                        </p>
                    </div>

                    <div className='flex flex-col justify-evenly basis-1/5'>
                        <button type='submit' className='bg-green-200 hover:bg-green-400 rounded-md m-2 py-2'>SAVE</button> 
                        <button onClick={this.closeForm} className='bg-red-200 hover:bg-red-400 rounded-md m-2 py-2'>CANCEL</button>
                    </div>
                </div>

            </form>
        )
    }
}

export default CreateUserAccount