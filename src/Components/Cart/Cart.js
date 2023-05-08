import React from 'react'

function Cart({cart}) {
    let total=0;
    let shipping=0;
    let quantity=0;

    for(const product of cart){
        quantity=quantity+ product.quantity;
        total=total+product.price*quantity;
        shipping= shipping+product.shipping;
    }

    const tax=parseFloat((total*0.1).toFixed(2));
    const grandTotal= total+shipping+tax;
  return (
    <div>
         <h1 className='text-xl font-bold'>Order Summary</h1>
            <br />
            <br />
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <p className='font-bold'>Grand Total: ${grandTotal.toFixed(2)}</p>
            <p className='mt-7 bg-red-600  text-center hover:bg-blue-600 hover:cursor-pointer rounded-sm text-white '><button className='px-3 py-2 '>Check Out</button></p>
    </div>
  )
}

export default Cart