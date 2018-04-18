const fetch = require("node-fetch")
const config = require("../config")
const { getArtist } = require("./Helpers")

module.exports = {
    Album: {
        imageURL(album) {
            if(!album.image) return null

            return album.image[album.image.length - 1]["#text"]
        },
        tracks(album) {
            return album.tracks.track
        },
        artist(album) {
            return getArtist(album.artist)
        }
    }
}