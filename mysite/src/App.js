import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import Projects from './components/Projects'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='body'>  
          <Header />
          <Projects />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
