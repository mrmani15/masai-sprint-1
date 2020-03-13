import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"

class Result extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        
        const data = this.props.data.data[0]
        console.log(this.props.data.data[0])
        return(
            data !== undefined ? (
                <div className="container">
                    <div className="row">
                        {data.map(ele => {
                            return(
                                <center key={ele.id}>
                                    <div className="col-4 m-5">
                                        <div className="card" style={{width: "25vw"}}>
                                            <img src={ele.image.url} className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title text-center">{ele.name}</h5>
                                                <center><Link to={`/${ele.id}`} className="btn btn-primary rounded-pill"> More Detail </Link></center>
                                            </div>
                                        </div>
                                    </div>
                                </center>

                            )
                        })}
                    </div>
                </div>
            )
            :(<center><h2>Enter superhero name and wait..</h2></center>)
        )
    }
}




const mapStateToProps = (state) => ({
    data:state
})



export default connect (mapStateToProps,null)(Result)
                                    









