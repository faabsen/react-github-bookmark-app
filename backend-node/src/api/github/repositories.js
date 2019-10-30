const request = require('request')

const list = (callback) => {
    const url = process.env.GITHUB_API_URL + '/repositories'

    request({
        url,
        headers: {
            'User-Agent': 'request'
        },
        json: true
    }, (error, {
        body
    }) => {
        if (error) {
            callback('Unable to connect to the internet!', undefined)
        } else if (body.error) {
            callback('Unable to find results from the api', undefined)
        } else {
            callback(undefined, body)
        }
    })
}

const filter = (search = '', callback) => {
    const url = process.env.GITHUB_API_URL + '/search/repositories'
    const params = { q:search }

    request({
        url,
        headers: {
            'User-Agent': 'request'
        },
        qs: params,
        json: true
    }, (error, {
        body
    }) => {
        if (error) {
            callback('Unable to connect to the internet!', undefined)
        } else if (body.error) {
            callback('Unable to find results for the search term', undefined)
        } else {
            callback(undefined, body)
        }
    })
}


module.exports = { list, filter }