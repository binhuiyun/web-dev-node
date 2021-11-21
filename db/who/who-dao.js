const model = require('./who-model');

const findAllWho = () => model.find();
const createWho = (tweet) => model.create(who);
const deleteWho = (id) => model.deleteOne({_id: id});
const updateWho = (id, who) => model.updateOne({_id: id},
    {$set: who});

module.exports = {
    findAllWho,createWho,deleteWho,updateWho
};
