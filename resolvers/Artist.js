const fetch = require("node-fetch")
const config = require("../config")
const { getArtist } = require("./Helpers")

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
            let params = "&artist="+ artist.name
            if(args.limit) params += "&limit=" + args.limit

            return fetch(config.getRoot() + method + params)
                .then(res => res.json())
                .then(data => data ? data.topalbums ? data.topalbums.album : null : null)
        },
        similar(artist, args) {
            let results = artist.similar.artist.map((a) => getArtist(a.name))
            if(args.limit) results = results.slice(0, args.limit)

            return results
        }
    }
}