import React, { PureComponent } from 'react'
import { deleteDataBaseItem, editDataBaseItem } from '../../services/Fetch'

class NewsArticle extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            item: this.props.item,
            editable: false,
            details: false
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

    saveEditableArticle = async (key, id, article) => { 
        editDataBaseItem(key, id, article)
        this.setState({ item: article })
        this.removeEditStatus();
    }

    deleteArticle = async (key, id) => {
        deleteDataBaseItem(key,id)
        this.props.requestForNews();
    }

    render() {
        const {item, editable, details} = this.state;
        
        let article = {
            id: item.id,
            date: item.date,
            image: item.image,
            header: item.header,
            text: item.text,
            details: [
                {
                    secondHeader: item.details[0].secondHeader,
                    fulltext: item.details[0].fulltext
                }
            ]
        }
        
        return (

            <div className='news__item grid grid-cols-8 gap-x-2 rounded-xl shadow-md my-2 bg-white p-4 content-center'>
                    
                <div className='col-span-4'>
                    
                    <p className='my-1'>
                        <span className='font-semibold'>Date:</span> 
                        <br/> 
                        {editable ? 
                        <input 
                            onChange={(e) => {article.date = e.target.value}} 
                            className='border border-blue-400 w-full' 
                            type="text" 
                            defaultValue={item.date} /> : 
                        item.date}                           
                    </p>
                    <p className='my-1'>
                        <span className='font-semibold'>Header:</span> 
                        <br/> 
                        {editable ? 
                        <input 
                            onChange={(e) => {article.header = e.target.value}} 
                            className='border border-blue-400 w-full' 
                            type="text" 
                            defaultValue={item.header} /> : 
                        item.header} 
                    </p>
                    <p className='my-1 text-balance'>
                        <span className='font-semibold'>Text:</span> 
                        <br/> 
                        {editable ? 
                        <input 
                            onChange={(e) => {article.text = e.target.value}} 
                            className='border border-blue-400 w-full' 
                            type="text" 
                            defaultValue={item.text} /> : 
                        item.text} 
                    </p>
                    
                    {details ?
                    <button 
                        onClick={() => this.hideDetails()} 
                        className='bg-blue-400 hover:bg-blue-700 text-white rounded-md p-1 my-2'>
                            Hide details
                    </button>:
                    <button 
                        onClick={() => this.showDetails()} 
                        className='bg-blue-400 hover:bg-blue-700 text-white rounded-md p-1 my-2'>
                            Show details
                    </button>}
                    
                    {details ?
                    <div key={"details"}>
                        <p className='my-1'>
                            <span className='font-semibold'>Second header:</span>
                            <br />
                            {editable ? 
                            <input 
                                onChange={(e) => {article.details[0].secondHeader = e.target.value}} 
                                className='border border-blue-400 w-full' 
                                type="text" 
                                defaultValue={item.details[0].secondHeader} /> : 
                            item.details[0].secondHeader}
                        </p>
                        <p className='my-1 text-balance'>
                            <span className='font-semibold'>Full text:</span>
                            <br />
                            {editable ? 
                            <input 
                                onChange={(e) => {article.details[0].fulltext = e.target.value}} 
                                className='border border-blue-400 w-full' 
                                type="text" 
                                defaultValue={item.details[0].fulltext} /> : 
                            item.details[0].fulltext}
                        </p>
                    </div> :
                    ""}
                </div>
                {editable ? 
                <input 
                    onChange={(e) => {article.image = e.target.value}} 
                    className='col-span-2 border border-blue-400 w-full' 
                    type="text" 
                    defaultValue={item.image} /> :
                <p className='col-span-2'><img className='max-w-25' src={item.image} alt="alt" /></p>}

                {editable ? 
                <button onClick={() => this.saveEditableArticle("news", item.id, article)} className='bg-green-200 hover:bg-green-400 rounded-md mx-4 py-2'>SAVE</button> : 
                <button onClick={() => this.setEditStatus()} className='bg-green-200 hover:bg-green-400 rounded-md mx-4 py-2'>EDIT</button>
                }
                <button onClick={() => this.deleteArticle("news", item.id)} className='bg-red-200 hover:bg-red-400 rounded-md mx-4 py-2'>DELETE</button>
            </div>

        )
    }
}

export default NewsArticle