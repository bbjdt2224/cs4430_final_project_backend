import * as express from 'express';
import * as passport from 'passport';

import transcatController from './trancat.controller';

export default (app: express.Express): void => {

    app.use(passport.initialize());
    app.use(passport.session());

    app.post('api/transcat/addCatigories/',transcatController.addCatigories);

    app.get('api/transcat/getCatigories/:transid',transcatController.getCatigories);
};
