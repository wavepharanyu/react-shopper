import User from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt"

const createToken = (data) => {
    return jwt.sign(data, 'secret_shopper')
}

const signup = async(req,res) => {
    try {
        let check = await User.findOne({email: req.body.email})
        if(check){
            return res.status(400).json({ success: false,  errors: "existing user found with same email address"})
        }
        let cart = {}
        for(let i = 0; i < 300; i++){
            cart[i] = 0;
        }

        // hashing password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        const user = new User({
            name: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            cartData: cart
        })

        await user.save()

        const data = {
            user: {
                id: user.id
            }
        }

        const token = createToken(data) 

        res.json({ success: true, token })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
    
}

const login = async(req,res) => {
    try {
        let user = await User.findOne({ email: req.body.email })
        if(!user){
            return res.json({ success: false, message: "User doesn't exist" })
        }

        const isMatch = await bcrypt.compare(req.body.password, user.password)

        if(!isMatch){
            return res.json({ success: false, message: "Wrong Password" })
        }

        const data = {
            user: {
                id: user.id
            }
        }

        const token = createToken(data) 

        res.json({ success: true, token })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
    
}

export { signup, login }