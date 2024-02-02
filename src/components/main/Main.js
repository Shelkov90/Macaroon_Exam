import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

class Main extends Component {
	render() {
		return (
			<main className="w-5/6 max-w-[1400px] mx-auto basis-full">
				<Outlet />
			</main>
		);
	}
}

export default Main;
