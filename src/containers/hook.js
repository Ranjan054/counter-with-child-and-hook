import React, { useState } from 'react'

export const useCounterChange = () => {
    const [counter, setCounter] = useState(0);
    
    const changeCounter = (type) => {
        if (type === 'inc') {
            setCounter(prevState => prevState + 1)
        }
        if (type === 'dec') {
            setCounter(prevState => prevState - 1)
        }
    };

    return { counter, changeCounter };
}