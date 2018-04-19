const fetch = require("node-fetch")
const config = require("../config")
const { getArtist, getTrack, getAlbum } = require("./Helpers")

module.exports = {
    Query: {
        artists(root, args) {
            if(args.query === undefined) return null;
            
            const method = "&method=artist.search"
            let params = "&artist=" + encodeURIComponent(args.query)
            if(args.limit) params += "&limit=" + args.limit

            return fetch(config.getRoot() + method + params )
                .then(res => res.json())
                .then(data => data.results.artistmatches.artist)
                .then(data => data.map((obj) => getArtist(obj.name)))
        },
        tracks(root, args) {
            if(args.query === undefined) return null;
            
            const method = "&method=track.search"
            let params = "&track=" + encodeURIComponent(args.query)
            if(args.limit) params += "&limit=" + args.limit

            return fetch(config.getRoot() + method + params )
                .then(res => res.json())
                .then(data => data.results.trackmatches.track)
                .then(data => data.map((obj) => getTrack(obj.name, obj.artist)))
        },
        albums(root, args) {
            if(args.query === undefined) return null;
            
            const method = "&method=album.search"
            let params = "&album=" + encodeURIComponent(args.query)
            if(args.limit) params += "&limit=" + args.limit

            return fetch(config.getRoot() + method + params )
                .then(res => res.json())
                .then(data => data.results.albummatches.album)
                .then(data => data.map((obj) => getAlbum(obj.name, obj.artist)))
        },
        charts(root, args) {
            const method = "&method=chart.gettoptracks"
            let params = args.limit ? "&limit=" + args.limit : ""

            return fetch(config.getRoot() + method + params)
                .then(res => res.json())
                .then(data => data.tracks.track)
                .then(tracks => tracks.map((t) => getTrack(t.name, t.artist.name)))
        },
        genres(root, args) {
            const method = "&method=tag.getTopTags"

            return fetch(config.getRoot() + method)
                .then(res => res.json())
                .then(data => data.toptags.tag)
                .then(data => args.limit ? data.slice(0, args.limit) : data)
        },
        genre(root, args) {
            const method = "&method=tag.getinfo"
            const params = "&tag=" + args.name

            return fetch(config.getRoot() + method + params)
                .then(res => res.json())
                .then(data => data.tag)
        }
    }
}