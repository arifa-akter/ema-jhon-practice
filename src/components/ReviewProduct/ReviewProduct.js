import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewProduct.css'

const ReviewProduct = (props) => {
    const{product,deleteProduct}=props
    const{name, price, img ,quantity}= product
    return (
        <div className="review-item">
                 <div className="review-image">
                     <img src={img} alt="product" />
                 </div>
             <div className="review-product-info">
             <div className="review-info" title={name}>
                     <p>name: {name.length>20? name.slice(0,15)+'...':name }</p>
                     <p>price:{price}</p>
                     <p>quantity:{quantity}</p>
                 </div>
                 <div className="review-icon">
                     <button onClick={()=>deleteProduct(product)} className='icon-b'>
                         <FontAwesomeIcon FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                     </button>
                 </div>
             </div>
        </div>
    );
};

export default ReviewProduct;