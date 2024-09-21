import User from "../models/userModel.js"

const addToCart = async(req,res) => {
    let userData = await User.findOne({_id: req.user.id})
    userData.cartData[req.body.itemId] += 1
    await User.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData })
    res.send("Added")
}

const removeFromCart = async(req,res) => {
    let userData = await User.findOne({_id: req.user.id})
    if(userData.cartData[req.body.itemId] > 0){
        userData.cartData[req.body.itemId] -= 1
    }
    await User.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData })
    res.send("Removed")
}

const clearFromCart = async(req,res) => {
    let userData = await User.findOne({_id: req.user.id})
    userData.cartData[req.body.itemId] = 0

    await User.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData })
    res.send("Cleared")
}

const getCart = async(req,res) => {
    try {
        let userData = await User.findOne({_id: req.user.id})
        let cartData = await userData.cartData
        res.json(cartData)
    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Error"})
    }
}

export { addToCart, removeFromCart, clearFromCart, getCart }