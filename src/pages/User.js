import React, { Component } from 'react'
import Navbar from '../components/Navbar'

export default class User extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             edit:false,
        }
    }

    funSetEdit=()=>{
        this.setState({edit:!this.state.edit});
    }

    funLogOut=()=>{
        localStorage.removeItem('userdata');
        this.props.history.push('/login')
    }
    

    render() {
        return (
            <React.Fragment>
            <Navbar/>

                <div className="container pt-3">

                <h4 className="my-4">Username : Mr. Dummy React</h4>

                    {
                        this.state.edit ? (
                            <h4>New Password :<input type="text" className="form-control d-inline-block w-25 border-dark ml-2" /></h4>
                        ) : (
                            <h4>Password : ********</h4>
                        )
                    }

                <div className="pt-5 mt-4">
                    <button className="btn btn-outline-dark mr-3" onClick={this.funSetEdit}>
                        {
                            this.state.edit ? "Save Password" : "Change Password"
                        }
                    </button>
                    <button className="btn btn-outline-dark" onClick={this.funLogOut}>Logout</button>
                </div>

                </div>
                
            </React.Fragment>
        )
    }
}
