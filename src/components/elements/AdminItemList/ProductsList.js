import React, { PureComponent } from 'react'

class ProductsList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        let setsContent = ``;
        let sweetsContent = ``;
        const sets = this.props.products[0]?.sets;
        const sweets = this.props.products[0]?.sweets;
        console.log(sets);
        console.log(sweets);

        if (sets) {
            setsContent = sets.map((item, index) => {
                return (
                    <div key={index+9} className='news__item grid grid-cols-8 border my-2 bg-white p-4 items-center'>
                        <p>#{index + 1}</p>
                        <p>
                            <span className='font-semibold'>Name:</span> 
                            <br/> 
                            {item.name}
                        </p>
                        <p>
                            <span className='font-semibold'>Price:</span> 
                            <br/> 
                            {item.price}
                        </p>
                        <p>
                            <span className='font-semibold'>Disount:</span> 
                            <br/> 
                            -{item.discount}%
                        </p>
                        <p className='col-span-2'>
                            <img className='max-w-25' src={item.image} alt="alt" />
                        </p>


                        <button className='bg-green-200 hover:bg-green-400 rounded-md mx-4 py-2'>EDIT</button>
                        <button className='bg-red-200 hover:bg-red-400 rounded-md mx-4 py-2'>DELETE</button>
                    </div>
                )
            })
        };

        if(sweets){
        sweetsContent = sweets.map((item, index) => {
                return (
                    <div key={index} className='news__item grid grid-cols-8 border my-2 bg-white p-4 items-center'>
                            <p>#{index + 1}</p>
                            <p>
                                <span className='font-semibold'>Name:</span> 
                                <br/> 
                                {item.name}
                            </p>
                            <p>
                                <span className='font-semibold'>Price:</span> 
                                <br/> 
                                {item.price}
                            </p>
                            <p>
                                <span className='font-semibold'>Disount:</span> 
                                <br/> 
                                -{item.discount}%
                            </p>
                            <p className='col-span-2'>
                                <img className='max-w-25' src={item.image} alt="alt" />
                            </p>


                            <button className='bg-green-200 hover:bg-green-400 rounded-md mx-4 py-2'>EDIT</button>
                            <button className='bg-red-200 hover:bg-red-400 rounded-md mx-4 py-2'>DELETE</button>
                    </div>
                )
            })
        };

        return (
            <>
                <h2 className='text-2xl text-center font-semibold my-4'>Sets:</h2>
                {setsContent ? setsContent : ""}
                <h2 className='text-2xl text-center font-semibold my-4'>Sweets:</h2>
                {sweetsContent ? sweetsContent : ""}
            </>
        )
    }
}

export default ProductsList