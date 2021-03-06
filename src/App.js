import React, { Component } from 'react';
import Projects from './components/Projects'
import AddProject from './components/AddProjects'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount(){
    this.setState({projects: [
      {
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development'
        }
    ]})
  }

  render() {
    return (
      <div className="App">
       
        <div className="container">
           My App
          <AddProject />
          <Projects projects={this.state.projects} />
        </div>
      </div>
    );
  }
}

export default App;
