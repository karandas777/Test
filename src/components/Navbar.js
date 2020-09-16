import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid px-0">

        <div className="bg-primary p-2">
          <div className="container">
            <h4 className="text-light d-inline-block mr-3 my-0">Test</h4>
            <Link to="/" className="text-decoration-none text-light h6 mx-3">
              Home
            </Link>
            <Link to="/tasks" className="text-decoration-none text-light h6 mx-3">
              Tasks
            </Link>
            <Link to="/user" className="text-decoration-none text-light h6 mx-3">
              User
            </Link>
          </div>
        </div>

        <div className="container pt-3">{this.props.children}</div>
      </div>
    );
  }
}
