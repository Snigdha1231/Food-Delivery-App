import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://snigdha:Jobs_123@cluster0.nauielt.mongodb.net/food-del').then(()=>console.log("DB Connected"));

}