import React, { Component } from 'react';
// import './App.css';

class AddProject extends Component {
  constructor(){
      super();
      this.state = {
          newProject: {}
      }
  }

  static defaultProps = {
      categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  handleSubmit(e){
      if(this.refs.title.value === ""){
          alert('Title is required');
      }
      e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
        return <option key={category} value={category}>{category}</option>
    });
    return (
      <div>
          <h3>Add projects</h3>
          <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="row">
                  <div className=" col-md-6">
                      <div className="form-group">
                            <label htmlFor="" type="text">Title</label>
                            <input className="form-control" type="text" ref="title" placeholder="Title" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="" type="text">Category</label>
                            <select className="form-control" ref="category">
                                {categoryOptions}
                            </select>
                        </div>

                        <div className="button-group">
                            <button className="btn btn-success" type="submit">Submit</button>
                        </div>
                  </div>
                
              </div>
          </form>
      </div>
    );
  }
}

export default AddProject;
