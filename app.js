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
const path = require('path');

//include Models
//const {Garment, myGarmentArray } = require('./models/garmentModel')

//controllers
//const garmentsRouter = require('./controllers/garmentController');

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

app.get('/', (req, res) => {
  //if user is logged in:
  res.render('newUser');
  //else
  //res.render('myCloset');
});

//app.use('/garment', garmentsRouter)

// Add your code to start the server listening at PORT below:   
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });

/*  
async function createTables(){
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  return await db.sync();  
}
*/