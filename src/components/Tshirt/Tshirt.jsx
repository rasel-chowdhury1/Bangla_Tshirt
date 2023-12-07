import React from 'react';
import './Tshirt.css';

const Tshirt = ({shirt,handleBuyButton}) => {
    const {id,picture,name,price} = shirt
    return (
        <div className='tshirt'>
            <img src={picture} alt="shirt_image" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={() => handleBuyButton(shirt)}>Buy Now </button>
        </div>
    );
};

export default Tshirt;