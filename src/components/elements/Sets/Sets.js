import React, { PureComponent } from 'react'
import { getDataBaseInfo } from '../../services/Fetch'


class Sets extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            items: []
        }
    }

    // Получение данных из БД через обращение к методу getDataBaseInfo в компоненте fetch
    getSets = async () => {
        const key = "products";
        try {
            const data = await getDataBaseInfo(key);
            if (!data) return;
            this.setState({items: data[0].sets});
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    // Автоматический разовый вызов запроса из БД при подключении компонента
    componentDidMount(){
        this.getSets()
    }

    render() {

        let content = ``;

        // В состоянии полученном из БД
        let sets = this.state.items;

        content = sets.map((set, index) => {
            
            return(
						
                <div key={index} className="main__popular__card flex flex-col justify-between bg-white max-w-[435px] rounded-md">
                    <img
                        className="w-full"
                        src={set.image}
                        alt="popularImage"
                    />
                    <div className="popular__card__text p-5">
                        <p className="text-xl font-semibold">{set.name}</p>
                        <p className="text-gray-600">
                            {set.description}
                        </p>
                    </div>
                    <div className="popular__card__buy border-t-2 border-t-gray-300 flex">
                        <div className="popular__card__price p-3  basis-3/5 flex items-center border-r-2 border-r-gray-300">
                            <p className="text-xl text-red-500 font-semibold">${set.price}</p>
                        </div>
                        <div className="popular__card__cart px-2 basis-2/5 flex items-center justify-center">
                            <img className="mr-2" src="/images/cart.svg" alt="alt" />
                            In cart
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <>
            {content}
            </>
        )
    }
}

export default Sets