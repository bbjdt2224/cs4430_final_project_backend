import db from '../../database/models/index';
import * as passport from 'passport';
import * as bcrypt from 'bcrypt';


class userController {
    //sets up passport to deal with login authentication
    configure(username, password, done) {
        db.user.findOne({ where: { email: username }}).then( function (user) {
            if (!user) { return done(null, false); }

            passport.serializeUser(function(user, done) {
                done(null, user);
            });
            passport.deserializeUser(function(user, done) {
                done(null, user);
            });

            bcrypt.compare(password, user.password, function(err, res) {
                if (res === true) {
                    return done(null, user);
                }
                if (res === false) {
                    return done(null, false);
                }
                return done(null, false);
            });
        });
    }
    /* POST /signup
    adds new user to database
        email
        password
    */
    signup(req, res) {
        db.user.create({
            email: req.body.email,
            firstName: 'Insert',
            lastName: 'Name'
        }).then( user => {
            bcrypt.hash(req.body.password , 10, function(err, hash) {
                user.update ({
                    password: hash
                });
            });
            res.send(user);
        });
    }
    /* POST /login
    if username and password are correct then redirect to next page
        email
        password
    */
    login(req, res) {
        res.send(req.session.passport.user);
    }
    /*If Login fails*/
    fail(req, res) {
        res.send('Wrong');
    }
    /* POST /logout
    logout the user
    */
    logout(req, res) {
        req.logout();
        res.send('Logged Out');
        //redirect
    }

    /* PUT /user/:id
    changes the user information
        firstName
        lastName
    */
    editUser(req, res) {
        if(req.session.passport.user) {
            db.user.update({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
            }, {
                where: {
                id: req.params['id']
                }
            }).then(user => {
                req.session.passport.user.firstName = req.body.firstName;
                req.session.passport.user.lastName = req.body.lastName;
                res.send(user);
            });
        }
    }

    /* GET /user
    gets the current user
    */
    getUser(req, res) {
        res.send(req.session.passport.user);
    }

    getUserById(req, res) {
        if(req.session.passport.user) {
            db.user.findById(req.params['id']).then(user => res.send(user));
        }
    }

    /* POST /check
    checks if there is an email in the database
    returns a boolean
    */
    checkUser(req, res) {
        if(req.session.passport.user) {
            db.user.findOne({
                where: {
                    email: req.body.email
                }
            }).then(user => {
                if (user) {
                    res.send(true);
                } else {
                    res.send(false);
                }
            });
        }
    }
}

export default new userController();

