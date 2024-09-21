import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect("mongodb+srv://pharanyuwave:mVpISRum9ReX5JS5@cluster0.v1umu.mongodb.net/shopper").then(() => console.log("DB Connected"))
}