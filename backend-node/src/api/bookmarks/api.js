const fs = require('fs')

const load = () => {
    try {
        const dataBuffer = fs.readFileSync(__dirname  + '/bookmarks.json')
        return JSON.parse(dataBuffer.toString())
    } catch (e) {
        return []
    }
}

const add = (bookmark) => {
    var bookmarks = load()
    const duplicates = bookmarks.find((entry) => entry.id === bookmark.id)

    if (!duplicates) {
        bookmarks.push(bookmark)
        store(bookmarks)
        return true
    } else {
        return false
    }
}

const remove = (bookmark) => {
    const bookmarks = load()
    const filteredBookmarks = bookmarks.filter((entry) => entry.id != bookmark.id)

    if (bookmarks.length > filteredBookmarks.length) {
        store(filteredBookmarks)
        return true
    }
    return false
}

const store = (bookmarks) => {
    fs.writeFileSync(__dirname + '/bookmarks.json', JSON.stringify(bookmarks))
}

module.exports = {
    load,
    add,
    remove
}