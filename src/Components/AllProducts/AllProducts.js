import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


function AllProducts({productsData,handleAddToCart}) {
    const {img,name,price,ratings,seller}=productsData;
  


  return (
    <div className='border-2 border-gray-400 flex flex-col justify-between rounded'>
      <div className='flex flex-col items-start w-30%' >
        <p><img className='w-100%' src={img} alt="productImg" /></p>
        
        <h1 className='font-bold text-lg
        '>{name}</h1>
        <h2>Price: ${price}</h2>
        <br />
        <br />
        <p>Manufacturer: {seller}</p>
        <p>Rating:{ratings} star</p>
        </div>
        <p className='bg-orange-400 text-gray-800 text-center hover:bg-blue-600 hover:cursor-pointer' onClick={()=>handleAddToCart(productsData)}><button className=' py-3'>Add to Cart
        <FontAwesomeIcon icon={faShoppingCart} />
        </button></p>
    </div>
  )
}

export default AllProducts