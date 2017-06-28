import express from 'express'
let app = express()
const PORT = 3333

//listen port
app.listen(PORT, ()=>{
    console.log(`GraphQL API running with port ${PORT}`)
})

import graphQLHTTP from 'express-graphql'

//import schema
import schema from './schema'







//static file
app.use(express.static('public'))
app.use(express.static('dist'))

//using template engines with express
app.set('view engine', 'ejs')
app.set('views', './views')

//route
app.get('/', (req, res)=>{
    res.render('index')
})



//graphql
app.use('/graphql', graphQLHTTP({ schema: schema, pretty: true, graphiql: true }));

