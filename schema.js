import {
    GraphQLID,
    GraphQLNonNull,
    GraphQLString,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList
} from 'graphql'

var categories = [
    { id: 1, name: 'The Thao'},
    { id: 2, name: 'Giai Tri'},
    { id: 3, name: 'Giao Duc'},
    { id: 4, name: 'Dai Hoc'}
]

const categoriesType =  new GraphQLObjectType({
    name: "categories",
    description: "categories api",
    fields: ()=>({
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        name: {
            type: GraphQLString
        }
    })
})

let Query = new GraphQLObjectType({
    name: "Query",
    description: "this is a root query categories",
    fields: ()=>({
        Categories:{
            type: new GraphQLList(categoriesType),
            resolve(){
                return categories
            }
        }
    })
})

let schema = new GraphQLSchema({
    query: Query
})

export default schema

