import { createContext, useState } from "react";
import all_product from './../assets/all_product';

export const ShopContext = createContext()

const ShopContextProvider = (props) => {

    const getDefaultCart = () => {
        let cart = {}
        for(let index = 0; index < all_product.length+1; index++){
            cart[index] = 0
        }
        return cart
    }

    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]: prev[itemId] + 1 }))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]: prev[itemId] - 1 }))
    }

    const clearFromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]: 0 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
            }
        }
        return totalAmount
    }

    const getTotalCartItems = () => {
        let totalItem = 0
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem += cartItems[item]
            }
        }
        return totalItem
    }

    const contextValue = {
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        clearFromCart,
        getTotalCartAmount,
        getTotalCartItems
    }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider