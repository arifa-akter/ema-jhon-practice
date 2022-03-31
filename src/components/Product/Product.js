import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'
const Product = (props) => {
    const{name, seller, price, ratings, img} = props.product
    return (
        <div>
            <div className="product-item">
                <div className="product-img">
                    <img src={img} alt="product" />
                </div>
                <div className="product-info">
                    <h2>{name}</h2>
                    <h3>price: ${price}</h3>
                    <div className="last-text">
                    <h4>menufacture: {seller}</h4>
                    <h4>rating:{ratings}</h4>
                 </div>
                </div>
                <div className="btn-crt">
                    <button onClick={()=>props.addToCard(props.product)}className='button-style'><span>Add to Cart</span>
                    <FontAwesomeIcon FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;