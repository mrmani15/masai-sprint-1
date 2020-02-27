import React, { Component } from 'react'
import { connect } from 'react-redux'

class Result extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    render() {
        console.log(this.props.name)
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    name:state.name
})



export default connect (mapStateToProps,{})(Result)