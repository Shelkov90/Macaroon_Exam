import React, { PureComponent } from 'react'

class ReadySets extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <>
                <div class="main__breadcrumbs mt-10 mb-12">

                    <div class="breadcrumbs__inner flex justify-center">

                        <div class="breadcrumbs__item">
                            Homepage
                        </div>

                        <p class="text-blue-400 mx-3">&gt;&gt;</p>

                        <div class="breadcrumbs__item">
                            Catalogue
                        </div>

                        <p class="text-blue-400 mx-3">&gt;&gt;</p>

                        <div class="breadcrumbs__item text-blue-400">
                            Ready-made sets
                        </div>

                    </div>

                </div>

                <div class="main__readySets">

                <div class="readySets__inner mb-20">

                    <div class="article__header text-4xl text-center font-semibold mb-10">
                        Ready-made sets
                    </div>

                    <div class="article__tags mb-10">

                        <div class="tags__inner flex flex-wrap gap-y-2">

                            <div class="tags__item bg-orange-100 rounded-2xl py-1 px-3 mx-1 text-sm text-gray-600">
                                14 February
                            </div>
                            <div class="tags__item bg-orange-100 rounded-2xl py-1 px-3 mx-1 text-sm text-gray-600">
                                Spring
                            </div>
                            <div class="tags__item bg-orange-100 rounded-2xl py-1 px-3 mx-1 text-sm text-gray-600">
                                Presents for 14-th February
                            </div>
                            <div class="tags__item bg-orange-100 rounded-2xl py-1 px-3 mx-1 text-sm text-gray-600">
                                Wedding
                            </div>
                            <div class="tags__item bg-orange-100 rounded-2xl py-1 px-3 mx-1 text-sm text-gray-600">
                                New Year
                            </div>
                            <div class="tags__item bg-orange-100 rounded-2xl py-1 px-3 mx-1 text-sm text-gray-600">
                                Birthday
                            </div>
                            <div class="tags__item bg-orange-100 rounded-2xl py-1 px-3 mx-1 text-sm text-gray-600">
                                1-st September
                            </div>

                        </div>

                    </div>

                    <div class="main__readySets__cards grid grid-cols-2 justify-items-stretch gap-y-5 gap-x-7 mb-8 sm:grid-cols-3">

                        <div class="main__readySets__card flex flex-col justify-between bg-white max-w-[435px] rounded-md">

                            <img class="w-full" src="images/Popular1.png" alt="popularImage" />

                            <div class="popular__card__text p-5">
                                <p class="text-xl font-semibold">Heart</p>
                                <p class="text-gray-600">
                                    24 pieces in a heart-shaped box. <br/>
                                    Assorted 6 flavors
                                </p>
                            </div>

                            <div class="popular__card__buy border-t-2 border-t-gray-300 flex">

                                <div class="popular__card__price p-3  basis-3/5 flex items-center border-r-2 border-r-gray-300">
                                    <p class="text-xl text-red-500 font-semibold">$200</p>
                                </div>

                                <div class="popular__card__cart px-2 basis-2/5 flex items-center justify-center">
                                    <img class="mr-2" src="images/cart.svg" alt="alt" />
                                    In cart
                                </div>

                            </div>

                        </div>

                        <div class="main__readySets__card flex flex-col justify-between bg-white max-w-[435px] rounded-md">
                            <img class="w-full" src="images/Popular2.png" alt="popularImage"/>
                            <div class="popular__card__text p-5">
                                <p class="text-xl font-semibold">Beauty will save the world</p>
                                <p class="text-gray-600">
                                    Set 16 pcs. Flavors: Strawberry - Basil, Coconut, Blue Cheese, Parmesan
                                </p>
                            </div>
                            <div class="popular__card__buy border-t-2 border-t-gray-300 flex">
                                <div class="popular__card__price p-3  basis-3/5 flex items-center border-r-2 border-r-gray-300">
                                    <p class="text-xl text-red-500 font-semibold">$60</p>
                                </div>
                                <div class="popular__card__cart px-2 basis-2/5 flex items-center justify-center">
                                    <img class="mr-2" src="images/cart.svg" alt="alt"/>
                                    In cart
                                </div>
                            </div>
                        </div>

                        <div class="main__readySets__card flex flex-col justify-between bg-white max-w-[435px] rounded-md">
                            <img class="w-full" src="images/Popular3.png" alt="popularImage"/>
                            <div class="popular__card__text p-5">
                                <p class="text-xl font-semibold">Round set</p>
                                <p class="text-gray-600">
                                    40 macaroons in a round box with a personal inscription
                                </p>
                            </div>
                            <div class="popular__card__buy border-t-2 border-t-gray-300 flex">
                                <div class="popular__card__price p-3  basis-3/5 flex items-center border-r-2 border-r-gray-300">
                                    <p class="text-xl text-red-500 font-semibold">$240</p>
                                </div>
                                <div class="popular__card__cart px-2 basis-2/5 flex items-center justify-center">
                                    <img class="mr-2" src="images/cart.svg" alt="alt"/>
                                    In cart
                                </div>
                            </div>
                        </div>

                        <div class="main__readySets__card flex flex-col justify-between bg-white max-w-[435px] rounded-md">
                            <img class="w-full" src="images/Popular4.png" alt="popularImage"/>
                            <div class="popular__card__text p-5">
                                <p class="text-xl font-semibold">Set for 9</p>
                                <p class="text-gray-600">
                                    Set of 9 pieces in a square box. Flavors: chocolate, pistachio, cherry
                                </p>
                            </div>
                            <div class="popular__card__buy border-t-2 border-t-gray-300 flex">
                                <div class="popular__card__price p-3  basis-3/5 flex items-center border-r-2 border-r-gray-300">
                                    <p class="text-xl text-red-500 font-semibold">$70</p>
                                </div>
                                <div class="popular__card__cart px-2 basis-2/5 flex items-center justify-center">
                                    <img class="mr-2" src="images/cart.svg" alt="alt"/>
                                    In cart
                                </div>
                            </div>
                        </div>

                        <div class="main__readySets__card flex flex-col justify-between bg-white max-w-[435px] rounded-md">
                            <img class="w-full" src="images/Popular5.png" alt="popularImage"/>
                            <div class="popular__card__text p-5">
                                <p class="text-xl font-semibold">Set for 16</p>
                                <p class="text-gray-600">
                                    Set 16 pcs. Flavors: salted caramel, blue cheese, parmesan, chocolate
                                </p>
                            </div>
                            <div class="popular__card__buy border-t-2 border-t-gray-300 flex">
                                <div class="popular__card__price p-3  basis-3/5 flex items-center border-r-2 border-r-gray-300">
                                    <p class="text-xl text-red-500 font-semibold">$110</p>
                                </div>
                                <div class="popular__card__cart px-2 basis-2/5 flex items-center justify-center">
                                    <img class="mr-2" src="images/cart.svg" alt="alt"/>
                                    In cart
                                </div>
                            </div>
                        </div>

                        <div class="main__readySets__card flex flex-col justify-between bg-white max-w-[435px] rounded-md">
                            <img class="w-full" src="images/Popular3.png" alt="popularImage"/>
                            <div class="popular__card__text p-5">
                                <p class="text-xl font-semibold">Heart</p>
                                <p class="text-gray-600">
                                    24 pieces in a heart-shaped box. <br/>
                                    Assorted 6 flavors
                                </p>
                            </div>
                            <div class="popular__card__buy border-t-2 border-t-gray-300 flex">
                                <div class="popular__card__price p-3  basis-3/5 flex items-center border-r-2 border-r-gray-300">
                                    <p class="text-xl text-red-500 font-semibold">$190</p>
                                </div>
                                <div class="popular__card__cart px-2 basis-2/5 flex items-center justify-center">
                                    <img class="mr-2" src="images/cart.svg" alt="alt"/>
                                    In cart
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="main__readySets__more flex justify-center">
                        <div class="more__button border border-blue-400 py-3 px-8 rounded-md hover:bg-blue-400 hover:text-white hover:cursor-pointer">
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