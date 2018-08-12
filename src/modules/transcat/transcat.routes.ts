import * as express from 'express';
import * as passport from 'passport';
import * as LocalStrategy from 'passport-local';

import transcatController from './trancat.controller';

export default (app: express.Express): void => {

    app.use(passport.initialize());
    app.use(passport.session());

    app.get('api/transcat/')
};
