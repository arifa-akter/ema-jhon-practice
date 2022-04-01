// import {  faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props
    // console.log(cart)
    console.log(props)
    let price = 0
    let shipping =0
    let quantity = 0
    for(const product of cart){
        quantity = quantity+ product.quantity
       price = price + product.price* product.quantity
       shipping = shipping + product.shipping
    }
    const tex = (price*0.1).toFixed(1)
    const grandTotal = price + shipping + parseFloat(tex)
    return (
        <div className='cart-info'>
              <h2>Order Summary</h2>
                      <h4>selected item: {quantity}</h4>
                      <h4>total price:$ {price}</h4>
                      <h4>total shipping charge:$ {shipping}</h4>
                      <h4>tax:$ {tex}</h4>
                      <h3>grand total:$ {(grandTotal.toFixed(1))}</h3>
                      {props.children}
                  {/* <button className='but butt'><span>clear cart</span>
                  <FontAwesomeIcon FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                  </button> */}
                  {/* <div className="icon">
                  <button className='but-2 butt'>
                  <span>review order</span>
                  <FontAwesomeIcon className='font' FontAwesomeIcon  icon={faArrowRight}></FontAwesomeIcon>
                  </button>
                  </div> */}
        </div>
    );
};

export default Cart;