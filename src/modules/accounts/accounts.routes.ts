import * as express from 'express';

import AccountsController from './accounts.controller';

export default (app: express.Express): void => {

    app.get('/api/accounts', AccountsController.getAllAccounts);

    app.get('/api/account/:id', AccountsController.getAccount);

    app.get('/api/transaction/:id', AccountsController.getTransaction);

    app.post('/api/account', AccountsController.addAccount);

    app.post('/api/transaction', AccountsController.addTransaction);

};
