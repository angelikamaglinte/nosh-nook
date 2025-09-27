import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// app config
const app = express()
const port = process.env.PORT || 4000;

// middleware
app.use(express.json())
// app.use(cors())

app.use(cors({
    origin: [
        "https://nosh-nook-admin.onrender.com",
        "https://nosh-nook.onrender.com",
        "http://localhost:3000",
        "http://localhost:5173"
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'token']
}))

// static file serving with CORS headers to prevent ORB blocking
app.use("/images", (req, res, next) => {
    res.header('Cross-Origin-Resource-Policy', 'cross-origin');
    res.header('Access-Control-Allow-Origin', '*');
    next();
}, express.static('uploads'))

// db connection
connectDB();

// API endpoints
app.use("/api/food", foodRouter)
// app.use("/images",express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/", (req, res) => {
    res.send("API Working...")
})

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})

// mongodb+srv://maglinteangelika:5wAhu57FaT1o4BMt@cluster0.custqfu.mongodb.net/?