let tweets = require('../json_data/tweets.json');

// const dao = require('../db/tweets/tweet-dao');
// module.exports = (app) => {
//     const findAllTweets = (req, res) =>
//         dao.findAllTweets()
//             .then(tweets => res.json(tweets));
//     const deleteTweet = (req, res) =>
//         dao.deleteTweeet(req.params.id)
//             .then((status) => res.send(status));
//     const createTweet = (req, res) =>
//         dao.createTweet(req.body)
//             .then((insertedTweet) => res.json(insertedTweet));
//     const updateTweet = (req, res) =>
//         dao.updateTweet(req.params.id, req.body)
//             .then((status) => res.send(status));
module.exports = (app) => {

    const findAllTweets = (req, res) => {
        res.json(tweets);
    }

    const createTweet = (req, res) => {
        const newTweet = {
            _id: (new Date()).getTime() + '',
            "topic": "Web Development",
            "userName": "ReactJS",
            "verified": false,
            "handle": "ReactJS",
            "time": "2h",
            "avatar-image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
            "logo-image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
            "stats": {
                "comments": 123,
                "retweets": 234,
                "likes": 345
            },
            ...req.body,
        }
        newTweet['_id'] = (new Date()).getTime();
        tweets = [
            newTweet,
            ...tweets
        ];
        res.json(newTweet);
    }

    const deleteTweet = (req, res) => {
        const id = req.params['id'];
        tweets = tweets.filter(tweet => tweet._id !== id);
        res.sendStatus(200);
    }

    const likeTweet = (req, res) => {
        const id = req.params['id'];
        tweets = tweets.map(tweet => {
            if (tweet._id === id) {
                if (tweet.liked === true) {
                    tweet.liked = false;
                    tweet.stats.likes--;
                } else {
                    tweet.liked = true;
                    tweet.stats.likes++;
                }
                return tweet;
            } else {
                return tweet;
            }
        });
        res.sendStatus(200);
    }

    app.put('/api/tweets/:id/like', likeTweet);
    app.delete('/api/tweets/:id', deleteTweet);
    app.post('/api/tweets', createTweet);
    app.get('/api/tweets', findAllTweets);
};

