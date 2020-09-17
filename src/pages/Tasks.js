import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Axios from "axios";
import TaskItem from "../components/TaskItem";
import TaskForm from "../components/TaskForm";

export default class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskList: [],
      formOpen:false,
    };
  }

  componentDidMount() {
    this.funGetData();
  }

    // fetching data using api

    funGetData = () => {
        Axios.get("http://jsonplaceholder.typicode.com/todos")
        .then((res) => {
            if (res.status === 200) {
            this.setState({ taskList: res.data });
            }
        })
        .catch((err) => {
            console.log(err);
        });
    };

    // deleting a selected task

    funDeleteTask = (id) => {
        const newTaskList = this.state.taskList.filter((task,i) => {
        return i !== id;
        });
        this.setState({ taskList: newTaskList });
    };

    // adding task

    funAddTask = (task) => {
        const newTaskList = [task,...this.state.taskList];
        this.setState({taskList:newTaskList},()=>{this.funToggleForm()});
    }

    // toggling form

    funToggleForm=()=>{
        this.setState({formOpen:!this.state.formOpen},()=>{window.scrollTo(0,0)});
    }


  render() {
    return (
      <React.Fragment>
      <Navbar/>

      <div className="container pt-3">

          {/* loading text */}
        {this.state.taskList.length === 0 ? (
          <div className="text-center h5 mt-4">Loading Tasks</div>
        ) : null}


        <div className="py-3 sticky-top d-inline-block">
            {
                this.state.formOpen ? null : (
                    <button className="btn btn-primary btn-sm shadow-sm" onClick={this.funToggleForm} >
                    Add Task
                  </button>
               )
            }
        </div>


        {
            this.state.formOpen ? (
                <TaskForm funToggleForm={this.funToggleForm} funAddTask={this.funAddTask}/>
            ) : null
        }


        <div className="py-4">
          {this.state.taskList &&
            this.state.taskList.map((data,i) => (
              <TaskItem key={i} id={i} data={data} funDeleteTask={this.funDeleteTask} />
            ))}
        </div>

        </div>

      </React.Fragment>
    );
  }
}
