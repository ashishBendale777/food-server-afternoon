import multer from "multer";
import path from "path";

let fileStorage = multer.diskStorage({
    destination: (req, file, next) => {
        next(null, "Uploads/")
    },
    filename: (req, file, next) => {
        next(null, `${Date.now()}${path.extname(file.originalname)}`)
    }
})

export const uploader = multer({ storage: fileStorage })
