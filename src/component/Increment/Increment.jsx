import React from 'react'

const Increment = ({ clickHandler }) => {
    return (
        <button onClick={() => clickHandler('inc')} className='mx-2 bg-green-200 p-4'>increase +</button>
    )
}

export default Increment;