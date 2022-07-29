
import React from 'react';

const ProductItem = ({ data, addToCart }) => {
    let { id, product, precio, imagen } = data
    return <div>
        <h4>{product}</h4>
        <h5>MXN{precio}.00</h5>
        <h6>{imagen}</h6>
        <button onClick={() => addToCart(id)}>Agregar al Carrito</button>
    </div>;

};

export default ProductItem;
