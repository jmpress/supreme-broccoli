/*

X    An endpoint to retrieve all images.
X    An endpoint to retrieve an image by ID (this should include the images’ captions and other information).
X    An endpoint to add captions to a specific image.

    
*/

const express = require('express');
const db = require('../models/index');
const Router = require('express-promise-router');
const imageRouter = new Router();

imageRouter.get('/all', async (req, res, next) => {
    const images = await db.Image.findAll();
    res.status(200).send(images);
});

imageRouter.get('/:id', async (req, res, next) => {
    //find image by ID along with all captions
    const targetIndex = req.params.id;
    //validate targetIndex
    const target = await db.Image.findAll({
        where: {
            id: targetIndex
        }
    });
    res.status(200).send(target);
});

imageRouter.put('/caption/new', (req, res, next) => {
    
    res.status(200).send();
});

imageRouter.put('/caption/rate/:id', (req, res, next) => {
    //I need to reference both the caption ID and the new rating to add; what's the best way to pass this data in? probably ?id=x&?rating=y
    
    //find caption with id
    
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

module.exports = imageRouter;