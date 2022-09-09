/*

Use the library bcrypt and create registration, login, and logout endpoints.

You can create a hash from the users registration password and store it in the database. Once the user logs in, that password can be compared to the one stored in the database for authentication.

Make sure you’re able to create a user session.

*/

const express = require('express');
const db = require('../models/index');
const Router = require('express-promise-router');
const authRouter = new Router();
const { makeSaltedHash, comparePasswords } = require('../utils/utils');
const passport = require('passport');

authRouter.route('/login')
    .get((req, res, next) => {
        res.render('login');
    })
    .post(passport.authenticate('local', { 
        successRedirect: '/image/all', 
        failureRedirect: '/auth/login' 
    }));

authRouter.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/auth/login');
});

authRouter.route('/register')
    .get((req, res, next) => {
        res.render('newUser');
    })
    .post(async (req, res, next) => {
    const { firstName, lastName, userEmail, userPassA, userPassB } = req.body;
    //check passA and passB are equal 
    if(userPassA !== userPassB){res.redirect('/auth/register');}
    //Salt and hash the pass
    //save new user to database.
    const newUser = {
        firstName, 
        lastName,
        email: userEmail,
        token: '',
        password: userPassA
    }
    const regUser = await db.User.create(newUser);
    console.log("auto-generated ID:", regUser.id);
    //redirect to auth/login
    res.redirect('/auth/login');
});

authRouter.get('/profile', (res, req, next) => {
    res.render('profile', {user: req.user});
})

module.exports = authRouter;