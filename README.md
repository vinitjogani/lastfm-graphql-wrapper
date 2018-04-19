# lastfm-graphql-wrapper
A GraphQL wrapper for the LastFM Music API

This is a demonstration of how simple and effective GraphQL can be to provide a unified and powerful interface to complex or poorly-maintained APIs.

Follow these steps to test it:

  (1) Clone the repository
  
  (2) Get a LastFM API_KEY and API_SECRET and fill it into `config.js`
  
  (3) Start the server using `node index.js`
  
  (4) Open the trusty GraphiQL interface at `localhost:8080/graphiql`
  
  (5) Explore docs and write queries!
  
The code is divided into two parts: schemas (or more precisely, type definitions) and resolvers (each in their own directory). The rest of the code is straightforward NodeJS, with all the special GraphQL server creation stuff happening in the main index.js file.
