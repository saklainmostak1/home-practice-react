import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const cosmetics = [
        {id: 1, name: 'Alta', price: '100'},
        {id: 2, name: 'Palis', price: '200'},
        {id: 3, name: 'Malis', price: '300'},
        {id: 4, name: 'Balis', price: '400'},
        {id: 5, name: 'Nalis', price: '500'}
    ]
    return (
        <div>
            <h1>Welcome to my cosmetics</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic
                key={cosmetic.id}
                cosmetic ={cosmetic}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;