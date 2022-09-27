import React from 'react';
import Dial from '../Dial/Dial';

const Watch = (props) => {
    return (
        <div className="App" style={{border: '3px solid green', margin:'5px'}}>
            <h1>New Counter</h1>
            <p>Total Steps: {props.steps}  </p>
            <Dial steps={props.steps}></Dial>
        </div>
    );
};

export default Watch;