import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {

        return (
            <div className="my-3">
                <select className="form-control w-25 border-dark shadow-sm" value={this.props.topic} 
                onChange={(e)=>{this.props.funChangeTopic(e.target.value)}}>

                        <option value="React">React</option>
                        <option value="Javascript">Javascript</option>
                        <option value="Bootstrap">Bootstrap</option>
                </select>
            </div>
        )
    }
}
