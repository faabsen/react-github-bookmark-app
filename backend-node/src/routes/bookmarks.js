const routes = require('express').Router()
const bookmarks = require('../api/bookmarks/api')

routes.get('/bookmarks', (req, res) => {
    res.json({
        items: bookmarks.load()
    });
})

routes.post('/bookmarks', (req, res) => {
    if (bookmarks.add(req.body)) {
        res.status(201).json({
            success: true,
            message: 'New bookmark added'
        })
    } else {
        res.status(409).json({
            success: false,
            message: 'No (new) bookmark added'
        })
    }
})

routes.delete('/bookmarks/:id', (req, res) => {
    const bookmark = req.params;

    const func = bookmarks.remove(bookmark)

    if (func) {
        res.status(204).json({
            success: true,
            message: 'Bookmark with id (#' + bookmark.id + ') has been deleted'
        })
    } else {
        res.status(404).json({
            success: false,
            message: 'No bookmark with id (#' + bookmark.id + ') could be found.'
        })
    }
})

module.exports = routes