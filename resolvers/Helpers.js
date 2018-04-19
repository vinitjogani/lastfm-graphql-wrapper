const fetch = require("node-fetch")
const config = require("../config")

module.exports = {
    getArtist(name) {  
        const method = "&method=artist.getinfo"
        const params = "&artist=" + encodeURIComponent(name)
        return fetch(config.getRoot() + method + params)
            .then(res => res.json()).then(data => data.artist)
    },
    getTrack(name, artist) {  
        const method = "&method=track.getinfo"
        const params = "&track=" + encodeURIComponent(name) +
                       "&artist=" + encodeURIComponent(artist)
        return fetch(config.getRoot() + method + params)
            .then(res => res.json()).then(data => data.track)
    },
    getAlbum(name, artist) {
        const method = "&method=album.getinfo"
        const params = "&album=" + encodeURIComponent(name) +
                       "&artist=" + encodeURIComponent(artist)
        return fetch(config.getRoot() + method + params)
            .then(res => res.json()).then(data => data.album )
    }
}