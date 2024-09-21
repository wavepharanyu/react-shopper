import Product from "../models/productModel.js";

const uploadImage = async(req, res) => {


    try {
        res.json({success: true, image_url: `http://localhost:${process.env.port}/images/${image_filename}`})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Error"})
    }
}

const addProduct = async(req, res) => {
    let image_filename = `${req.file.filename}`;
    let image_url = `http://localhost:${process.env.port}/images/${image_filename}`
    let products = await Product.find({})
    let id;
    if(products.length > 0){
        let last_product_array = products.slice(-1)
        let last_product = last_product_array[0]
        id = last_product.id+1
    }else{
        id =1
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: image_url,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    })

    try {
        await product.save();
        res.json({success: true, message: "Product Added"})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Error"})
    }
}

const removeProduct = async(req,res) => {
    try {
        await Product.findOneAndDelete({ id: req.body.id })
        res.json({success: true, message: "Product Removed"})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Error"})
    } 
}

const getAllProducts = async(req,res) => {
    try {
        let products = await Product.find({})
        res.json(products)
    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Error"})
    } 
}

export { uploadImage, addProduct, removeProduct, getAllProducts }