import React, { Component } from 'react';
import { addUserToDatabase, getUserByEmail } from '../../services/Fetch';

class Register extends Component {
	state = {
		name: '',
		phone: '',
		email: '',
		city: '',
		company: '',
		password: '',
		nameError: '',
		phoneError: '',
		emailError: '',
		cityError: '',
		companyError: '',
		passwordError: '',
		userAdded: false,
		registrationSuccess: false,
	};

	validateName = () => {
		const { name } = this.state;
		const isValid = /^[a-zA-Z\s]*$/.test(name);
		const errorMessage = isValid ? '' : 'Please enter a valid name';
		this.setState({ nameError: errorMessage });
		return isValid;
	};

	validatePhone = () => {
		const { phone } = this.state;
		const isValid = /^\d{10}$/.test(phone);
		const errorMessage = isValid ? '' : 'Please enter a valid 10-digit phone number';
		this.setState({ phoneError: errorMessage });
		return isValid;
	};

	validateEmail = () => {
		const { email } = this.state;
		const isValid = /\S+@\S+\.\S+/.test(email);
		const errorMessage = isValid ? '' : 'Please enter a valid email address';
		this.setState({ emailError: errorMessage });
		return isValid;
	};

	validateCity = () => {
		const { city } = this.state;
		const isValid = /^[a-zA-Z\s]*$/.test(city);
		const errorMessage = isValid ? '' : 'Please enter a valid city name';
		this.setState({ cityError: errorMessage });
		return isValid;
	};

	validateCompany = () => {
		const { company } = this.state;
		const isValid = /^[a-zA-Z\s]*$/.test(company);
		const errorMessage = isValid ? '' : 'Please enter a valid company name';
		this.setState({ companyError: errorMessage });
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
		const {
			name,
			phone,
			email,
			city,
			company,
			password,
		} = this.state;

		const isValidName = this.validateName();
		const isValidPhone = this.validatePhone();
		const isValidEmail = this.validateEmail();
		const isValidCity = this.validateCity();
		const isValidCompany = this.validateCompany();
		const isValidPassword = this.validatePassword();

		if (isValidName && isValidPhone && isValidEmail && isValidCity && isValidCompany && isValidPassword) {
			try {
				const existingUserResponse = await getUserByEmail(email);
				if (existingUserResponse && existingUserResponse.length > 0) {
					console.log('User with this email already exists:', existingUserResponse);
					return;
				}

				const userData = {
					name,
					phone,
					email,
					city,
					company,
					password,
				};

				const response = await addUserToDatabase(userData);
				console.log('User added to database:', response);

				this.setState({ 
					userAdded: true,
					registrationSuccess: true 
				}); // Устанавливаем состояние userAdded в true после успешной регистрации

			} catch (error) {
				console.error('Error registering user:', error);
			}
		}
	};

	handleInputChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		
		const { name, phone, email, city, company, password, nameError, phoneError, emailError, cityError, companyError, passwordError, userAdded } = this.state;

