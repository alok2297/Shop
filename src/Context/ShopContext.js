import React, { createContext, useState } from "react";
import all_product from '../Components/Asset/all_product';

export const ShopContext = createContext(null);

// initialize with 0 cart items
let getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index]=0;
    }
    return cart;
}

const ShopContextProvider=(props)=>{
    const [cartItems,setcartItems] = useState(getDefaultCart());
    console.log(cartItems);

    // for adding something in cart
    const addtoCart = (itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }
    // for removing something from cart
    const removefromCart = (itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    // function to get the total Amount
    const getTotalAmout = ()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id===Number(item));
                totalAmount+=itemInfo.new_price*cartItems[item];
            }
        }
        return totalAmount;
    }


    const getTotalCartItems=()=>{
        let totalItem = 0;
        for(const i in cartItems){
            if(cartItems[i]>0){
                totalItem+=1;
            }
        }
        return totalItem;
    }

    const contextValue = {all_product,cartItems,getTotalCartItems,getTotalAmout,addtoCart,removefromCart};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;