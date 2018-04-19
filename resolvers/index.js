const Query = require("./Query")
const Artist = require("./Artist")
const Track = require("./Track")
const Album = require("./Album")
const Tag = require("./Tag")
const _ = require("lodash")

const resolvers = _.merge(Query, Artist, Track, Album, Tag)
module.exports = resolvers