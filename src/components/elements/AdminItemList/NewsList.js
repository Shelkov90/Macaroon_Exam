import React, { PureComponent } from 'react'
import NewsArticle from './NewsArticle'
import CreateNewsArticle from './CreateNewsArticle'

class NewsList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            newsList: [],
            showNewArticleForm: false
        }
    }

    componentDidMount() {
        this.setState({ newsList: this.props.news })
    }

    componentDidUpdate = async(prevProps) => {
        if(this.props.news !== prevProps.news){
            this.setState({ newsList: this.props.news })
        } 
    }

    createNewItem = () => {
        this.setState({ 
            showNewArticleForm: true
         })
    }

    closeNewItemForm = () => {
        this.setState({ 
            showNewArticleForm: false
         })
    }

    addNewItem = (article) => {
        this.setState({ 
            newsList: [...this.state.newsList, article],
            showNewArticleForm: false
         })

    }

    render() {

        const { newsList, showNewArticleForm } = this.state;
        
        let content = '';

        if (newsList) {
            content = newsList.map((item, index) => {
                return (
                    <NewsArticle key={`news${index}`} item={item} index={index} />
                )
            })
        };

        return (
            <>
                <div className='flex justify-between items-center'>
                    <h2 key={"news__header"} className='text-2xl text-center font-semibold my-4'>News - {newsList.length} items:</h2>
                    <button onClick={this.createNewItem} className=' bg-green-200 text-blue-500 font-semibold rounded-md my-5 px-4 py-2 cursor-pointer hover:bg-green-400'>ADD NEW</button>
                </div>
                {showNewArticleForm ? <CreateNewsArticle addNewItem={this.addNewItem} closeNewItemForm={this.closeNewItemForm} /> : ''}
                {content}
            </>
        )
    }
}

export default NewsList