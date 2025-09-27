import express from "express"
import { addFood, listFood, removeFood } from "../controllers/foodController.js"
import multer from "multer"

const foodRouter = express.Router();

// Image Storage Engine

// const storage = multer.diskStorage({
//     destination:"uploads",
//     filename:(req,file,cb)=>{
//         return cb(null, `${Date.now()}${file.originalname}`)
//     }
// })

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        // Clean filename to prevent encoding issues
        const cleanName = file.originalname.replace(/[^a-zA-Z0-9.-]/g, '-').toLowerCase();
        return cb(null, `${Date.now()}-${cleanName}`)
    }
})

const upload = multer({ storage: storage })

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);



export default foodRouter;