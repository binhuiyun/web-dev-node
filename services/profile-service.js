let profile = require('../data/profile.json');

module.exports = (app) => {
    const getCurrentProfile = (req, res) => res.json(profile);
    const updateCurrentProfile = (req, res) => {
        const profile = req.body;
        res.json(profile)
    }
    app.get('/api/profile', getCurrentProfile);
    app.put('/api/profile', updateCurrentProfile);
}