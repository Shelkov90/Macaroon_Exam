import React, { PureComponent } from 'react'
import Sets from '../../elements/Sets/Sets'

class ReadySets extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <>
                <div className="main__breadcrumbs mt-10 mb-12">

                    <div className="breadcrumbs__inner flex justify-center">

                        <div className="breadcrumbs__item">
                            Homepage
                        </div>

                        <p className="text-blue-400 mx-3">&gt;&gt;</p>

                        <div className="breadcrumbs__item">
                            Catalogue
                        </div>

                        <p className="text-blue-400 mx-3">&gt;&gt;</p>

                        <div className="breadcrumbs__item text-blue-400">
                            Ready-made sets
                        </div>

                    </div>

                </div>

                <div className="main__readySets">

                <div className="readySets__inner mb-20">

                    <div className="article__header text-4xl text-center font-semibold mb-10">
                        Ready-made sets
                    </div>

                    <div className="article__tags mb-10">

                        <div className="tags__inner flex flex-wrap gap-y-2">

                            <div className="tags__item bg-orange-100 rounded-2xl py-1 px-3 mx-1 text-sm text-gray-600">
                                14 February
                            </div>
                            <div className="tags__item bg-orange-100 rounded-2xl py-1 px-3 mx-1 text-sm text-gray-600">
                                Spring
                            </div>
                            <div className="tags__item bg-orange-100 rounded-2xl py-1 px-3 mx-1 text-sm text-gray-600">
                                Presents for 14-th February
                            </div>
                            <div className="tags__item bg-orange-100 rounded-2xl py-1 px-3 mx-1 text-sm text-gray-600">
                                Wedding
                            </div>
                            <div className="tags__item bg-orange-100 rounded-2xl py-1 px-3 mx-1 text-sm text-gray-600">
                                New Year
                            </div>
                            <div className="tags__item bg-orange-100 rounded-2xl py-1 px-3 mx-1 text-sm text-gray-600">
                                Birthday
                            </div>
                            <div className="tags__item bg-orange-100 rounded-2xl py-1 px-3 mx-1 text-sm text-gray-600">
                                1-st September
                            </div>

                        </div>

                    </div>

                    <div className="main__readySets__cards grid grid-cols-2 justify-items-stretch gap-y-5 gap-x-7 mb-8 sm:grid-cols-3">

                        <Sets />

                    </div>

                    <div className="main__readySets__more flex justify-center">
                        <div className="more__button border border-blue-400 py-3 px-8 rounded-md hover:bg-blue-400 hover:text-white hover:cursor-pointer">
                            <p>See all</p>
                        </div>
                    </div>

                </div>

                </div>
            </>
        )
    }
}

export default ReadySets