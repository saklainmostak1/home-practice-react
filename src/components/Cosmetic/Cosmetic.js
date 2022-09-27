import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;
    const addToCart = (id) =>{
        console.log(id)
    }
    const addToCartParam = () => addToCart(id)
    return (
        <div className='product'>
            <h2>Buy This: {name} </h2>
            <p>Only For: ${price}</p>
            <p><small>Id: {id} </small></p>
            <button onClick={addToCartParam}>Add to cart</button>
            <button onClick={() => addToCart(id)}>Add to cart shortCut</button>
        </div>
    );
};

export default Cosmetic;