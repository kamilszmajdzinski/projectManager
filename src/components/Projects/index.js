import React, { Component } from 'react'
import Header from '../Header'
import './style.css'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProjects, deleteProject } from '../../actions/data-actions'
import Modal from "react-responsive-modal";


class Projects extends Component {

    state = {
        deleteConfirmation: false,
        deleteProjectId: null,
       
    }

    componentDidMount = () => {
      this.props.getProjects()
      
      
    }
    
    closeModal = () => {
        this.setState({ deleteConfirmation: false })
    }

    handleEditClick(id) {
        console.log(id);

    }

    confirmDelete = () => {
        this.setState({ deleteConfirmation: false })
        this.props.deleteProject(this.state.deleteProjectId)
    }

    handleRemoveClick(id) {
        this.setState({ deleteConfirmation: true, deleteProjectId: id })
    }
    
    renderList = (row) => {
        return(
            <tr key = {row.id} className = 'tableRow'>
                <td>{row.id}</td>
                <td>{row.title}</td>
                <td className = 'buttonCell'>
                    <button  title = 'Edit project' className = 'button' onClick = {id => this.handleEditClick(row.id)} ><i class="far fa-edit"></i></button>
                    <button title = 'Remove project' className = 'button' onClick = {id => this.handleRemoveClick(row.id)}><i class="fas fa-trash"></i></button>
                </td>
            </tr>
        )
    }

  render() {
  

   const { activeProjects } = this.props
    return (
      <div className = 'projects'>
          <Header />
        <h1>Active projects</h1>
        <div className = 'tableContainer'>
        {this.state.deleteConfirmation ?
        (
            <Modal
                open={this.state.deleteConfirmation}
                onClose={this.closeModal}
                little
            >
                <div className = 'modalDiv'>
                    <p>Do you want to delete project?</p>
                    <button onClick = {this.confirmDelete}>Yes</button>
                    <button onClick = {this.closeModal}>Cancel</button>
                </div>
            </Modal>
        ):(
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Project name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {activeProjects && activeProjects.map(row => this.renderList(row))}
                </tbody>
            </table>
        )
        } 
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
        getProjects,
        deleteProject
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)