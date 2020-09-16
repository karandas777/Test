import React, { Component } from 'react'

export default class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             password:"",
             error:false,
        }
    }
    

    funHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }


    funlogin=(e)=>{

        e.preventDefault();

        if(this.state.username === "" || this.state.password === ""){
            this.setState({error:true});
        }
        else{
            localStorage.setItem("userdata",this.state.username+this.state.password);
            this.props.history.push('/');
        }
        
    }


    render() {
        return (
            <div className="col-md-4 mx-auto py-5 mt-5">
                <form className="p-4 mt-4">
                    <h3 className="mb-4">Login</h3>
                    <input type="text" className="form-control shadow-sm my-3" placeholder="Username"
                        name="username" value={this.state.username} onChange={this.funHandleChange}
                    />
                    <input type="password" className="form-control shadow-sm my-3" placeholder="Password"
                        name="password" value={this.state.password} onChange={this.funHandleChange}
                    />
                        {
                            this.state.error ? (
                            <div className="alert alert-danger">
                                Please fill all details!
                            </div>
                            ) : null
                        }
                    <div className="mt-4">
                        <button className="btn btn-primary shadow-sm" onClick={this.funlogin}>Login</button>
                    </div>
                </form>
            </div>
        )
    }
}
