import React, { Component } from 'react';
// import './App.css';

class AddProject extends Component {
  render() {
    return (
      <div>
          <h3>Add projects</h3>
          <form>
              <div className="row">
                <div className="form-group col-md-6">
                    <label htmlFor="" type="text">Title</label>
                    <input className="form-control" type="text" ref="title" placeholder="Title" />
                </div>
              </div>
          </form>
      </div>
    );
  }
}

export default AddProject;
