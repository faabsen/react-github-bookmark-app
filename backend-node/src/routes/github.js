const routes = require('express').Router()
const githubApi = require('../api/github/api')

routes.get('/repositories', (req, res) => {
    if (req.query.search) {
        return githubApi.repositories.filter(req.query.search, (error, response) => {
            return res.send({
                total: response.total_count,
                items: response.items,
                error
            })
        })
    } else {
        return githubApi.repositories.list((error, response) => {
            return res.send({
                items: response,
                error
            })
        })
    }
})

module.exports = routes