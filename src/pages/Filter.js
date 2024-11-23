import React from "react"
import { useSelector } from "react-redux"
import Productcard from "../assets/image/componets/Productcart"
import image1 from '../assets/image/product.png'


function Filter(){
    const filterProducts= useSelector(state => state.product.filterdData)
    return(
        <div className=' mx-auto py-12  px-4 md:px-16 lg:px-24'>
            {filterProducts.length>0 ?
            <>
    <h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
        {filterProducts.map(((product)=>(
            // <div>{product.name}</div>
            <Productcard product = {product}/>

        )))}
    </div>
    </>
    :
    <div className="flex justify-center">
        <img src={image1} alt="image"/>
        
    </div>
}
</div>
    

    )
}

export default Filter