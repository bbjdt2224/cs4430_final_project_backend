import db from '../../database/models/index';


class accountController {
    
    getAllAccounts(req, res){
        db.account.query('Select ...').then(accounts => {
            res.send(accounts);
        })
    }

    getAccount(req, res){
		db.account.findOne({
				where:{
					id = req.params['id'];
				}
			}).then(accounts => {
				res.send(accounts);
			});
    }

    getTransaction(req, res){
		db.account.findOne(
			transaction{
				
			}
		)
    }

    addTransaction(req, res){
        
    }

    addAccount(req, res){
		db.Account.create({
			nickname: req.body.nickname,
			type: req.body.type,
			bankRefrence: req.body.bankRefrence
		}).then(user =>{
			res.send(user);
		})
    }
}

export default new accountController();

