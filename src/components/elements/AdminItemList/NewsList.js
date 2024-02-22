import React, { PureComponent } from 'react'

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
                    <div key={index} className='news__item grid grid-cols-8 border my-2 bg-white p-4 items-center'>
                        <p>#{index + 1}</p>
                        <p>
                            <span className='font-semibold'>Date:</span> 
                            <br/> 
                            {item.date}
                        </p>
                        <p className='col-span-2'>
                            <span className='font-semibold'>Header:</span> 
                            <br/> 
                            {item.header}
                        </p>
                        <p className='col-span-2'><img className='max-w-25' src={item.image} alt="alt" /></p>

                        <button className='bg-green-200 hover:bg-green-400 rounded-md mx-4 py-2'>EDIT</button>
                        <button className='bg-red-200 hover:bg-red-400 rounded-md mx-4 py-2'>DELETE</button>
                    </div>
                )
            })
        };

        return (
            <>
                {content}
            </>
        )
    }
}

export default NewsList