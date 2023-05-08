import React, { useEffect, useState } from 'react';
import AllProducts from '../AllProducts/AllProducts';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../fakeDatabase';

function Homepage() {
const [allProductCollection,setAllProductCollection]=useState([]);
const [cart,setCart]=useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then((res)=>res.json())
        .then(data=>setAllProductCollection(data))
    },[])

    const handleAddToCart=(product)=>{
       
        const newCart=[...cart,product]
        setCart(newCart);
        addToDb(product.id)
    }    

    useEffect(()=>{
        const storedCart=getShoppingCart();
        const savedCart=[];

        for (const id in storedCart) {
            const addedProduct=allProductCollection.find(product=>product.id===id);
            
            if(addedProduct){
                const quantity=storedCart[id];
                addedProduct.quantity=quantity;
                savedCart.push(addedProduct)
            }
            
            }

            setCart(savedCart)
        
    },[allProductCollection])

  return (
    <div className='grid grid-cols-2 md:grid-cols-5 gap-1 mt-4'>
        <div className='col-span-1 md:col-span-4 '>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {
            allProductCollection.map((pd)=><AllProducts key={pd.id} productsData={pd} handleAddToCart={handleAddToCart} />)
        }
        </div>
        </div>

        {/* Order Summary section::: */}
        <div className='col-span-1 bg-orange-400 h-96 flex flex-col items-center justify-evenly sticky top-20'>
           <Cart cart={cart} />
        </div>
    </div>
  )
}

export default Homepage