import React from 'react';
import useTShirts from '../../hooks/useTShirts';
import Cart from '../Cart/Cart';
import { useState } from 'react';
import './Home.css'
import Tshirt from '../Tshirt/Tshirt';
const Home = () => {
    const [tShirts, setTShirts] = useTShirts();
    const [cart, setCart] = useState([]);

    const handleAddtoCart = (selectedItem) => {
        const exist = cart.find(product => product.id == selectedItem.id);
        if (!exist) {
            const newCart = [...cart, selectedItem];
            setCart(newCart)
        }
        else {
            alert('Item already added')
        }

    }
    const handleRemoveFromCart = (selectedItem) => {
        const rest = cart.filter(tShirt => tShirt.id !== selectedItem.id);
        setCart(rest)
    }
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <Tshirt
                        key={tShirt.id}
                        tShirt={tShirt}
                        handleAddtoCart={handleAddtoCart}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    key={cart.id}
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>

        </div>
    );
};

export default Home;