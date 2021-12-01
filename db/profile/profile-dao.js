const model = require('./profile-model');

const findProfileById = (id) => model.findOne({_id: id});
const updateProfile = (id, profile) => model.updateOne({_id: id},
    {$set: profile});

module.exports = {
    findProfileById,updateProfile
};