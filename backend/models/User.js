const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    oAuth: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

module.exports = mongoose.model("User", UserSchema)