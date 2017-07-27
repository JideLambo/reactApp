import React, { Component } from 'react';
// import './App.css';

class ProjectItem extends Component {
  render() {
    return (
      <li className="newclass">
        <strong>{this.props.project.title}</strong> : {this.props.project.category}
      </li>
    );
  }
}

export default ProjectItem;
