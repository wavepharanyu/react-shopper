import { createContext, useState, useEffect } from "react";
import axios from 'axios'

export const ShopContext = createContext()

const ShopContextProvider = (props) => {

    const getDefaultCart = () => {
        let cart = {}
        for(let index = 0; index < 300+1; index++){
            cart[index] = 0
        }
        return cart
    }

    const [cartItems, setCartItems] = useState(getDefaultCart())
    const [all_product, setAllProduct] = useState([])

    const fetchProducts = async() => {
        let response = await axios.get('http://localhost:4000/api/product/all')
        setAllProduct(response.data)
    }

    const fetchCart = async() => {
        let response = await axios.post('http://localhost:4000/api/cart/getcart', {}, { headers: { 'authToken' : localStorage.getItem('authToken') }})
        setCartItems(response.data)
    }

    useEffect(() => {
        async function loadData() {
            await fetchProducts()
            if(localStorage.getItem("authToken")){
                await fetchCart()
            }
        }
        loadData()
    },[])

    const addToCart = async(itemId) => {
        setCartItems((prev) => ({...prev,[itemId]: prev[itemId] + 1 }))
        if(localStorage.getItem('authToken')){
            await axios.post('http://localhost:4000/api/cart/addtocart', {itemId}, { headers: { 'authToken' : localStorage.getItem('authToken') } })
        }
    }

    const removeFromCart = async(itemId) => {
        setCartItems((prev) => ({...prev,[itemId]: prev[itemId] - 1 }))
        if(localStorage.getItem('authToken')){
            await axios.post('http://localhost:4000/api/cart/removefromcart', {itemId}, { headers: { 'authToken' : localStorage.getItem('authToken') } })
        }
    }

    const clearFromCart = async(itemId) => {
        setCartItems((prev) => ({...prev,[itemId]: 0 }))
        if(localStorage.getItem('authToken')){
            await axios.post('http://localhost:4000/api/cart/clearfromcart', {itemId}, { headers: { 'authToken' : localStorage.getItem('authToken') } })
        }
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