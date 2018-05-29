import React, { Component } from 'react';
import { Route } from "react-router-dom"
import Landing from "./components/Landing";
import Projects from './components/Projects'
import AvailableProjects from './components/AvailableProjects'
import logo from './logo.svg';


export default class App extends Component {
  render(){
    return (
      <div>
        <main>
          <Route exact path = '/' component = {Landing} />
          <Route exact path = '/projects' component = {Projects} />
          <Route exact path = '/addProject' component = {AvailableProjects} />
        </main>
      </div>
    )
  }
  
}


