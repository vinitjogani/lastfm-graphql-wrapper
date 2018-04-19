module.exports = `
    type Track {
        name: String
        artist: Artist
        album: Album
        similar(limit: Int): [Track]
        playcount: Int
        tags(limit: Int): [Tag]
    }
`