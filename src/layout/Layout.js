import React, { PureComponent } from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import Main from './main/Main'

class Layout extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			
		}
	}

	render() {
		return (
			<>
			<Header />
			<Main />
			<Footer />
			</>
		)
	}
}

export default Layout