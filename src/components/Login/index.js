import React, { Component } from 'react'
import { credentials } from '../../data'
import { loginUser } from '../../actions/data-actions'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import './style.css'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            login: '',
            password: '',
            errorMessage: ''
        }
    }

validateForm = () => {
    if (this.state.login.length === 0 || this.state.password.length === 0) {
        this.setState({ errorMessage: 'Podaj dane' });
        return false
    }else if (this.state.login === credentials.login && this.state.password === credentials.password) {
      return true
    }
}

handleClick = e => {
    e.preventDefault()
    if (this.validateForm()) {
        this.props.loginUser()
    }
}

render() {
    return (
      <div className = 'loginContainer'>
      <div className = 'signIn'>
        <p>Sign In</p>
      </div>
      <div className = 'formDiv'>
        <form className = 'form'>
            <label for = 'login'>Login</label>
            <input 
                type = 'text' 
                id = 'login' 
                placeholder = 'Enter login'
                value = {this.state.login}
                onChange = {e => this.setState({ login: e.target.value })}/>
            <label for = 'password'>Password</label>
            <input 
                type = 'password' 
                id = 'password' 
                placeholder = 'Enter password'
                value = {this.state.password}
                onChange = {e => this.setState({ password: e.target.value })} />
            <p className = 'errorMessage'>{this.state.errorMessage}</p>
            <button onClick = {e => this.handleClick(e)}>Log In</button>
        </form>
      </div>
       
      </div>
    )
  }
}

const mapStateToProps = ({ data }) => {
    return {
        isAuth: data.isAuth
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        loginUser
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)