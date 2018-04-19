const fetch = require("node-fetch")
const config = require("../config")
const { getArtist, getAlbum, getTrack } = require("./Helpers")

module.exports = {
    Artist: {
        bio(artist) {
            return artist.bio.summary
        },
        imageURL(artist) {
            if(!artist.image) return null

            return artist.image[artist.image.length - 1]["#text"]
        },
        albums(artist, args) {
            const method = "&method=artist.gettopalbums"
            let params = "&artist="+ encodeURIComponent(artist.name)
            if(args.limit) params += "&limit=" + args.limit

            return fetch(config.getRoot() + method + params)
                .then(res => res.json())
                .then(data => data ? data.topalbums ? data.topalbums.album : null : null)
                .then(data => data.map((a) => getAlbum(a.name, a.artist.name)))
        },
        tracks(artist, args) {
            const method = "&method=artist.gettoptracks"
            let params = "&artist="+ encodeURIComponent(artist.name)
            if(args.limit) params += "&limit=" + args.limit

            return fetch(config.getRoot() + method + params)
                .then(res => res.json())
                .then(data => data ? data.toptracks ? data.toptracks.track : null : null)
                .then(data => data.map(t => getTrack(t.name, t.artist.name)))
        },
        similar(artist, args) {
            let results = artist.similar.artist.map((a) => getArtist(a.name))
            if(args.limit) results = results.slice(0, args.limit)

            return results
        },
        tags(artist, args) {
            let results = artist.tags.tag
            console.log(results)
            if(args.limit) results = results.slice(0, args.limit)
            return results
        }
    }
}