const fetch = require("node-fetch")
const config = require("../config")
const { getArtist, getAlbum, getTrack } = require("./Helpers")

module.exports = {
    Track: {
        artist(track) {
            return getArtist(track.artist.name)
        },
        album(track) {
            if(track.album) return getAlbum(track.album.title, track.artist.name)
            else return null
        },
        similar(track, args) {
            const method = "&method=track.getsimilar"
            let params = "&track=" + encodeURIComponent(track.name) + 
                         "&artist=" + encodeURIComponent(track.artist.name)
            if(args.limit) params += "&limit=" + args.limit

            return fetch(config.getRoot() + method + params)
                .then(res => res.json())
                .then(data => data? data.similartracks? data.similartracks.track : null : null)
                .then(data => data.map(t => getTrack(t.name, t.artist.name)))
        },
        tags(track, args) {
            let results = track.toptags.tag
            if(args.limit) results = results.slice(0, args.limit)
            return results
        }
    }
}