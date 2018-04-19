const fetch = require("node-fetch")
const config = require("../config")
const { getArtist, getAlbum, getTrack } = require("./Helpers")

module.exports = {
    Tag: {
        artists(tag, args) {
            const method = "&method=tag.gettopartists"
            const params = "&tag=" + encodeURIComponent(tag.name)

            return fetch(config.getRoot() + method + params)
                .then(res => res.json())
                .then(data => data.topartists.artist)
                .then(data => data.map(a => getArtist(a.name)))
                .then(data => args.limit ? data.slice(0, args.limit) : data)
        },
        tracks(tag, args) {
            const method = "&method=tag.gettoptracks"
            const params = "&tag=" + encodeURIComponent(tag.name)

            return fetch(config.getRoot() + method + params)
                .then(res => res.json())
                .then(data => data.tracks.track)
                .then(data => data.map(a => getTrack(a.name, a.artist.name)))
                .then(data => args.limit ? data.slice(0, args.limit) : data)
        },
        albums(tag, args) {
            const method = "&method=tag.gettopalbums"
            const params = "&tag=" + encodeURIComponent(tag.name)

            return fetch(config.getRoot() + method + params)
                .then(res => res.json())
                .then(data => data.albums.album)
                .then(data => data.map(a => getAlbum(a.name, a.artist.name)))
                .then(data => args.limit ? data.slice(0, args.limit) : data)
        }
    }
}