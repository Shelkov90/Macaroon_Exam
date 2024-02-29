import React, { PureComponent } from 'react'
import SetsItem from './SetsItem';
import SweetsItem from './SweetsItem';

class ProductsList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            setsList: this.props.products[0].sets,
            sweetsList: this.props.products[0].sweets
        }
    }

    componentDidUpdate = () => {
        if (this.props.products[0].sets.length !== this.state.setsList.length || 
            this.props.products[0].sets.some((set, index) => set !== this.state.setsList[index])) {
            this.setState({ setsList: this.props.products[0].sets });
        }
        if (this.props.products[0].sweets.length !== this.state.sweetsList.length || 
            this.props.products[0].sweets.some((sweet, index) => sweet !== this.state.sweetsList[index])) {
            this.setState({ sweetsList: this.props.products[0].sweets });
        }
    }

    render() {
        
        const { setsList, sweetsList } = this.state;
        
        let setsContent = ``;

        if (setsList) {
            setsContent = setsList.map((item, index) => {
                return (
                    <SetsItem key={`sets${index}`} set={item} />
                )
            })
        };

        let sweetsContent = ``;

        if(sweetsList){
            sweetsContent = sweetsList.map((item, index) => {
                return (
                    <SweetsItem key={`sets${index}`} sweet={item} />
                )
            })
        };

        console.log(setsContent);

        return (
            <>
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl text-center font-semibold my-4'>Sets - {setsContent > 0 ? setsContent.length: "?"} items:</h2>
                    <button className=' bg-green-200 text-blue-500 font-semibold rounded-md my-5 px-4 py-2 cursor-pointer hover:bg-green-400'>ADD NEW</button>
                </div>
                {setsContent}
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl text-center font-semibold my-4'>Sweets - {sweetsContent > 0 ? sweetsContent.length: "?"} items:</h2>
                    <button className=' bg-green-200 text-blue-500 font-semibold rounded-md my-5 px-4 py-2 cursor-pointer hover:bg-green-400'>ADD NEW</button>
                </div>
                {sweetsContent}
            </>
        )
    }
}

export default ProductsList