import React, { PureComponent } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Main from "./main/Main";
import Login from "../components/elements/Forms/Login";
import Register from "../components/elements/Forms/Register";

class Layout extends PureComponent {
	state = {
		userEmail: null, // или установите начальное значение, если адрес электронной почты не определен
	};

	setUserEmail = (email) => {
		console.log("Email received:", email);
		this.setState({ userEmail: email });
	};


	render() {
		return (
			<>
				<Header userEmail={this.state.userEmail} />
				<Login setUserEmail={this.setUserEmail} />
				<Register />
				<Main />
				<Footer />
			</>
		);
	}
}

export default Layout;