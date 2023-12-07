import React from 'react';

const Cart = ({cart,handleRemoveItemToCart}) => {
    let message;
    if(cart.length < 1){
        message = "not added item,please add some items"
    }
    else if(cart.length===1){
        message = "thank you for added item in cart"
    }
    else{
        message = "thank you for added items in cart"
    }
    return (
        <div className='cart'>
            <h3>Order Summary {cart.length}</h3>
            {message}
            {
            cart.length > 2 
            ? <p>aro kino</p>
            : <p>fokira</p>}
            {
                cart.map(tshirt => <p 
                    key={tshirt._id}

                    >{tshirt.name} 
                    <button onClick={()=>handleRemoveItemToCart(tshirt._id)}>X</button>
                    </p>)
            }

            {
                cart.length ===2 && <h3>Courrently you buying 2 items.</h3>
            }
            {
                cart.length ===0 || <h3>Courrently you buying items.</h3>
            }
        </div>
    );
};

export default Cart;