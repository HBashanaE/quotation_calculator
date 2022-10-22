const express = require( "express" );
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const port = 8080;

app.get( "/get_quote", ( req, res ) => {

    res.send( "Hello world!" );
} );

app.listen( port, () => {
    console.log( `Server started at http://localhost:${ port }` );
} );