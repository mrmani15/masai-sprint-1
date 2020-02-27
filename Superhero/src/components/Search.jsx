import React, { Component } from 'react'
import Background from './background'

export default class Search extends Component {
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
    }
    render() {
        return (
            <div>
                <Background handleChange= {this.handleChange} handleClick={this.handleClick}/>
            </div>
        )
    }
}
