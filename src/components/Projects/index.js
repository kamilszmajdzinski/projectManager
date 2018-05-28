import React, { Component } from 'react'
import Header from '../Header'
import './style.css'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProjects } from '../../actions/data-actions'

class Projects extends Component {

    componentDidMount() {
        this.props.getProjects
    }

    handleEditClick(id) {
        console.log(id);
    }

    handleRemoveClick(id) {
        console.log(id);
    }
    
    renderList = (row) => {
        return(
            <tr key = {row.id} className = 'tableRow'>
                <td>{row.id}</td>
                <td>{row.description}</td>
                <td className = 'buttonCell'>
                    <button  title = 'Edit project' className = 'button' onClick = {id => this.handleEditClick(row.id)} ><i class="far fa-edit"></i></button>
                    <button title = 'Remove project' className = 'button' onClick = {id => this.handleRemoveClick(row.id)}><i class="fas fa-trash"></i></button>
                </td>
            </tr>
        )
    }

  render() {
    return (
      <div className = 'projects'>
          <Header />
        <h1>Active projects</h1>
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
                    {this.props.activeProjects.map(row => this.renderList(row))}
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ data }) => {
    return {
        activeProjects: data.activeProjects
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getProjects
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)