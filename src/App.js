import React, {Component} from 'react'
import './App.css';
import './font/css/all.css';
import Nav1 from './components/Nav1';
import Nav2 from './components/Nav2';
import Container from './components/Container';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Nav1 />
        <Nav2 />
        <Container />
      </div>
    )
  }
}

export default App;
