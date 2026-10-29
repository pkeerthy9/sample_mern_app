
let express = require('express');
let router = express.Router();
let { users } = require('../models/users');
let bcrypt = require('bcrypt');

router.post("/register", async (req, res) => {
    try {
        let data = req.body;
        data.password = await bcrypt.hash(data.password, 10);

        let newuser = new users(data);
        let result = await newuser.save();

        res.status(201).send(result);
    } catch (error) {
        res.status(500).send({ msg: "Registration failed", error: error.message });
    }
});

router.post("/login", async (req, res) => {
    try {
        let data = req.body;
        let emailcheck = await users.findOne({ emailid: data.emailid });

        if (!emailcheck) {
            return res.status(404).send({ msg: "User not found" });
        }

        let passcheck = await bcrypt.compare(
            data.password,
            emailcheck.password
        );

        if (passcheck) {
            return res.send({
                msg: "Login successful",
                User: {
                    _id: emailcheck._id,
                    name: emailcheck.name,
                    role: emailcheck.role
                }
            });
        }

        return res.status(401).send({ msg: "Login failed" });
    } catch (error) {
        res.status(500).send({ msg: "Login error", error: error.message });
    }
});

router.get("/viewtask", (req, res) => {
    res.send("viewtask router called");
});

router.patch("/updateprofile/:id", async (req, res) => {
    try {
        let data = req.body;

        if (data.password) {
            data.password = await bcrypt.hash(data.password, 10);
        }

        let result = await users.findByIdAndUpdate(
            req.params.id,
            { $set: data },
            { new: true }
        );

        if (!result) {
            return res.status(404).send({ msg: "User not found" });
        }

        res.send(result);
    } catch (error) {
        res.status(500).send({ msg: "Update failed", error: error.message });
    }
});

module.exports = router;
