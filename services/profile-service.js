let profile = require('../json_data/profile.json');

module.exports = (app) => {
    const getCurrentProfile = (req, res) => res.json(profile);
    const updateCurrentProfile = (req, res) => {
        console.log(profile)
        profile = req.body;
        res.json(profile)
    }

    app.get('/api/profile', getCurrentProfile);
    app.put('/api/profile', updateCurrentProfile);
}