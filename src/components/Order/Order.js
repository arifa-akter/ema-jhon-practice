import React from 'react';
import useProduct from '../../hook/useProduct';

const Order = () => {
    const [ products ]=useProduct()
    return (
        <div>
            <h1>here some order {products.length}</h1>
        </div>
    );
};

export default Order;