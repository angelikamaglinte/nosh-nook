// logic to connect with the database

import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://maglinteangelika:5wAhu57FaT1o4BMt@cluster0.custqfu.mongodb.net/Nosh&Nook').then(()=>console.log("DB Connected"));
}

