const Artist = require("./Artist")
const Album = require("./Album")
const Track = require("./Track")
const Tag = require("./Tag")
const Query = require("./Query")

module.exports = [Query, Artist, Album, Track, Tag].join("\n");