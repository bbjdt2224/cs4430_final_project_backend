import db from '../../database/models/index';


class accountController {
    
    getAllAccounts(req, res){
        db.account.findAll({
			where: {
				userId: req.params['userId']
			}
		}).then(accounts => {
			res.send(accounts);
		});
    }

    getAccount(req, res){
		db.transaction.findAll({
				where: {
					acctNum: req.params['id']
				}
			}).then(tran => {
				res.send(tran);
			});
    }

    getTransaction(req, res){
		db.transaction.findOne({
			where: {
				id: req.params['id']
			}
		}).then(transaction => {
			res.send(transaction);
		})
    }

    addTransaction(req, res){
        db.transaction.create({
			vendor: req.body.vendor,
			amount: req.body.amount,
			date: req.body.date,
			acctNum: 1
		}).then(transaction => {
			res.send(transaction);
		});
    }

    addAccount(req, res){
		db.account.create({
			nickname: req.body.nickname,
			type: req.body.type,
			bankRefrence: req.body.bankRefrence,
			userId: 1
		}).then(user =>{
			res.send(user);
		})
    }
}

export default new accountController();

