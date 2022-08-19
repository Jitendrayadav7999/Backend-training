const publisherModel =require("../models/publisherModel")

const createPublisher = async function(req,res){
    let publisher = req.body
    let Publishercheated = await publisherModel.create(publisher)
    res.send({msg: Publishercheated})
}
module.exports.createPublisher = createPublisher