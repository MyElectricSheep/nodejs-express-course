const core = require('../controllers/core')
const api = require('../controllers/api')

const router = (app) => {

    app.get('/', core.home)

    app.get('/top', core.top)

    app.get('/results', core.results)
    
    app.get('/api/results', api.results)
}

module.exports = router