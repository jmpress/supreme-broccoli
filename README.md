# supreme-broccoli
#### A back-end for hosting photo caption contests
#### By Jeffrey Press

## Description
This app was built to carry out the following behaviors:<br>
&emsp;**Behavior:** description<br>
&emsp;**Input:** description<br>
&emsp;**Output:** description<br>

## Specs
+ Using Sequelize, create models to represent the necessary objects involved.
    + Users, Images, Captions
+ Create a method for registering new Users.
    + Use Bcrypt package for password hashing.
+ Create endpoints for Users logging in and logging out.
+ Create an endpoint for retrieving all Images from database
+ Create an endpoint for retrieving a single Image and related Captions by the Image ID.
+ Create an endpoint for adding a new Caption to an Image.
+ Configure localized Caching with `node-cache`

## Stretch goals
+ Create an endpoint for uploading new Images.
+ Create a method for adding a new rating to a Caption.
+ Create a front-end for the app.

## Setup/Installation Requirements
+ Fork and clone this repository locally.
+ Install Node.
+ Navigate to folder and run `npm install` in the console.
+ run `npm start` in the console.
+ navigate to localhost:3000 to begin using the program.

OR

+ This app will be deployed on Heroku when it is complete: <https://supreme-broccoli.herokuapp.com>.

## Known Bugs
+ So many right now.

## Support and contact details
Please contact j.michael.press@gmail.com with questions, comments, or concerns. You are also welcome to submit a pull request.

## Technologies Used
+ Javascript
+ Node.js
+ Express
+ PostgreSQL
+ Sequelize
    + Sequelize-cli
+ Passport.js
    + Passport-local
+ Handlebars

### License
This software is released under the GNU general public license.

Copyright (c) 2022 Jeffrey Michael Press