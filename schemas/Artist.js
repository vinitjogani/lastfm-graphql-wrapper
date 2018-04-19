module.exports = `
    type Artist {
        name: String
        bio: String
        imageURL: String
        albums(limit: Int): [Album]
        tracks(limit: Int): [Track]
        similar(limit: Int): [Artist]
        tags(limit: Int): [Tag]
    }
`