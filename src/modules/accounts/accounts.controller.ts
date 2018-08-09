import db from '../../database/models/index';


class accountController {
    
    getAllAccounts(req, res){
        db.account.query('Select ...').then(accounts => {
            res.send(accounts);
        })
    }

    getAccount(req, res){

    }

    getTransaction(req, res){

    }

    addTransaction(req, res){
        
    }

    addAccount(req, res){

    }
}

export default new accountController();

