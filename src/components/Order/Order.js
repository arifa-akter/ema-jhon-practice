import React from 'react';
import useCart from '../../hook/useCart';
import useProduct from '../../hook/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewProduct from '../ReviewProduct/ReviewProduct'
import './Order.css'
import { faArrowRight,faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Order = () => {
    const [ products ]=useProduct()
    // const [cart , setSelectItem] = useCart(products)
    const [cart ,setSelectItem] = useCart(products)
    const deleteProduct = (product)=>{
       const rest = cart.filter(pd=>pd.id!== product.id )
       setSelectItem(rest)
       removeFromDb(product.id)
    }
    return (
    
          <div className="shop">
              <div className="review-pd">
                  {
                  cart.map(product=><ReviewProduct
                  key={product.id}
                  product= {product}
                  deleteProduct={deleteProduct}
                  ></ReviewProduct>)
                  }
              </div>
              <div className="cart">
                  <Cart cart ={cart}>
                  <button className='but butt'><span>clear cart</span>
                  <FontAwesomeIcon FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                 </button>

                <Link to={"/manage"}>
                <div className="icon">
                  <button className='but-2 butt'>
                  <span>checkOut</span>
                  <FontAwesomeIcon className='font' FontAwesomeIcon  icon={faArrowRight}></FontAwesomeIcon>
                  </button>
                  </div> 
                </Link>
                 </Cart>
              </div>
          </div>
 
       
    );
};

export default Order;