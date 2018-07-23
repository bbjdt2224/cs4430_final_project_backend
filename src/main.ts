import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';

const app: express.Express = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//var db  = require('./database/models/index.js')

//var users = require('./modules/users/users.routes.js')

// modules

// Middleware

// Routes

// connect to db

// set static folder to serve angular app
// app.use(express.static(path.join(__dirname, staticDir)));


app.listen(3000, () => console.log('app is listening on port 3000'));
