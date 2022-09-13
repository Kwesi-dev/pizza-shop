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
    }
}, {timestamps: true})
module.exports = mongoose.Model(User, UserSchema)