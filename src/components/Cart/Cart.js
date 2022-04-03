import React from 'react';
import './Cart.css'
const Cart = ({ cart, handleRemoveFromCart }) => {
    // Conditional rendaring option
    // 1. Element variable
    // 2. ternary operator condition ? true : false
    // 3. && Operator (shothand)
    // 4. ||
    let command;
    if (cart.length === 0) {
        command = <p>Please Buy Now Item!!!</p>
    }
    else if (cart.length == 1) {
        command = <p>Please One more buy now!!</p>
    }
    else {
        command = <p>Thanks for buy Now</p>
    }
    return (
        <div>
            <h2>Items Selected: {cart.length}</h2>

            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
            {cart.length === 3 && <div className='orange'>
                <h3>Tringonal</h3>
                <p>tin jon ka gift diba</p>
            </div>}
            {command}
            {cart.length === 0 || <p className='orange'>YaY! you are buying</p>}
            {cart.length !== 4 ? <p>keep adding</p> : <button>clear all</button>}
            {cart.length === 4 && <button className='orange'>Review order</button>}
        </div>
    );
};

export default Cart;