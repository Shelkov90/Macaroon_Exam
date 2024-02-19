import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { getUserByEmail } from '../../services/Fetch';
import Register from './Register';
import Homepage from '../../pages/homepage/Homepage';




class Login extends Component {
	constructor(props) {
	
	super(props)
	
	this.state = {
		email: '',
		password: '',
		emailError: '',
		passwordError: '',
		showModal: false,
		isLoggedIn: false,
		redirectToRegistration: false, // Новое состояние для перенаправления на страницу регистрации

	};
}


	showModal = () => {
		this.setState({ showModal: true });
	};

	hideModal = () => {
		this.setState({ showModal: false });
	};

	validateEmail = () => {
		const { email } = this.state;
		const isValid = /\S+@\S+\.\S+/.test(email);
		const errorMessage = isValid ? '' : 'Please enter a valid email address';
		this.setState({ emailError: errorMessage });
		return isValid;
	};

	validatePassword = () => {
		const { password } = this.state;
		const isValid = password.length >= 6;
		const errorMessage = isValid ? '' : 'Password must be at least 6 characters long';
		this.setState({ passwordError: errorMessage });
		return isValid;
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		const isValidEmail = this.validateEmail();
		const isValidPassword = this.validatePassword();

		if (isValidEmail && isValidPassword) {
			const { email, password } = this.state;
			try {
				const existingUserResponse = await getUserByEmail(email);
				if (existingUserResponse && existingUserResponse.length > 0) {
					// Пользователь существует, проверяем пароль
					const user = existingUserResponse[0];
					if (user.password === password) {
						// Успешный вход
						this.setState({ isLoggedIn: true });
						this.props.setUserEmail(email);

						// Перенаправление на предыдущую страницу, если она существует
						const { state } = this.props.location;
						const redirect = state && state.from && state.from.pathname ? state.from.pathname : '/';
						this.props.history.push(redirect);
					} else {
						// Неправильный пароль
						this.setState({ passwordError: 'Incorrect password' });
					}
				} else {
					// Пользователь не существует
					this.setState({ redirectToRegistration: true });
				}
			} catch (error) {
				console.error('Error checking user existence:', error);
			}
		}
	};


	handleInputChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		const { email, password, emailError, passwordError, isLoggedIn, redirectToRegistration } = this.state;
		const { showLoginForm } = this.props;

		if (isLoggedIn) {
			return <Homepage />; // Перенаправляем на главную страницу, если пользователь уже вошел в систему
		}

		if (redirectToRegistration) {
			return <Register />; // Перенаправляем на страницу регистрации, если пользователь не существует
		}

		return (
			<>
				{showLoginForm && (
					<div className="fixed inset-0 flex items-center justify-center z-50">
						<div className="absolute inset-0 bg-black opacity-50"></div>
						<div className="relative bg-white rounded-lg shadow-lg p-8">
							<button className="absolute -top-2 -right-2 p-2" onClick={this.props.handleCloseLoginForm}>
								<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
							<div className="flex justify-center items-center">
								<div className='login_form' style={{ width: '570px', backgroundColor: '#F7EBE5', padding: '20px', margin: 'auto' }}>
									<h2 className='text-3xl text-center font-semibold mt-10 mb-12'>Login</h2>
									<form className="flex flex-col justify-center mb-6" onSubmit={this.handleSubmit}>
										<div className="form__wholesale mb-10">
											<div className="mb-2 flex flex-col">
												<label className="text-sm ml-20" htmlFor="email">Your email</label>
												<input
													className="w-full p-2 mt-2 mb-4 mx-auto"
													style={{ maxWidth: '370px' }}
													name="email"
													type="email"
													placeholder="Your email"
													value={email}
													onChange={this.handleInputChange}
													onBlur={this.validateEmail}
													pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
													required
												/>
												{emailError && <p className="text-red-500 ml-20">{emailError}</p>}
											</div>
											<div className="mb-2 flex flex-col">
												<label className="text-sm ml-20" htmlFor="password">Your password</label>
												<input
													className="w-full p-2 mt-2 mx-auto"
													style={{ maxWidth: '370px' }}
													name="password"
													type="password"
													placeholder="Your password"
													value={password}
													onChange={this.handleInputChange}
													onBlur={this.validatePassword}
													pattern=".{6,}"
													required
												/>
												{passwordError && <p className="text-red-500 ml-20">{passwordError}</p>}
											</div>
										</div>

										<button className="bg-red-500 text-white py-4 px-10 mx-auto" style={{ width: '370px' }} type="submit">Login</button>


									</form>
									<div className="form__lastText flex justify-center text-sm mb-12">
										<div>
											<p>Not registered yet?</p>
											<NavLink to="/Register">
												<p className="text-red-400 text-center text-lg font-bold mt-2 ">Register</p>
											</NavLink>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</>
		);
	}
}

export default Login;