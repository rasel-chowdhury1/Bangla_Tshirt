import React, { useState } from 'react';
import './Home.css';
import { useLoaderData } from 'react-router-dom/dist';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';

const Home = () => {
    const shirts = useLoaderData();
    const [cart,setCart] = useState([])
    console.log(shirts)

    const handleBuyButton = shirt =>{
        const exist = cart.find(item => item._id === shirt._id);
        if(exist){
            toast('this product is added')
        }
        else{
            const newCart = [...cart,shirt]
            setCart(newCart);
        }
        
        // console.log("clicked buy button")
    }

    const handleRemoveItemToCart = id =>{
        console.log("this id item clicked", id);
        const remain = cart.filter(re => re._id !== id);
        setCart(remain);
    }

    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    shirts.map(shirt => <Tshirt
                     key={shirt._id}
                     shirt={shirt}
                     handleBuyButton={handleBuyButton}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                   cart={cart}
                   handleRemoveItemToCart={handleRemoveItemToCart}
                ></Cart>
            </div>
            
        </div>
    );
};

export default Home;