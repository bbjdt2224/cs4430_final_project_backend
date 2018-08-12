import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import users from './modules/users/users.routes';
import account from './modules/accounts/accounts.routes';

const app: express.Express = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

users(app);
account(app);

app.listen(3000, () => console.log('app is listening on port 3000'));
