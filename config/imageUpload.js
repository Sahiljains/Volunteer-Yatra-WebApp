const multer= require('multer');
const path = require("path");

//Set storage engine image uploads
const storage = multer.diskStorage({
    destination: "client/public/images",
    filename: function (req, file, cb) {
        cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
    },
});

//Init image upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: function (req, file, cb) {
        checkFileType(req, file, cb);
    },
});

//Check File type
function checkFileType(req, file, cb) {
    // allowed ext
    const fileTypes = /jpeg|jpg|png/;
    //Check ext
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimeType = fileTypes.test(file.mimetype);

    if (mimeType && extName) {
        return cb(null, true);
    } else {
        req.fileValidationError = "Forbidden extension. Only jpeg|jpg|png allowed.";
        cb("Error : Images only!!!!!!");
    }
}

module.exports = upload