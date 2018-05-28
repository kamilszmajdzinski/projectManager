import React, { Component } from 'react';
import { Route } from "react-router-dom"
import Landing from "./components/Landing";
import Projects from './components/Projects'
import logo from './logo.svg';


export default class App extends Component {
  render(){
    return (
      <div>
        <main>
          <Route exact path = '/' component = {Landing} />
          <Route exact path = '/projects' component = {Projects} />
        </main>
      </div>
    )
  }
  
}


