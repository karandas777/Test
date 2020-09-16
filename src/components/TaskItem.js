import React, { Component } from 'react'

export default class TaskItem extends Component {
    render() {

        const {id} = this.props;
        const {title, completed} = this.props.data;

        return (
            <div className="row h5 mb-0 py-3 border-bottom">
                <div className="col-2">{id+1}</div>
                <div className="col-6">{title}</div>
                <div className="col-2">{completed ? "True" : "False"}</div>
                <div className="col-2 text-right">
                    <button className="btn btn-danger btn-sm mb-2" onClick={()=>{this.props.funDeleteTask(id)}}>Delete</button>
                </div>
            </div>
        )
    }
}
