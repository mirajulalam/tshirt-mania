
import { useState } from 'react';
import { useEffect } from 'react';
const useTShirts = () => {
    const [tShirts, setTShirts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setTShirts(data))
    }, [])
    return [tShirts, setTShirts]
}
export default useTShirts;