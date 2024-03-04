import React, { PureComponent } from 'react'
import { deleteDataBaseItem } from '../../services/Fetch'

class SetsItem extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            details: false,
            editable: false,
            isDelete: false
        }
    }

    setEditStatus = () => {
        this.setState({ editable: true })
    }

    removeEditStatus = () => {
        this.setState({ editable: false })
    }

    showDetails = () => {
        this.setState({ details: true })
    }

    hideDetails = () => {
        this.setState({ details: false })
    }

    saveEditableSet = async (key, id, set) => { 
        this.props.updateProductData(key, id, set)
        this.removeEditStatus();
    }

    deleteSet = async (key, id) => {
        deleteDataBaseItem(key,id)
        this.setState({ isDelete: true })
    }

    render() {

        const {item} = this.props

        const {editable, details, isDelete } = this.state;

        if(isDelete) return null;

        let setTastes = item.details[0].tastes;

        let set = {
            id: item.id,
            name: item.name,
            description: item.description,
            price: item.price,
            discount: item.discount,
            image: item.image,
            details: [
                {
                    tastes: [setTastes],
                    description: [
                        {
                            header: item.details[0].description[0].header,
                            text: item.details[0].description[0].text
                        }
                    ],
                    compound: [
                        {
                            header: item.details[0].compound[0].header,
                            text: item.details[0].compound[0].text
                        }
                    ],
                    conditions: [
                        {
                            header: item.details[0].conditions[0].header,
                            text: item.details[0].conditions[0].text
                        }
                    ]
                }
            ]
        };

        return (
            <div className='news__item grid grid-cols-8 gap-x-2 rounded-xl shadow-md my-2 bg-white p-4'>
                
                <div className='col-span-4'>
                    
                    <p className='text-balance'>
                        <span className='text-lg font-semibold'>Name:</span> 
                        <br/>
                        {editable ? 
                        <input 
                            onChange={(e) => {set.name = e.target.value}} 
                            className='border border-blue-400 w-full' 
                            type="text" 
                            defaultValue={item.name} /> : 
                        item.name}
                    </p>

                    <p>
                        <span className='text-lg font-semibold'>Price:</span> 
                        <br/> 
                        ${editable ? 
                        <input 
                            onChange={(e) => {set.price = e.target.value}} 
                            className='border border-blue-400 w-full' 
                            type="number" 
                            defaultValue={item.price} /> : 
                        item.price}
                    </p>

                    <p>
                        <span className='text-lg font-semibold'>Disount:</span> 
                        <br/>
                        {editable ? 
                        <input 
                            onChange={(e) => {set.discount = e.target.value}} 
                            className='border border-blue-400 w-full' 
                            type="number" 
                            defaultValue={item.discount} /> : 
                        item.discount}%
                    </p>

                    {details ?
                    <button 
                        onClick={() => this.hideDetails()} 
                        className='bg-blue-400 hover:bg-blue-700 text-white rounded-md p-1 my-4'>
                            Hide details
                    </button>:
                    <button 
                        onClick={() => this.showDetails()} 
                        className='bg-blue-400 hover:bg-blue-700 text-white rounded-md p-1 my-4'>
                            Show details
                    </button>}

                    {details ?
                    <div>
                        <div className='bg-gray-100 rounded-md my-2 p-4'>
                            <h2 className='text-lg font-semibold'>Description:</h2>
                            <p className='my-1'>
                                <span className='font-semibold'>Header:</span>
                                <br />
                                {editable ? 
                                <input 
                                    onChange={(e) => {set.details[0].description[0].header = e.target.value}} 
                                    className='border border-blue-400 w-full' 
                                    type="text" 
                                    defaultValue={item.details[0].description[0].header} /> : 
                                item.details[0].description[0].header}
                            </p>
                            <p className='my-1 text-balance'>
                                <span className='font-semibold'>Text:</span>
                                <br />
                                {editable ? 
                                <input 
                                    onChange={(e) => {set.details[0].description[0].text = e.target.value}} 
                                    className='border border-blue-400 w-full' 
                                    type="text" 
                                    defaultValue={item.details[0].description[0].text} /> : 
                                item.details[0].description[0].text}
                            </p>
                        </div>

                        <div className='bg-gray-100 rounded-md my-2 p-4'>
                            <h2 className='text-lg font-semibold'>Compound:</h2>
                            <p className='my-1'>
                                <span className='font-semibold'>Header:</span>
                                <br />
                                {editable ? 
                                <input 
                                    onChange={(e) => {set.details[0].compound[0].header = e.target.value}} 
                                    className='border border-blue-400 w-full' 
                                    type="text" 
                                    defaultValue={item.details[0].compound[0].header} /> : 
                                item.details[0].compound[0].header}
                            </p>
                            <p className='my-1 text-balance'>
                                <span className='font-semibold'>Text:</span>
                                <br />
                                {editable ? 
                                <input 
                                    onChange={(e) => {set.details[0].compound[0].text = e.target.value}} 
                                    className='border border-blue-400 w-full' 
                                    type="text" 
                                    defaultValue={item.details[0].compound[0].text} /> : 
                                item.details[0].compound[0].text}
                            </p>
                        </div>
                        
                        <div className='bg-gray-100 rounded-md my-2 p-4'>
                            <h2 className='text-lg font-semibold'>Conditions:</h2>
                            <p className='my-1'>
                                <span className='font-semibold'>Header:</span>
                                <br />
                                {editable ? 
                                <input 
                                    onChange={(e) => {set.details[0].conditionsconditions[0].header = e.target.value}} 
                                    className='border border-blue-400 w-full' 
                                    type="text" 
                                    defaultValue={item.details[0].conditions[0].header} /> : 
                                item.details[0].conditions[0].header}
                            </p>
                            <p className='my-1 text-balance'>
                                <span className='font-semibold'>Text:</span>
                                <br />
                                {editable ? 
                                <input 
                                    onChange={(e) => {set.details[0].conditions[0].text = e.target.value}} 
                                    className='border border-blue-400 w-full' 
                                    type="text" 
                                    defaultValue={item.details[0].conditions[0].text} /> : 
                                item.details[0].conditions[0].text}
                            </p>
                        </div>

                    </div> :
                    ""}

                </div>

                <p className='col-span-2'>
                    {editable ? 
                    <input 
                        onChange={(e) => {set.image = e.target.value}} 
                        className='border border-blue-400 w-full' 
                        type="text" 
                        defaultValue={item.image} /> :
                    <img className='max-w-25' src={item.image} alt="alt" />}
                </p>

                {editable ? 
                <button onClick={() => this.saveEditableSet("sets", item.id, set)} className='bg-green-200 hover:bg-green-400 rounded-md mx-2 max-h-56'>SAVE</button> : 
                <button onClick={() => this.setEditStatus()} className='bg-green-200 hover:bg-green-400 rounded-md mx-2 max-h-56'>EDIT</button>
                }
                <button onClick={() => this.deleteSet("products", item.id)} className='bg-red-200 hover:bg-red-400 rounded-md mx-2 max-h-56'>DELETE</button>

            </div>
        )
    }
}

export default SetsItem