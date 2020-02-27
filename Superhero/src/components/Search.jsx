import React, { Component } from 'react'
import Background from './background'
import {connect} from "react-redux"
import { getNameFromUser } from '../Redux/Action'

class Search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleClick = () => {
        console.log(this.state.name)
        this.props.sendName(this.state)
    }
    render() {
        return (
            <div>
                <Background handleChange= {this.handleChange} handleClick={this.handleClick}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    sendName : (name) => dispatch(getNameFromUser(name))
})


export default connect(null, mapDispatchToProps) (Search)
