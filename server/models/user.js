const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    username: {type:String, required:[true, "Username is required"]},
    avatar: {type:String},
    score: {type:Number, required:true}
}, {timestamps: true});

mongoose.model("User", UserSchema);