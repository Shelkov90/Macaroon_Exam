import React, { createContext, useContext, PureComponent } from "react";
import { getAllProducts } from "../../services/Fetch";

const SetContext = createContext();

class SetProvider extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			sets: [],
		}
	}

	fetchData = async () => {
		try {
			const data = await getAllProducts();
			if (!data) return;
			this.setState({ sets: data[0].sets });
		} catch (error) {
			console.error("Error fetching sets:", error);
		}
	};

	componentDidMount() {
		this.fetchData();
	}

	render() {
		const { children } = this.props;
		const { sets } = this.state;
		let allSets = []
		if(sets) allSets = sets
		
		return (
			<SetContext.Provider value={allSets}>
				{children}
			</SetContext.Provider>
		);
	}
}
export default SetProvider;

export const useSets = () => {
	return useContext(SetContext);
};

