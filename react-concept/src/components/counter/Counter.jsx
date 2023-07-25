import React, { useState } from 'react';
import './Counter.css'

const Counter = () => {

    let[count, setCount] = useState(0);
    console.log(count);

    const increaseCount = () =>{
        setCount(count + 1);
    }

    const decreaseCount = () => {
        setCount(count - 1);
    } 

    



    return (
        <div className='text-center counter'>
            <h1>Count:{count}</h1>
            <button onClick={increaseCount} className='btn btn-primary'>Increase</button>
            <button onClick={decreaseCount} className='btn btn-danger'>Decrease</button>
        </div>
    );
};

export default Counter;