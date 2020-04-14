import React, { Component } from 'react'

export class Fantasy extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:"",
       fantasy:""
    }
  }

  handleChange = (e) => {

    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    console.log(this.state)
  }
  
  render() {
    return (
      <form className="bg-secondary container p-2">
        <input type="text" className="form-control pt-2" value = {this.state.name} name="name" placeholder="Enter Your Name" onChange={this.handleChange} />
        <textarea name="fantasy" cols="30" rows="5" className="form-control mt-2" name="fantasy" placeholder="Enter Your Fantasy" onChange={this.handleChange} />
        <button className="btn mt-2 btn-primary" onClick={this.handleClick}>Share</button>
      </form>
    )
  }
}

export default Fantasy
