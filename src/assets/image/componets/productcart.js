import React from 'react'
import { FaStar } from 'react-icons/fa'
import { addToCard } from '../../../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

function Productcard({product}) {
  const dispatch = useDispatch()
  const handleAddToCard =(e,product)=>{
    e.stopPropagation()
    e.preventDefault()
    dispatch(addToCard(product))
    alert("product added succesfully")

  }
  return (
    <Link to={`/product'${product.id}`}>
    <div className='bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-150'>
        <img src={product.image} alt={product.name} className='w-full h-48 object-contain mb-4'/>
        <h3 className='text-lg font-semibold'>{product.name}</h3>
        <p className='text-gray-500'>${product.price}</p>
        <div className='flex items-center mt-2'>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>


        </div>
        <div className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600
        group text-white test-sm rounded-full hover:w-32 hover:bg-red-700  transition-all duration-100' onClick={(e)=>handleAddToCard(e,product)}>
            <span className='group-hover:hidden'>+</span>
            <span className='hidden group-hover:block'>Add to card</span>


        </div>
    </div>
    </Link>
  )
}

export default Productcard