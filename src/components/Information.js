import React, { Component } from "react";

export default class Information extends Component {
  render() {
    return (
      <React.Fragment>

        <div className="h1 pt-4 mb-3">
          This section is about{" "}
          <span className="text-primary">{this.props.topic}</span>.
        </div>

        <div className="h5 text-muted">
          <ul>

            <li>
              <span className="text-dark">{this.props.topic}</span> is an
              essential tool in Web Developement.
            </li>

            <li>
              Using <span className="text-dark">{this.props.topic}</span>{" "}
              makes the designing process faster & more reliable.
            </li>

            <li>
              <span className="text-dark">{this.props.topic}</span> has a very
              large community support.
            </li>
            
          </ul>
        </div>

      </React.Fragment>
    );
  }
}
