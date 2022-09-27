import React from 'react';
import { add, multiply } from '../utilitis/calculate';

const Shoes = () => {
    const fast = 10
    const second = 5
    const result = multiply(fast, second)
    const sum = add(fast, second)
    return (
        <div>
            <h1>This is shoes components</h1>
            <p>Total: {result} </p>
            <p>Total: {sum} </p>
        </div>
    );
};

export default Shoes;