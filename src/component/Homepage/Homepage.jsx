import React from 'react';
import { useCounterChange } from '../../containers/hook';
import Increment from '../Increment/Increment.jsx';
import Decrement from '../Decrement/Decrement.jsx';

const Homepage = () => {
    const { counter, changeCounter } = useCounterChange();

    const clickHandler = (type) => {
        changeCounter(type);
    };

    return (
        <div className='container'>
            <div className='ml-20 my-4'>
                {counter}
            </div>

            <Increment clickHandler={clickHandler} />
            <Decrement clickHandler={clickHandler} />
        </div>
    );
}

export default Homepage;