		return (
			<>
				<div className="fixed inset-0 flex items-center justify-center z-50">
					<div className="absolute inset-0 bg-black opacity-50"></div>
					<div className="relative bg-white rounded-lg shadow-lg p-6">
						<button className="absolute -top-4 -right-4 p-4" onClick={this.props.handleCloseRegisterForm}>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
						<div className="flex justify-center items-center">
							<div className='register_form' style={{ width: '600px', backgroundColor: '#F7EBE5', padding: '24px', margin: 'auto' }}>
								{userAdded ? (
									<div className="text-center">
										<p className="text-green-500">Registration successful!</p>
										<p className="text-gray-600">You can now log in using your email and password.</p>
										
										<p onClick={this.props.redirectToLoginForm} className="text-red-400 text-center text-lg font-bold mt-2 cursor-pointer">Login</p>
										
									</div>
								) : (
									<>
										<h2 className='text-2xl text-center font-semibold mt-4 mb-2'>Get access to wholesale prices</h2>
										<h4 className='text-xl text-center font-semibold mt-2 mb-4'>Please register</h4>
										<form className="flex flex-col justify-center mb-4" onSubmit={this.handleSubmit}>
											<div className="form__register flex">
												<div className="mb-2 flex flex-col flex-1">
													<label className="text-sm ml-12" htmlFor="name">Your Name</label>
													<input
														className="w-full p-2 mt-2 mb-2 mx-auto"
														style={{ maxWidth: '180px' }}
														name="name"
														type="text"
														placeholder="Your Name"
														value={name}
														onChange={this.handleInputChange}
														onBlur={this.validateName}
														pattern="[a-zA-Z\s]+"
														required
													/>
													{nameError && <p className="text-red-500 ml-12">{nameError}</p>}
												</div>
												<div className="mb-2 flex flex-col flex-1">
													<label className="text-sm ml-12" htmlFor="phone">Your Phone</label>
													<input
														className="w-full p-2 mt-2 mb-2 mx-auto"
														style={{ maxWidth: '180px' }}
														name="phone"
														type="tel"
														placeholder="Your Phone"
														value={phone}
														onChange={this.handleInputChange}
														onBlur={this.validatePhone}
														pattern="[0-9]{10}"
														required
													/>
													{phoneError && <p className="text-red-500 ml-12">{phoneError}</p>}
												</div>
											</div>
											<div className="form__wholesale mb-4 flex">
												<div className="mb-2 flex flex-col flex-1">
													<label className="text-sm ml-12" htmlFor="email">Your Email</label>
													<input
														className="w-full p-2 mt-2 mb-2 mx-auto"
														style={{ maxWidth: '180px' }}
														name="email"
														type="email"
														placeholder="Your Email"
														value={email}
														onChange={this.handleInputChange}
														onBlur={this.validateEmail}
														required
													/>
													{emailError && <p className="text-red-500 ml-12">{emailError}</p>}
												</div>
												<div className="mb-2 flex flex-col flex-1">
													<label className="text-sm ml-12" htmlFor="city">Your City</label>
													<input
														className="w-full p-2 mt-2 mb-2 mx-auto"
														style={{ maxWidth: '180px' }}
														name="city"
														type="text"
														placeholder="Your City"
														value={city}
														onChange={this.handleInputChange}
														onBlur={this.validateCity}
														pattern="[a-zA-Z\s]+"
														required
													/>
													{cityError && <p className="text-red-500 ml-12">{cityError}</p>}
												</div>
											</div>
											<div className="form__wholesale mb-4 flex">
												<div className="mb-2 flex flex-col flex-1">
													<label className="text-sm ml-12" htmlFor="company">Your Company</label>
													<input
														className="w-full p-2 mt-2 mb-2 mx-auto"
														style={{ maxWidth: '180px' }}
														name="company"
														type="text"
														placeholder="Your Company"
														value={company}
														onChange={this.handleInputChange}
														onBlur={this.validateCompany}
														pattern="[a-zA-Z\s]+"
														required
													/>
													{companyError && <p className="text-red-500 ml-12">{companyError}</p>}
												</div>
												<div className="mb-2 flex flex-col flex-1">
													<label className="text-sm ml-12" htmlFor="password">Your Password</label>
													<input
														className="w-full p-2 mt-2 mb-2 mx-auto"
														style={{ maxWidth: '180px' }}
														name="password"
														type="password"
														placeholder="Your Password"
														value={password}
														onChange={this.handleInputChange}
														onBlur={this.validatePassword}
														pattern=".{6,}"
														required
													/>
													{passwordError && <p className="text-red-500 ml-12">{passwordError}</p>}
												</div>
											</div>
											<button className="bg-red-500 text-white py-2 px-4 mx-auto hover:bg-red-600" style={{ width: '460px' }} type="submit">Send a registration request</button>
										</form>
										<div className="form__lastText flex justify-center text-sm mb-4">
											<div>
												<p>Already registered?</p>
												
												<p onClick={this.props.redirectToLoginForm} className="text-red-400 text-center text-lg font-bold mt-2 cursor-pointer">Login</p>
											</div>
										</div>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Register;
