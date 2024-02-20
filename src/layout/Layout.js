import React, { PureComponent } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Main from "./main/Main";
import Login from "../components/elements/Forms/Login";
import Register from "../components/elements/Forms/Register";

class Layout extends PureComponent {
	state = {
		showLoginForm: false,
		showRegisterForm: false,
		userEmail: '', // или установите начальное значение, если адрес электронной почты не определен
	};

	setUserEmail = (email) => {
		console.log("Email received:", email);
		this.setState({ userEmail: email });
	};

	showLoginForm = () => {
		this.setState({ showLoginForm: true });
	}

	showRegisterForm = () => {
		this.setState({ showRegisterForm: true });
	}

	redirectToLoginForm = () => {
		this.setState({ 
			showLoginForm: true,
			showRegisterForm: false
		});
	}

	redirectToRegistrationForm = () => {
		this.setState({ 
			showLoginForm: false,
			showRegisterForm: true
		});
	}

	handleCloseLoginForm = () => {
		this.setState({ showLoginForm: false });
	};

	handleCloseRegisterForm = () => {
		this.setState({ showRegisterForm: false });
	};

	render() {
		return (
			<>
				<Header userEmail={this.state.userEmail} showLoginForm={this.showLoginForm}/>
				{this.state.showLoginForm ? <Login setUserEmail={this.setUserEmail} handleCloseLoginForm={this.handleCloseLoginForm} redirectToRegistrationForm={this.redirectToRegistrationForm} /> : ''}
				{this.state.showRegisterForm ? <Register handleCloseRegisterForm={this.handleCloseRegisterForm} redirectToLoginForm={this.redirectToLoginForm} /> : ''}
				<Main />
				<Footer />
			</>
		);
	}
}

export default Layout;