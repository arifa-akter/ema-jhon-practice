// import React, { useEffect, useState } from 'react';
import React, { useEffect, useState } from 'react';
import useProduct from '../../hook/useProduct';
import { addToDb, getStoredCard } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { faArrowRight,faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const Shop = () => {
    // const[products , setProduct] = useState([])
    const[products]=useProduct()
    const [cart , setSelectItem]= useState([])
    // useEffect(()=>{
    //     fetch('products.json')
    //     .then(response =>response.json())
    //     .then(data =>setProduct(data))
    // },[])
   useEffect(()=>{
      const storedCard = getStoredCard()
      const saveStoredCard =[]
      for(const id in storedCard){
         const buyProduct =products.find(product=>product.id === id) 
         if(buyProduct){
          const quantity = storedCard[id]
          buyProduct.quantity = quantity
          saveStoredCard.push(buyProduct)
         }
      }
      setSelectItem(saveStoredCard) 
   },[products])

   
    const addToCard =(selectProduct)=>{
      let allCart = []
       const exists = cart.find(product=>product.id === selectProduct.id)
       if(!exists){
         selectProduct.quantity = 1
         allCart=[...cart ,selectProduct ]
       }
       else{
          const rest = cart.filter(product=>product.id !== selectProduct.id) 
          exists.quantity = exists.quantity+1
          allCart=[...rest , exists]
       }
       console.log(allCart)
       setSelectItem(allCart)
       addToDb(selectProduct.id)
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
                <button className='but butt'><span>clear cart</span>
                  <FontAwesomeIcon FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </button>
               <Link to={"/order"}>
               <div className="icon">
                  <button className='but-2 butt'>
                  <span>review order</span>
                  <FontAwesomeIcon className='font' FontAwesomeIcon  icon={faArrowRight}></FontAwesomeIcon>
                  </button>
                  </div>
               </Link> 
              </Cart>
           </div>
        </div>
    );
};

export default Shop;