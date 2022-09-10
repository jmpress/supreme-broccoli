/*

X    An endpoint to retrieve all images.
X    An endpoint to retrieve an image by ID (this should include the images’ captions and other information).
X    An endpoint to add captions to a specific image.

    
*/

const express = require('express');
const db = require('../models/index');
const Router = require('express-promise-router');
const imageRouter = new Router();
const imageCache = require('../utils/cache');

imageRouter.get('/all', async (req, res, next) => {
    const cachedValue = imageCache.get(req, res, next);
    if(cachedValue){
        images = cachedValue;
    } else {
        images = await db.Image.findAll();
        res.locals.data = images;
        imageCache.set(req, res, next)
    }
    //console.log('images = ' + images)
    res.render('imageBrowser', {image: images, user:req.user}); 
});

imageRouter.get('/:id', async (req, res, next) => {  
    const cachedValue = imageCache.get(req, res, next);
    let target;
    let caps;
    
    if(cachedValue){
        ({target, caps} = cachedValue);
    } else {
        //find image by ID along with all captions
        const targetIndex = req.params.id;
        console.log(targetIndex);
        //validate targetIndex
        target = await db.Image.findAll({
            where: {
                id: targetIndex
            }
        });
        caps = await db.Caption.findAll({
            where: {
                imageID: targetIndex
            }
        })
        res.locals.data = {target, caps};
        imageCache.set(req, res, next)
    }
    res.render('imageDetail', {image: target[0].dataValues, caption: caps, user:req.user});
});

imageRouter.post('/caption/new', async (req, res, next) => {
    const { newCap, userID, imageID } = req.body;
    const userCaption = {
        captionContent: newCap,
        imageID,
        captionerID: userID,
        rating: 0
    }
    const newCaption = await db.Caption.create(userCaption);
    res.redirect(`/image/${imageID}`)
});


/* further work
imageRouter.put('/caption/rate/:id', (req, res, next) => {
    //I need to reference both the caption ID and the new rating to add; what's the best way to pass this data in? probably ?id=x&?rating=y
    
    //find caption with id
    
    res.status(200).send();
});


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