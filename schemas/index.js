const Artist = require("./Artist")
const Album = require("./Album")
const Track = require("./Track")
const Query = require("./Query")

module.exports = [Query, Artist, Album, Track].join("\n");