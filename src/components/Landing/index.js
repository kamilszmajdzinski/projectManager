import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import Login from '../Login'
import './style.css'
import { connect } from "react-redux";

class Landing extends Component {
  render() {
    return (
      !this.props.isAuth ? 
      (
      <div className = 'landing'>
        <Login />
      </div>
      ):(
        <Redirect to = '/projects' />
      )
    )
  }
}

const mapStateToProps = ({ data }) => {
  return {
    isAuth: data.isAuth
  }
}

export default connect(mapStateToProps, )(Landing)