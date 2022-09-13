# supreme-broccoli
#### A back-end for hosting photo caption contests
#### By Jeffrey Press

## Description
This app was built to carry out the following:
+ Anyone may browse the site without registering.
+ Main page displays thumbnails of all Images in the database as clickable links.
+ Each Image links to a detail page with the full-size Image and a table of user-submitted Captions for that Image.
+ Only registered Users may submit Captions on Images.
+ Register new Users to database and allow future log ins.
+ Logging in or out does not navigate away from currently viewed page.


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
+ Write openAPI2.0 specification documentation

## Future work
+ Create an endpoint for uploading new Images.
+ Create a method for rating Captions.
+ Use an email validation API to send verfication email for User registration.


## Setup/Installation Requirements
+ Fork and clone this repository locally.
+ Install Node.
+ Navigate to folder and run `npm install` in the console.
+ run `npm start` in the console.
+ navigate to localhost:3000 to begin using the program.

OR

+ This app has been deployed on Heroku: <https://supreme-broccoli.herokuapp.com>.

## Known Bugs
+ Email addresses with problematic characters such as < > { } " etc will be altered. If you register using an email address, which then does not allow you to log in, please try again with a different email address.
+ Does not work in Chrome or Chromium-based browsers due to (I think) the way Chrome handles referrer policy headers and its interaction with my use of res.redirect('back') in site navigation. I've had good results with Firefox and Safari. This issue should be addressed in the next sprint.

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