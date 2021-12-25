const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model("User");

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        res.status(401).json({ error: "You must be logged In" })
    }
    const token = JSON.parse(authorization)
    jwt.verify(token, JWT_SECRET, (err, payload) => {
        if (err) {
            console.log(err)
            return res.status(401).json({ error: "You must be logged in" })
        }

        const {_id}=payload;
        User.findById(_id).then(userdata=>{
            req.user=userdata;
            next();
        })
    })
}