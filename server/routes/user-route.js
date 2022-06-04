const express = require('express')
const Router = express.Router()
const UserModel = require('../models/User')

//CREATE/REGISTER
Router.route('/create').post((req, res, next) => {
    const user = req.body;

    const { email } = user;
    user.role = 1;
    if (email.includes('ubt-uni.net')) {
        user.role = 2;
    }

    UserModel.create(user, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//LOGIN
Router.route('/login').post( async (req, res, next) => {
    const user = req.body;
    const {username, password} = user;

    const exists = await UserModel.findOne({ username, password }).lean()
    if (!exists) {
        return res.json();
    }

    const Profile = {
        ['First Name']: exists['First Name'],
        ['Last Name']: exists['Last Name'],
        ['username']: exists.username,
        ['email']: exists.email,
        ['role']: exists.role
    }
    res.json(Profile);
})

//READ ALL
Router.route('/').get((req, res, next) => {
    UserModel.find((error, result) => {
        if (error) return next(error);
        res.json(result);
        console.log(result);
    })
})

//READ ONE
Router.route('/get/:id').get((req, res, next) => {
    UserModel.findById(req.params.id, (error, result) => {
        if (error) return next(error)
        res.json(result)
    })
})

//UPDATE
Router.route('/update/:id').post((req, res, next) => {
    UserModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, result) => {
        if (error) return next(error)
        res.json(result)
    })
})

//DELETE
Router.route('/delete/:id').delete((req, res, next) => {
   UserModel.findByIdAndDelete(req.params.id, (error, result) => {
       if (error) return next(error)
       res.status(200).json({
           msg: result
       })
   })
})

module.exports = Router