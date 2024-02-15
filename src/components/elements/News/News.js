import React, { PureComponent } from 'react'
import { getAllNews } from '../../services/Fetch'


class News extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            full: false,
            items: []
        }
    }

    // Получение данных из БД через обращение к методу getAllNews в компоненте fetch
    getNews = async () => {
        try {
            const data = await getAllNews();
            if (!data) return;
            this.setState({items: data});
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    // Автоматический разовый вызов запроса из БД при подключении компонента
    componentDidMount(){
        this.getNews()
    }

    render() {
        let content = ``;

        // Если нужно выводить только три новости метод обрезает массив, если все - оставляет в состоянии полученном из БД
        let articles = this.state.full ? this.state.items : this.state.items.slice(0, 3);

        content = articles.map((article, index) => {
            return(
                <div key={index} className="main__news__article bg-white max-w-[370px]">
                    <img src={article.image} alt="newsImage" />
                    <div className="news__article__inner p-5">
                        <p className="news__article__date mb-2 text-sm text-gray-400">
                            {article.date}
                        </p>
                        <p className="news__article__header mb-2 font-semibold text-xl">
                            {article.header}
                        </p>
                        <p className="news__article__text">
                            {article.text}
                        </p>
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

export default News