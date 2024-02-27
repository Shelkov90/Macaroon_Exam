import React, { PureComponent } from 'react'

class CreateNewsArticle extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            date: 'dd.mm.yyyy',
            image: '/images/imageName.png',
            header: 'Header text',
            text: 'Article text',
            secondHeader: 'Second header',
            fulltext: 'Full text',
            isCanceled: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e);
    }

    render() {
        const { date, image, header, text, secondHeader, fulltext, isCanceled } = this.state;

        if (isCanceled) return null;

        return (
            <form onSubmit={this.handleSubmit}>
                <div className='news__item grid grid-cols-8 gap-x-2 rounded-xl shadow-md my-2 bg-white p-4 content-center'>
                    <div className='col-span-4'>

                        <p className='my-1'>
                            <span className='font-semibold'>Date:</span>
                            <br />

                            <input
                                onChange={(e) => this.setState({ date: e.target.value })}
                                className='border border-blue-400 w-full'
                                type="text"
                                value={date} />

                        </p>
                        <p className='my-1'>
                            <span className='font-semibold'>Header:</span>
                            <br />

                            <input
                                onChange={(e) => this.setState({ header: e.target.value })}
                                className='border border-blue-400 w-full'
                                type="text"
                                value={header} />

                        </p>
                        <p className='my-1 text-balance'>
                            <span className='font-semibold'>Text:</span>
                            <br />

                            <input
                                onChange={(e) => this.setState({ text: e.target.value })}
                                className='border border-blue-400 w-full'
                                type="text"
                                value={text}/>

                        </p>

                        <p className='my-2 underline text-lg font-semibold'>Details:</p>

                        <div>
                            <p className='my-1'>
                                <span className='font-semibold'>Second header:</span>
                                <br />

                                <input
                                    onChange={(e) => this.setState({ secondHeader: e.target.value })}
                                    className='border border-blue-400 w-full'
                                    type="text"
                                    value={secondHeader} />

                            </p>
                            <p className='my-1 text-balance'>
                                <span className='font-semibold'>Full text:</span>
                                <br />

                                <input
                                    onChange={(e) => this.setState({ fulltext: e.target.value })}
                                    className='border border-blue-400 w-full'
                                    type="text"
                                    value={fulltext} />
                            </p>
                        </div>

                    </div>

                    <input
                        onChange={(e) => this.setState({ image: e.target.value })}
                        className='col-span-2 border border-blue-400 w-full'
                        type="text"
                        value={image} />


                    <button type="submit" className='bg-green-200 hover:bg-green-400 rounded-md mx-4 py-2'>SAVE</button>

                    <button onClick={() => this.setState({ isCanceled: true })} className='bg-red-200 hover:bg-red-400 rounded-md mx-4 py-2'>CANCEL</button>

                </div>
            </form>
        )
    }
}

export default CreateNewsArticle