import React from 'react'

const Decrement = ({ clickHandler }) => {
    return (
        <button onClick={() => clickHandler('dec')} className='mx-2 bg-green-50 p-4'>decrease -</button>
    )
}

export default Decrement;