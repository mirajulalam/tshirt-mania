import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <h1>Welcome My Tshirt Shop!!!</h1>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/orderreview'>Order Review</Link>
                <Link to='/grandpa'>GrandPa</Link>
            </nav>
        </div>
    );
};

export default Header;