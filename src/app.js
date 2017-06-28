import React from 'react'
import PropTypes from 'prop-types'
import {  graphql } from 'react-apollo';
import gql from 'graphql-tag'

class Menu extends  React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {data} = this.props
        console.log(data.Categories)
        return( <h1> grapqhl with nodejs + reactjs </h1> )
    }
}
Menu.propTypes = {
    data:PropTypes.shape({
        categories: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string
        })
    })
}

const MyQuery = gql` { Categories { id , name } }`
const MyComponentWithData = graphql(MyQuery)(Menu)
export default MyComponentWithData