import React from 'react';
import './Tshirt.css'
const Tshirt = ({ handleAddtoCart, tShirt }) => {
    const { name, picture, price } = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>Name: {name}</h3>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddtoCart(tShirt)}>Add To Cart</button>
        </div>
    );
};

export default Tshirt;