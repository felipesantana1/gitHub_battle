const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = {

    all: function(req, res){
        User.find({}, function(err, users){
            if(err){
                console.log(err);
            } else {
                res.json(users);
            }
        });
    },

    create_update: function(req, res){
        console.log(req.body.username);
        User.update({username: req.body.username}, req.body, {upsert: true}, function(err, user){
            if(err){
                console.log(err);
            } else {
                console.log(user);
                res.json(user);
            }
        });
    }
}