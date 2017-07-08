import React from 'react'
import PropTypes from 'prop-types'
import {  graphql } from 'react-apollo';
import gql from 'graphql-tag'

class Menu extends  React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {data:{ loading, Categories }} = this.props
        if(loading==false){
          var categories = Categories.map(function(i){
              return(
                <li key={i.id}>{i.name}</li>
              )
          })
        }
        return(
            <ul>
                {categories}
            </ul>
        )
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
