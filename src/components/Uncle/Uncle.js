import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [house, setHouse] = useContext(RingContext)
    const handleIncrease = () => {
        const newIncreseHouse = house + 1;
        setHouse(newIncreseHouse)
    }
    return (
        <div>
            <h5>Uncle</h5>
            <p>house: {house}</p>
            <button onClick={handleIncrease}>Uncle Magic</button>
        </div>
    );
};

export default Uncle;