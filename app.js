//middleware via npm install
const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const http = require('http');
const helmet = require('helmet');
const passport = require('passport');
const store = new session.MemoryStore();
const LocalStrategy = require('passport-local').Strategy;
const cors = require('cors');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const dotenv = require('dotenv').config();
const path = require('path');

//include Models
//const {Garment, myGarmentArray } = require('./models/garmentModel')

//controllers
const imageRouter = require('./controllers/imageController');
const authRouter = require('./controllers/authController');

//database handlder
const db = require('./models/index')
//createTables();

//view engine setup
app.engine('handlebars', engine());
app.set('views', './views');
app.set('view engine', 'handlebars');

//middleware Routers

// set paths for static content
app.use('/public', express.static(path.join(__dirname, "public")));


// Set localHost port to listen at
const PORT = process.env.PORT || 3000;

// Add middware for parsing request bodies here:
app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use(cookieParser());

// Add middleware for handling CORS requests and security
app.use(cors());
app.use(helmet());

// middleware for logging
app.use(morgan('dev'));

// set up session
app.use(session({
    name: 'supreme-broccoli',
    secret: process.env.SESSION_SECRET,  
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000*60*60, secure: false, sameSite: 'none' },
    secure: false,  //when in production, make it true.
    store
  })
)
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  //find user by id
    if (err) {
      return done(err);
    }
    done(null, user);
  
});

passport.use(
  new LocalStrategy(function (username, password, cb) {
    // user model function to authenticate user by using username and password and querying database
  })
);

app.get('/', (req, res) => {
  //if user is logged in:
  res.render('home');
  //else
  //res.render('mainInterface');
});

app.use('/image', imageRouter);
app.use('/auth', authRouter);

// Add your code to start the server listening at PORT below:   
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });