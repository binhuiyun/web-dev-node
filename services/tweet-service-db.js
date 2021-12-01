const dao = require('../db/tweets/tweet-dao');
const mongoose = require('mongoose');

module.exports = (app) => {
    const findAllTweets = (req, res) =>
    {console.log(req.body)
        dao.findAllTweets()
            .then(tweets => res.json(tweets))}
    const deleteTweet = (req, res) =>
        dao.deleteTweet(req.params.id)
            .then((status) => res.send(status))
    const postNewTweet = (req, res) =>
        dao.createTweet(req.body)
            .then((insertedTweet) => res.json(insertedTweet))
    const likeTweet = (req, res) =>
        dao.updateTweet(req.params.id, req.body)
            .then(tweet => res.json(tweet))

    app.put('/api/tweets/:id/like', likeTweet);
    app.delete('/api/tweets/:id', deleteTweet);
    app.post('/api/tweets', postNewTweet);
    app.get('/api/tweets', findAllTweets);
}