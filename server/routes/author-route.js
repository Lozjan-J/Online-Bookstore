const express = require('express')
const Router = express.Router()
const AuthorModel = require('../models/Author')

//CREATE
Router.route('/create').post((req, res, next) => {
    const author = req.body

    AuthorModel.create(author, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//READ ALL
Router.route('/').get((req, res, next) => {
    AuthorModel.find((error, result) => {
        if (error) return next(error);
        res.json(result);
    })
})

//READ ONE
Router.route('/get/:id').get((req, res, next) => {
    AuthorModel.findById(req.params.id, (error, result) => {
        if (error) return next(error)
        res.json(result)
    })
})

//UPDATE
Router.route('/update/:id').post((req, res, next) => {
    AuthorModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, result) => {
        if (error) return next(error)
        res.json(result)
    })
})

//DELETE
Router.route('/delete/:id').delete((req, res, next) => {
    AuthorModel.findByIdAndDelete(req.params.id, (error, result) => {
       if (error) return next(error)
       res.status(200).json({
           msg: result
       })
   })
})

module.exports = Router