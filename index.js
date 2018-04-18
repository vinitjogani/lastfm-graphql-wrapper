// Import libraries
const { makeExecutableSchema } = require("graphql-tools")
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express")
const bodyParser = require("body-parser")

// Make executable schema
const typeDefs = require("./schemas")
const resolvers = require("./resolvers")
const schema = makeExecutableSchema({ typeDefs, resolvers })

// Initialize Express middlewares
const app = require("express")()
app.use(bodyParser.json())
app.use("/graphql", graphqlExpress({ schema }))
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

// Start app
app.listen(8080, () => {
    console.log("Listening on 8080")
})