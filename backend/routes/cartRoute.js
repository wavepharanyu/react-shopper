import express from "express";
import { addToCart, clearFromCart, getCart, removeFromCart } from "../controllers/cartController.js";
import authMiddleware from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.post("/addtocart", authMiddleware, addToCart)
cartRouter.post("/removefromcart", authMiddleware, removeFromCart)
cartRouter.post("/clearfromcart", authMiddleware, clearFromCart)
cartRouter.post("/getcart", authMiddleware, getCart)

export default cartRouter;