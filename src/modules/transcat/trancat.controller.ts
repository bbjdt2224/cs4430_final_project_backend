import db from '../../database/models/index';

class transcatController {
    addCatigories(req,res){
        db.transcat.create({
            transId: req.body.transaction,
            catId: req.body.catigory,
            amount: req.body.amount
        }).then(transcat =>{
            res.send(transcat);
        });
    }

    getCatigories(req,res){
        db.transcat.findAll({
            where:{
                transId : req.params.transid
            }
        }).then(transCats =>{
            res.send(transCats);
        })
    }
}

export default new transcatController(); 