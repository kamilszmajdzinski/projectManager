import React, { Component } from 'react'
import Header from '../Header'
import './style.css'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getAvailableProjects, addProject } from "../../actions/data-actions";
import { Redirect } from "react-router-dom";

class AvailableProjects extends Component {

componentDidMount() {
    this.props.getAvailableProjects()
}


handleAddClick(project){
    this.props.addProject(project);
   return <Redirect to = '/projects' />
}

renderList = (row) => {
    return(
        <tr key = {row.id} className = 'tableRow'>
            <td>{row.id}</td>
            <td>{row.title}</td>
            <td className = 'buttonCell'>
                <button  title = 'Add project' className = 'button' onClick = {id => this.handleAddClick(row)} ><i class="fas fa-plus-circle"></i></button>
            </td>
        </tr>
    )
}

render(){
    const { availableProjects } = this.props
  return (
    <div className = 'availableProjects'>
      <Header />
      <h1>Available projects</h1>
      <div className = 'tableContainer'>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Project name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { availableProjects && availableProjects.map(row => this.renderList(row))}
                </tbody>
            </table>
        </div>
    </div>
  )
}
}


const mapStateToProps = ({ data }) => {
    return{
        availableProjects: data.availableProjects
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators ({
        getAvailableProjects,
        addProject
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AvailableProjects)