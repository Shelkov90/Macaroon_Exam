import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

class Main extends Component {
	constructor(props) {
	super(props)

	this.state = {
	
	}
};

	render() {
		return (
			<main className="px-4 sm:px-0 sm:w-5/6 max-w-[1170px] mx-auto grow">
					<Outlet />
			</main>
		);
	}
}

export default Main;
