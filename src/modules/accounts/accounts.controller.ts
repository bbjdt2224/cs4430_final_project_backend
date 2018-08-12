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
		db.account.findOne({
				where: {
					id: req.params['id']
				}
			}).then(accounts => {
				res.send(accounts);
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
        db.account.create({
          acctNum: req.body.accountNum,
          vendor: req.body.vendor,
          ammount: req.body.ammount,
          createdAt: req.body.ammount
        })
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
