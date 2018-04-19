module.exports = `
    type Tag {
        name(limit: Int): String
        tracks(limit: Int): [Track]
        albums(limit: Int): [Album]
        artists(limit: Int): [Artist]
    }
`