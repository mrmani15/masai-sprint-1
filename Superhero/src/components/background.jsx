import React, { Component } from 'react'

export default class background extends Component {
    render() {
        return (
            <div className="my-img">
                <div className="overlay">
                    <div className="inputBox">
                        <input type="text" className="rounded-pill inputsize" value={this.props.name}
                                onChange={this.props.handleChange} name="name"/>
                        <button className="btn btn-warning rounded-pill ml-3" onClick={this.props.handleClick}>SEARCH</button>
                    </div>
                </div>
            </div>
        )
    }
}
