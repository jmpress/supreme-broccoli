const NodeCache = require( "node-cache" );
const cache = new NodeCache({stdTTL: 300});

//keygetter function that will get the value we use as a key (probably filename or fileURL?)
/*
function getUrlFromRequest(req) {
  const url = req.protocol + '://' + req.headers.host + req.originalUrl
  return url
}
*/

//function to set the value paired with a key
function set(req, res, next){
    //const url = keygetter(req)
    //cache.set(key, value (res.locals.data?)) 
    return next();
}

function get(req, res, next){
    //const url = keygetter(req)
    //const content = cache.get(url)
    if(content){
        //successful, send http response?
    }
    next();
}

module.exports = { get, set }


/* put something like this in the controllers
const cache = require('./cache-middleware') // 👈 import our cache middleware

router.get( 
  '/',
  cache.get,  // 👈
  processQuery,
  productsController.index,
  cache.set, // 👈
  responseHandler
)
*/