import React from 'react';

const Dial = (props) => {
    return (
        <div className="App" style={{border: '3px solid green', margin:'5px'}}>
            <h1>New steps Count</h1>
            <h4>Counter: {props.steps} </h4>
        </div>
    );
};

export default Dial;