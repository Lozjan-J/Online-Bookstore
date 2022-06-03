const express = require('express')
const fileUpload = require('express-fileupload')
const Router = express.Router()
const BookModel = require('../models/Book')

//CREATE
Router.route('/create').post(fileUpload(), (req, res, next) => {
    const img = req.files.Image;
    
    var destination = `.././client/public/uploads/${img.name}`;
    img.mv(destination, err => { //creates image
        if(err) {
            console.log(err);
        }
    });
    //^^ uploads image

    //creates model in the database
    const book = {...req.body, 'Image': img.name};
 
    BookModel.create(book, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//READ ALL
Router.route('/').get((req, res, next) => {
    BookModel.find((error, result) => {
        if (error) return next(error);
        res.json(result);
        console.log(result);
    })
})

//READ ONE
Router.route('/get/:id').get((req, res, next) => {
    BookModel.findById(req.params.id, (error, result) => {
        if (error) return next(error)
        res.json(result)
    })
})

//UPDATE
Router.route('/update/:id').post((req, res, next) => {
    BookModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, result) => {
        if (error) return next(error)
        res.json(result)
    })
})

//DELETE
Router.route('/delete/:id').delete((req, res, next) => {
   BookModel.findByIdAndDelete(req.params.id, (error, result) => {
       if (error) return next(error)
       res.status(200).json({
           msg: result
       })
   })
})

module.exports = Router