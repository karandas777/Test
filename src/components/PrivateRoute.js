import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'

export default class PrivateRoute extends Component {
    render() {
        const userdata = localStorage.getItem('userdata');

        if(userdata === null || userdata === undefined || userdata === ""){
            return (<Redirect to="/login"/>)   
        }
        else{
            return(<Route {...this.props} />)
        }
    }
}
