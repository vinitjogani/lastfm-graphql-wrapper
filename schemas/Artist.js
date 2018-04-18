module.exports = `
    type Artist {
        name: String
        bio: String
        imageURL: String
        albums(limit: Int): [Album]
        similar(limit: Int): [Artist]
    }
`