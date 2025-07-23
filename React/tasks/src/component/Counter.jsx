import React, { useState } from 'react'
import './Counter.css'

function Counter() {
    const [value, setValue] = useState(1);
    const price=100;
    function decrement()
    {
        setValue(value>0 ? value - 1 : 0);
    }
    function increment()
    {
        setValue(value + 1);
    }
    return (
        <div className='div'>
            <div className='valueDiv'>
                <button onClick={decrement} className='button'>-</button>
                <h1 className='value'>{value}</h1>
                <button onClick={increment} className='button'>+</button>
            </div>
            <div className='priceDiv'>
                <h1>{price*value}</h1>
            </div>
        </div>
    )
}
export default Counter