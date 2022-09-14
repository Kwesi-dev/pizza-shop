const router = require("express").Router()
const User = require("../models/User")
const CryptoJS = require("crypto-js")

//register a user
router.post("/register", async(req, res) => {
    const hashedPassword = CryptoJS.AES.encrypt(req.body.password, process.env.Secret_Key).toString();
    const newUser = new User({
        email: req.body.email,
        password: hashedPassword,
        oAuth: false
    })
    try{
        //check if user already exist
        const user = await User.findOne({email : req.body.email})
        if(!user){
            const savedUser = await newUser.save()
            res.status(201).json(savedUser)
        }else{
            res.status(400).json({
                success: false,
                message: "user already exist"
            })
        }
    }catch(err){
        res.status(400).json(err)
    }
})

//user login
router.post("/login", async(req, res) => {
    try{
        //checking the user email
        const user = await User.findOne({email: req.body.email})
        if(!user) return res.status(404).json({
            message: "email is incorrect or email does not match password"
        })

        //check password
        const bytes = CryptoJS.AES.decrypt(user.password, process.env.Secret_Key);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);        
        if(originalPassword !== req.body.password) return res.status(404).json({
            message: "password is incorrect"
        })

        res.status(200).json(user)
    
    }catch(err){
        res.status(400).json(err)
    }
})
module.exports = router