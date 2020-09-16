import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Dropdown from '../components/Dropdown'
import Information from '../components/Information'

export default class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             topic:"React",
        }
    }

    funChangeTopic=(value)=>{
        this.setState({topic:value})
    }
    

    render() {
        return (
            <Navbar>
                <Dropdown topic={this.state.topic} funChangeTopic={this.funChangeTopic}/>
                <Information topic={this.state.topic} />
            </Navbar>
        )
    }
}
