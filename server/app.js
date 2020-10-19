const express = require("express");
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');

const app = express();

// allow cross server request
app.use(cors()); 

// middleware
app.use('/graphql',graphqlHTTP({
    schema,
    // pretty: true,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("server on port 4000")
});