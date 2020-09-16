import React, { Component } from 'react'

export default class TaskForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             title:"",
             completed:false,
             error:false,
        }
    }


    funSubmitTask=(e)=>{

        e.preventDefault();

        if(this.state.title === ""){
            this.setState({error:true});
        }
        else{

            const newTask = {
                title: this.state.title,
                completed: this.state.completed,
            }

            this.props.funAddTask(newTask);
        }
        
    }
    

    funHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    render() {
        return (
            <div className="p-3 col-md-4 bg-light border my-3 rounded-lg shadow-sm">
                    <form onSubmit={this.funSubmitTask}>
                        <div className="h5 text-center">Add Task</div>
                      
                        <input type="text" className="form-control my-3" name="title" 
                            value={this.state.title} placeholder="Title" onChange={this.funHandleChange} 
                        />
                        
                        <select className="form-control my-3" name="completed" 
                            value={this.state.completed} onChange={this.funHandleChange}
                        >
                            <option value={false}>Incomplete</option>
                            <option value={true}>Complete</option>
                        </select>

                        {
                            this.state.error ? (
                            <div className="alert alert-danger">
                                Please fill all details!
                            </div>
                            ) : null
                        }

                        <div className="d-flex justify-content-between">
                            <button className="btn btn-secondary btn-sm" 
                            onClick={(e)=>{e.preventDefault();this.props.funToggleForm()}}>
                                Close
                            </button>
                            <button type="submit" className="btn btn-primary btn-sm">Add</button>
                        </div>

                    </form>
                </div>
        )
    }
}
