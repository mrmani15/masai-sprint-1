import React, { Component } from 'react'
import Background from './background'
import {connect} from "react-redux"
import { getDataFromUser } from '../Redux/Action'
import axios from "axios"

class Search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             data:{}
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleClick = () => {
        const inputname = this.state.name
        axios.get("/api/2506168482827839/search/" + inputname)
        .then(res => {
            this.setState({
                data:res.data.results
            },()=> {this.props.sendData(this.state.data)})
            
        })
        .catch(err => console.log(err.message))
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
    sendData : (data) => dispatch(getDataFromUser(data))
})


export default connect(null, mapDispatchToProps) (Search)
