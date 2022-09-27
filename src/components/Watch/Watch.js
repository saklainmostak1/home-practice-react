import React, { useEffect, useState } from 'react';

const Watch = () => {
    const [steps, setSteps] = useState(0)
    
    const increseSteps = () =>{
        const newSteps = steps + 1
        setSteps(newSteps)
        // setSteps(steps + 1)
    }
    useEffect(()=>{
        console.log(steps)
    }, [steps])


    return (
        <div>
            <h2>This is my smart watch</h2>
            <h3>My current steps: {steps} </h3>
            <button onClick={increseSteps}>De Dour.........</button>
        </div>
    );
};

export default Watch;