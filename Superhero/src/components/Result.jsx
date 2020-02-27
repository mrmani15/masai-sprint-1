import React, { Component } from 'react'
import { connect } from 'react-redux'

class Result extends Component {
    constructor(props) {
        super(props)
    
        this.state = {

        }
    }
    render() {
        console.log(this.props.name.name.data)
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    name:state
})



export default connect (mapStateToProps,null)(Result)