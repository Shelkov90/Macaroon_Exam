import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import HeaderBanner from "../../components/elements/Banner/HeaderBanner";
import Login from "../../components/elements/Forms/Login";

class Header extends PureComponent {
  state = {
    showLoginForm: false,
    userEmail: '' // Добавляем состояние для хранения имени пользователя
  };

  handleLoginClick = () => {
    this.setState({ showLoginForm: true });
  };

  handleCloseLoginForm = () => {
    this.setState({ showLoginForm: false });
  };

  setUserEmail = (email) => {
    this.setState({ userEmail: email }); // Устанавливаем имя пользователя в состояние
  };

  render() {
    const { showLoginForm, userEmail } = this.state;

    return (
      <header>

        <HeaderBanner />

        <div className="header__navigation bg-orange-50">
          <div className="flex justify-between items-center text-sm max-w-[1170px] mx-auto py-3 px-2">
            
              <nav className="flex basis-3/6">
                <div className="mr-5"><NavLink to="/Guarantee">Fresh guarantee</NavLink></div>
                <div className="mr-5"><NavLink to="/Delivery">Delivery & payments</NavLink></div>
                <div className="mr-5"><NavLink to="/Wholesale">Wholesale supply</NavLink></div>
                <div className="mr-5"><NavLink to="/Contacts">Contacts</NavLink></div>
              </nav>
            
            <div className="flex basis-2/6">
              <div className="flex items-center mr-10">
                <img className="mr-2" src="/images/place.svg" alt="alt" />
                Odesa, UKR
              </div>

              {userEmail ? (
                <div className="flex items-center mr-10">
                  <p>Welcome, {userEmail}</p>
                </div>
              ) : (
                <div className="cursor-pointer" onClick={this.handleLoginClick}>
                  <div className="flex items-center mr-10">
                    <img className="mr-2" src="/images/login1.png" alt="alt" />
                    <p>Login</p>
                  </div>
                </div>

              )}

              <div className="flex items-center mr-10">
                <img className="mr-2" src="/images/bag.svg" alt="alt" />
                Cart
              </div>
            </div>

            <div className="flex items-center basis-1/6 justify-end">
              <div className="ml-4">
                <img className="size-8" src="/images/tg.svg" alt="alt" />
              </div>
              <div className="ml-4">
                <img className="size-6" src="/images/instagram.png" alt="alt" />
              </div>
              <div className="ml-4">
                <img className="size-6" src="/images/fb_logo.png" alt="alt" />
              </div>
            </div>
          </div>
        </div>

        <div className="header__menu bg-white py-3 px-2">
          <nav className="header__menu__inner max-w-[1170px] mx-auto flex justify-between items-center uppercase">
            <div><NavLink to="/Sweet">sweet days</NavLink></div>
            <div><NavLink to="/Gift">gift Baskets</NavLink></div>
            <div><NavLink to="/">assemble the set</NavLink></div>
            <div>
              <NavLink to='/'><img className="size-32" src="/images/logo.svg" alt="logo" /></NavLink>
            </div>
            <div><NavLink to="/">create design</NavLink></div>
            <div><NavLink to="/ForCompanies">for companies</NavLink></div>
            <div><NavLink to="/Catalogue">all catalogue</NavLink></div>
          </nav>
        </div>

        {showLoginForm && <Login showLoginForm={showLoginForm} handleCloseLoginForm={this.handleCloseLoginForm} setUserEmail={this.setUserEmail} />}

      </header>
    );
  }
}

export default Header;
