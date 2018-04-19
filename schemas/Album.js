module.exports = `
    type Album {
        name: String
        tracks: [Track]
        imageURL: String
        artist: Artist
        tags(limit: Int): [Tag]
    }
`