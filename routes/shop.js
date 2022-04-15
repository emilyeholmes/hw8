const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

const User = require("../models/User");
const auth = require('../middleware/auth');

router.get('/list', auth, async (req, res) => {
    try {
        // TODO
        const user = await User.findById(req.user.id);
        res.send(user.shoppinglist);
    } catch (e) {
        res.send({ message: 'Error in Fetching list' });
    }
});

router.post('/add', auth, async (req, res) => {
    try {
        // TODO
        const user = await User.findById(req.user.id);
        user.shoppinglist.push(req.body.item);
        res.send(user.shoppinglist);
    } catch (e) {
        res.send({ message: 'Error in Fetching list' });
    }
});

router.delete('/delete', auth, async (req, res) => {
    try {
        // TODO
        const user = await User.findById(req.user.id);
        for (var i = 0; i < user.shoppinglist.length; i++) {
            if (shoppinglist[i] === req.body.item) {
                user.shoppinglist.splice(i, 1);
            }
        }
        res.send(user.shoppinglist);
    } catch (e) {
        res.send({ message: 'Error in Fetching list' });
    }
});

module.exports = router;

// router.get('/list', auth, async (req, res) => {
//     try {
//         // TODO
//     } catch (e) {
//         res.send({ message: 'Error in Fetching user' });
//     }
// });