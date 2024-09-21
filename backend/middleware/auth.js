import jwt from 'jsonwebtoken';

const authMiddleware = async(req,res,next) => {
    const token = req.headers.authtoken

    if(!token){
        return res.json({ success: false, message: "Not Authorized Login Again" })
    }

    try {
        const tokenDecode = jwt.verify(token, "secret_shopper")
        req.user = tokenDecode.user
        next()
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}

export default authMiddleware