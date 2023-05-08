import React from 'react'

function Cart({cart}) {
    let total=0;
    let shipping=0;

    for(const product of cart){
        total=total+product.price;
        shipping= shipping+product.shipping;
    }

    const tax=(total*0.1).toFixed(2)

  return (
    <div>
         <h1 className='text-xl font-bold'>Order Summary</h1>
            <br />
            <br />
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <p className='font-bold'>Grand Total: ${}</p>
    </div>
  )
}

export default Cart