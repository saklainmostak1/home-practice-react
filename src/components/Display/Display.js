import React, { useEffect, useState } from 'react';
import Watch from '../Watch/Watch';

const Display = (props) => {
    const [steps, setSteps] = useState(0)
    const increseSteps = () =>{
        const newSteps = steps + 1
        setSteps(newSteps)
        }


        useEffect( () => {
            console.log(steps)
        } , [steps])

            return (
        <div >
            <h1>Counter: {props.name} </h1>
            <h3>Display Count: {steps} </h3>
            <button onClick={increseSteps}>Increse</button>
            <Watch steps={steps}></Watch>
        </div>
    );
};

export default Display;