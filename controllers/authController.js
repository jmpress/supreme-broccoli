/*

Use the library bcrypt and create registration, login, and logout endpoints.

You can create a hash from the users registration password and store it in the database. Once the user logs in, that password can be compared to the one stored in the database for authentication.

Make sure you’re able to create a user session.

*/

const express = require('express');
const db = require('../models/index');
const Router = require('express-promise-router');
const authRouter = new Router();

authRouter.post('/login', (req, res, next) => {

    res.status(200).send();
});

authRouter.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/');
});

authRouter.get('/register', (req, res, next) => {
    res.render('newUser');
});

authRouter.post('/register', (req, res, next) => {
    const { firstName, lastName, userEmail, userPassA, userPassB} = req.body;
    //check passA and passB are equal 
    //Salt and hash the pass
    //save new user to database.
    //redirect to auth/login
    res.status(200).send();
});

module.exports = authRouter;