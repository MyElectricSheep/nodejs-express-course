const db = require('../utils/db')
const client = require('../utils/twitter')

exports.results = (req, res) => {
    const query = req.query.q
    if (!query) {
        res.send('Error')
    } else {
        db.getCollection('searches').insert({term: query});
        db.saveDatabase();
        client.get('search/tweets', {q: query}, (err, tweets, response) => {
            res.json(tweets)
        })
    }
}