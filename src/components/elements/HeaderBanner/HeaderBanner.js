import React, { PureComponent } from "react";
import { getDataBaseInfo } from "../../services/Fetch";

class HeaderBanner extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      current: 0,
      items: [],
    };
  }

  // Получение данных из БД через обращение к методу getDataBaseInfo в компоненте fetch
  getBanners = async () => {
    const key = "banners";
    try {
      const data = await getDataBaseInfo(key);
      if (!data) return;
      this.setState({ items: data });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Автоматический разовый вызов запроса из БД при подключении компонента
  componentDidMount() {
    this.getBanners();
  }

  handleClickNext = () => {
    this.setState({ current: this.state.current + 1 });
    
    if(this.state.current > 3) {
        this.setState({ current: 0 });
    }
  }

  handleClickPrev = () => {
    this.setState({ current: this.state.current - 1 });

    if(this.state.current < 0) {
        this.setState({ current: 3 });
    }
  }

  render() {
    const {current, items} = this.state;

    return (
      <>
        <div className="header__banner bg-blue-100 row-auto hidden xl:block">
          <div className="flex items-center justify-between py-2 max-w-[1170px] mx-auto px-2">
            <img className="cursor-pointer" src="/images/leftArrow.svg" alt="alt" onClick={this.handleClickPrev} />
            <div className="header__banner__inner items-center flex">
                <img className="mr-3" src={items[current]?.image} alt="alt" />
                <p className="uppercase text-gray-600">{items[current]?.text}</p>
            </div>
            <img className="cursor-pointer" src="/images/rightArrow.svg" alt="alt" onClick={this.handleClickNext} />
          </div>
        </div>
      </>
    );
  }
}

export default HeaderBanner;
