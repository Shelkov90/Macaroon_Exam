import React, { PureComponent } from 'react'
import NewsArticle from './NewsArticle'

class NewsList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        
        let content = '';

        if (this.props.news) {
            content = this.props.news.map((item, index) => {
                return (
                    <NewsArticle item={item} index={index}/>
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