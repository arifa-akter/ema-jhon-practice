// import React, { useEffect, useState } from 'react';
import React, { useState } from 'react';
import useProduct from '../../hook/useProduct';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    // const[products , setProduct] = useState([])
    const[products]=useProduct()
    const [cart , setSelectItem]= useState([])
    // useEffect(()=>{
    //     fetch('products.json')
    //     .then(response =>response.json())
    //     .then(data =>setProduct(data))
    // },[])

    const addToCard =(product)=>{
       const allCart = [...cart, product]
       setSelectItem(allCart)
    }
    
    return (
        <div className='shop'>
            <div className="product">
             <div className="container">
             {
                   products.map(product =><Product 
                   key={product.id}
                   product={product}
                   addToCard = {addToCard}
                   ></Product>)
                }
             </div>
            </div>
            <div className="cart">
              <Cart 
              key={cart.id}
              cart={cart}>   
              </Cart>
           </div>
        </div>
    );
};

export default Shop;