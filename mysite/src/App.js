import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Footer from './components/Footer'

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div className='app'>
          <Header />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/projects' component={Projects} exact />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}
export default App;