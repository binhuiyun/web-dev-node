const dao = require('../db/profile/profile-dao');
module.exports = (app) => {
    const findProfileById = (req, res) =>
        dao.findProfileById(req.params.id)
            .then(profile => res.json(profile));


    const updateProfile = (req, res) =>
        dao.updateProfile(req.params.id, req.body)
            .then((status) => res.send(status));

    app.put("/rest/profile/:id", updateProfile);
    app.get("/rest/profile/:id", findProfileById);
}

// let profile = require('../json_data/profile.json');
//
// module.exports = (app) => {
//     const getCurrentProfile = (req, res) => res.json(profile);
//     const updateCurrentProfile = (req, res) => {
//         console.log(profile)
//         profile = req.body;
//         res.json(profile)
//     }
//
//     app.get('/api/profile', getCurrentProfile);
//     app.put('/api/profile', updateCurrentProfile);
// }