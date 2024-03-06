import React, { PureComponent } from "react";
import { NavLink, Link } from "react-router-dom";
import HeaderBanner from "../../components/elements/Banner/HeaderBanner";
import { getDataBaseInfo } from "../../components/services/Fetch";
import CartIcon from "../../components/pages/Cart/CartIcon";



class Header extends PureComponent {
  constructor(props) {
		  super(props)

      this.state = {
        cartLength: 0,
      }
    }

  getCartItems = async () => {
    const data = await getDataBaseInfo("cart");
    if (!data) return;
    this.setState({ cartLength: data.length });
  }

	componentDidMount(){
		this.getCartItems()
	}

  render() {
    const {userEmail, isAdmin} = this.props;
    const { cartLength } = this.state;


    return (
      <>

      <header className="big__header hidden sm:block">

        <HeaderBanner />

        <div className="header__navigation bg-orange-50">
          <div className="flex justify-between items-center text-sm max-w-[1170px] mx-auto py-3">
            
              <nav className="flex">
                <div className="mr-5"><NavLink to="/Guarantee">Fresh guarantee</NavLink></div>
                <div className="mr-5"><NavLink to="/Delivery">Delivery & payments</NavLink></div>
                <div className="mr-5"><NavLink to="/Wholesale">Wholesale supply</NavLink></div>
                <div className="mr-5"><NavLink to="/Contacts">Contacts</NavLink></div>
              </nav>
            
            <div className="flex justify-between basis-1/3 mr-4">
              <div className="flex items-center">
                <img className="mr-2" src="/images/place.svg" alt="alt" />
                Odesa, UKR
              </div>

              {userEmail ? 
              (
                <div className="flex justify-evenly items-center mr-4">
                  <p className="text-balance">Welcome, <span className="underline italic text-blue-600">{userEmail}</span></p>
                  {isAdmin ? <NavLink to="/Admin" className="border rounded-xl bg-blue-400 hover:bg-blue-500 p-2 text-white" >Admin</NavLink> : ''}
                </div>
              ) : 
              (
                <div className="cursor-pointer" onClick={this.props.showLoginForm}>
                  <div className="flex items-center">
                    <img className="mr-2" src="/images/login1.png" alt="alt" />
                    <p>Login</p>
                  </div>
                </div>
              )}

              <CartIcon cartLength={cartLength} />
            </div>

            <div className="flex items-center justify-end">
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

      </header>

      <header className="small__header block sm:hidden min-w-[320px]">

        <div className="small__header__navigation bg-orange-50">

                <div className="flex items-center justify-between p-4">
                    
                    <div>
                      <img src="/images/hidden_menu_button.svg" alt="hidden_menu"/>
                    </div>

                    <div>
                      <Link to='/'><img src="/images/mini_logo.svg" alt="small_logo"/></Link>
                    </div>
                    
                    <CartIcon cartLength={cartLength} />
                </div>

        </div>

      </header>
      </>
    );
  }
}


export default Header;
