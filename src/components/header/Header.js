import React, { PureComponent } from "react";

class Header extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <header>
        <div className="header__banner bg-blue-100 row-auto">
          <div className="flex items-center justify-between py-2 max-w-\[1400px\] mx-auto">
            <img src="images/leftArrow.svg" alt="alt" />

            <div className="header__banner__inner items-center flex">
              {/* 		
						<img className="mr-3" src="images/banner1.png" alt="alt">
						<p className="uppercase text-gray-600">доставка в день заказа</p> */}

              <img className="mr-3" src="images/banner2.png" alt="alt" />
              <p className="uppercase text-gray-600">
                оптовые поставки от производителя
              </p>

              {/* <img className="mr-3" src="images/banner3.png" alt="alt">
						<p className="uppercase text-gray-600">всегда свежее</p>

						<img className="mr-3" src="images/banner4.png" alt="alt">
						<p className="uppercase text-gray-600">миндальная мука и натуральные ингридиенты</p> */}
            </div>

            <img src="images/rightArrow.svg" alt="alt" />
          </div>
        </div>

        <div className="header__navigation bg-orange-50">
          <div className="flex justify-between text-sm max-w-\[1400px\] mx-auto py-3 px-2">
            <div className="flex basis-3/6">
              <div className="mr-5">Fresh guarantee</div>
              <div className="mr-5">Delivery and payments</div>
              <div className="mr-5">Wholesale supply</div>
              <div className="mr-5">Contacts</div>
            </div>

            <div className="flex basis-2/6">
              <div className="flex items-center mr-10">
                <img className="mr-2" src="images/place.svg" alt="alt" />
                Odesa, UKR
              </div>
              <div className="flex items-center mr-10">
                <img className="mr-2" src="images/phone.svg" alt="alt" />
                +380507375982
              </div>
              <div className="flex items-center mr-10">
                <img className="mr-2" src="images/bag.svg" alt="alt" />
                Cart
              </div>
            </div>

            <div className="flex items-center basis-1/6 justify-end">
              <div className="ml-4">
                <img className="size-8" src="images/tg.svg" alt="alt" />
              </div>
              <div className="ml-4">
                <img className="size-6" src="images/instagram.png" alt="alt" />
              </div>
              <div className="ml-4">
                <img className="size-6" src="images/fb_logo.png" alt="alt" />
              </div>
            </div>
          </div>
        </div>

        <div className="header__menu bg-white py-3">
          <div className="header__menu__inner max-w-\[1400px\] mx-auto flex justify-around items-center uppercase">
            <div>sweet days</div>
            <div>gift Baskets</div>
            <div>assemble the set</div>
            <div>
              <img className="size-32" src="images/logo.svg" alt="logo" />
            </div>
            <div>create design</div>
            <div>for companies</div>
            <div>all catalogue</div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
