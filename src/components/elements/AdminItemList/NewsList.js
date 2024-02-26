import React, { PureComponent } from 'react'
import NewsArticle from './NewsArticle'
import { getDataBaseInfo } from '../../services/Fetch'

class NewsList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            newsList: []
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

    requestForNews = async () => {
        const data = await getDataBaseInfo("news");
        this.setState({ newsList: data })
    }

    render() {

        const { newsList } = this.state;
        
        let content = '';

        if (newsList) {
            content = newsList.map((item, index) => {
                return (
                    <NewsArticle key={`news${index}`} item={item} index={index} requestForNews={this.requestForNews} />
                )
            })
        };

        return (
            <>
                <h2 key={"news__header"} className='text-2xl text-center font-semibold my-4'>News:</h2>
                {content}
            </>
        )
    }
}

export default NewsList