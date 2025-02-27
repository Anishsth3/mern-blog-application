const express = require('express');
const AuthController = require('../controllers/AuthController');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './uploads/')
    },
    filename: function(req, file, cb){
        cb(null, new Date().toISOString() + file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype ==='image/png' || file.mimetype==='image/jpg'){
        cb(null, true)
    } else {
        cb(null, false)
    }
};

const uploadFile = multer({
    storage,
    limits: {
        fileSize: 1024*1024*5
    },
    fileFilter
})

const router = express.Router();

const authController = new AuthController();

router.post('/register', uploadFile.single('photo'), authController.register)

router.post('/login', authController.login)

module.exports = router;