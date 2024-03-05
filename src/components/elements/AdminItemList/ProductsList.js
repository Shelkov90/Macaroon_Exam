import React, { PureComponent } from 'react'
import SetsItem from './SetsItem';
import SweetsItem from './SweetsItem';
import { editDataBaseProductItem } from '../../services/Fetch';

class ProductsList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    getNewProductList = (type, id, item) => {
        let productsList = this.props.products;
        let { sets, sweets, wedding } = productsList;

        let newProductsList,
            index;

        switch(type){
            case "sets":
                index = sets.findIndex((element) => parseInt(element.id) === parseInt(id));
                sets.splice(index, 1, item);
                newProductsList = {sets, sweets, wedding};
                break;
            case "sweets":
                index = sweets.findIndex((element) => parseInt(element.id) === parseInt(id));
                sweets.splice(index, 1, item);
                newProductsList = {sets, sweets, wedding};
                break;
            case "wedding":
                index = wedding.findIndex((element) => parseInt(element.id) === parseInt(id));
                wedding.splice(index, 1, item);
                newProductsList = {sets, sweets, wedding};
                break;
            default:
                return alert("error get new products List")
        }

        return newProductsList;
    }

    updateProductData = async(type, id, item) => {
        let newProductsList = this.getNewProductList(type, id, item);

        let newData = await editDataBaseProductItem("products", "f80d", newProductsList);

        this.props.updateData("products", newData)
    }

    render() {

        const { products } = this.props;

        if(!products) return;

        const { sets, sweets } = products;

        let setsContent = sets.map((item, index) => {
                return (
                    <SetsItem key={`sets${index}`} item={item} updateProductData={this.updateProductData}/>
                )
            });

        let sweetsContent = sweets.map((item, index) => {
                return (
                    <SweetsItem key={`sweets${index}`} item={item} updateProductData={this.updateProductData} />
                )
            });

        return (
            <>
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl text-center font-semibold my-4'>Sets - {setsContent > 0 ? "?" : setsContent.length} items:</h2>
                    <button className=' bg-green-200 text-blue-500 font-semibold rounded-md my-5 px-4 py-2 cursor-pointer hover:bg-green-400'>ADD NEW</button>
                </div>
                {setsContent}
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl text-center font-semibold my-4'>Sweets - {sweetsContent > 0 ? "?" : sweetsContent.length} items:</h2>
                    <button className=' bg-green-200 text-blue-500 font-semibold rounded-md my-5 px-4 py-2 cursor-pointer hover:bg-green-400'>ADD NEW</button>
                </div>
                {sweetsContent}
            </>
        )
    }
}

export default ProductsList