import React from 'react'

function Cart({cart}) {
  
  
  return (
    <div>
         <h1 className='text-xl font-bold'>Order Summary</h1>
            <br />
            <br />
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${}</p>
            <p>Total Shipping Charge: ${}</p>
            <p>Tax: ${cart.tax}</p>
            <p className='font-bold'>Grand Total: ${}</p>
            <p className='mt-7 bg-red-600  text-center hover:bg-blue-600 hover:cursor-pointer rounded-sm text-white '><button className='px-3 py-2 '>Check Out</button></p>
    </div>
  )
}

export default Cart