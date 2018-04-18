module.exports = `
    type Query {
        tracks(query: String, limit: Int): [Track]
        albums(query: String, limit: Int): [Album]
        artists(query: String, limit: Int): [Artist]
        charts(limit: Int): [Track]
    }
`

// Tags