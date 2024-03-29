const express = require("express")
const router = express.Router()
const controller = require("../controllers/controller")

router.get("/test-me", function(req,res){
    res.send("api running")
})

router.post("/init", controller.initialiseCal);

router.post("/operation", controller.operation);

router.get("/undo", controller.undo);

router.get("/reset", controller.reset);

module.exports=router