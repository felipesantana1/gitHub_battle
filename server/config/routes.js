const user = require("../controllers/users.js");
const path = require("path");

module.exports = function(app){

    app.get("/users", function(req, res){
        user.all(req, res);
    });

    app.put("/users", function(req, res){
        console.log(req.body);
        user.create_update(req, res);
    });

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"));
    });
}