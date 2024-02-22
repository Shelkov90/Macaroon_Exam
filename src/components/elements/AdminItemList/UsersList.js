import React, { PureComponent } from 'react'

class UsersList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {

        let content = '';

        if (this.props.users) {
            content = this.props.users.map((item, index) => {
                return (
                    <div key={index} className='news__item grid grid-cols-8 border my-2 bg-white p-4 items-center'>
                        <p>#{index + 1}</p>
                        <p>
                            <span className='font-semibold'>name:</span> 
                            <br/> 
                            {item.name}
                        </p>
                        <p className='col-span-2'>
                            <span className='font-semibold'>surname:</span> 
                            <br/> 
                            {item.surname}
                        </p>
                        <p className='col-span-2'>{item.email}</p>

                        <button className='bg-green-200 hover:bg-green-400 rounded-md mx-4 py-2'>EDIT</button>
                        <button className='bg-red-200 hover:bg-red-400 rounded-md mx-4 py-2'>DELETE</button>
                    </div>
                )
            })
        };

        return (
            <>
                {content ? content : ""}
            </>
        )
    }
}

export default UsersList