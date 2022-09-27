import React from 'react';
import { add } from '../utilitis/calculate';


const Cosmetics = () => {
    const fast = 10
    const second = 20
    const total = add(fast, second)
    return (
        <div>
            <h1>Welcome to my cosmetics</h1>
            <p>Total: : {total}</p>
        </div>
    );
};

export default Cosmetics;