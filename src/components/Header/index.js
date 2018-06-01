import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './style.css'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logoutUser } from "../../actions/data-actions";

class Header extends Component {

  handleLogout = () => {
    this.props.logoutUser()
  }
  
render(){
  return (
    <div className = 'header'>
      <p>Project management system </p>
      <div className ='menu'>
        <Link to = '/projects' className = 'link'> Active Projects </Link>
        <Link to = '/addProject' className = 'link'> Add new project</Link>
        <Link to = '/' className = 'link' onClick = {this.handleLogout} > <i class="fas fa-sign-out-alt"  ></i> Sign out</Link>
     </div>
    </div>
  )
}
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    logoutUser
  }, dispatch)
}

export default connect(mapDispatchToProps)(Header)