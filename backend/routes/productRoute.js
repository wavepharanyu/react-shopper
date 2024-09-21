import express from "express";
import { uploadImage, addProduct, removeProduct, getAllProducts } from "../controllers/productController.js";
import multer from 'multer'
import path from 'path'

const productRouter = express.Router();

//image storage engine
const storage = multer.diskStorage({
    destination: './uploads/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
}) 

const upload = multer({storage: storage})

productRouter.post("/add", upload.single("image"), addProduct)
productRouter.post("/remove", removeProduct)
productRouter.get("/all", getAllProducts)

export default productRouter;