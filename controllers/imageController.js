/*

X    An endpoint to retrieve all images.
X    An endpoint to retrieve an image by ID (this should include the images’ captions and other information).
    An endpoint to add captions to a specific image.

    
*/

const express = require('express');
const db = require('../models/index');
const Router = require('express-promise-router');
const imageRouter = new Router();

imageRouter.get('/all', (req, res, next) => {

    res.status(200).send();
});

imageRouter.get('/:id', (req, res, next) => {

    res.status(200).send();
});

imageRouter.put('/caption/new', (req, res, next) => {
    
    res.status(200).send();
});

/* further work
imageRouter.post('/new', (req, res, next) => {
    //route for adding a brand new image
});

imageRouter.delete('/delete', (req, res, next) => {
    //delete an image from the database, along with all its captions.
});

imageRouter.delete('/caption/delete', (req, res, next) => {
    //delete a single caption.
});

*/