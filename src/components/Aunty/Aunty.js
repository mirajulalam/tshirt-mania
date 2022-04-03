import React, { useContext } from 'react';
import { RingContext } from './../Grandpa/Grandpa';


const Aunty = ({ house }) => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h5>Aunty</h5>
            <p>house: {house}</p>
            <p>Gift: {ring}</p>
        </div>
    );
};

export default Aunty;