let express = require('express');
let router = express.Router();
let{users} =require('../models/users');
let{task} =require('../models/task');

router.get("/viewemp", (req, res) => {
    res.send("view employee route called");
});

router.post("/assign-task", async (req, res) => {
    let data=req.body;
    let newTask=new task(data);
    let result=await newTask.save();
    res.send(result);
});

router.delete("/deleteemp", (req, res) => {
    res.send("delete employee route called");
});

router.get("/viewtask", (req, res) => {
    res.send("view task route called"); 
});

module.exports = router;