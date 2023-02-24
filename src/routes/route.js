const express = require("express")
const router = express.Router()
const controller = require("../controllers/controller")
//const mid = require("../middleware/cacheMid")

router.get("/test-me", function(req,res){
    res.send("api running")
})

router.post("/init", controller.initialiseCal);

router.post("/operation", controller.operation);

router.get("/undo", controller.undo);

module.exports=router