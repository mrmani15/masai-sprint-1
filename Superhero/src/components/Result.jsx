import React, { Component } from 'react'
import { connect } from 'react-redux'

class Result extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        
        const data = this.props.data.data.data
        console.log(data)
        return(
            data != undefined ? (
                <div className="container">
                    <div className="row">
                        {data.map(ele => {
                            return(
                                <div className="col-4 mt-5 mb-5">
                                    <div className="card" style={{width: "16rem"}}>
                                        <img src={ele.image.url} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">{ele.name}</h5>
                                            <p className="card-text">Click Here For More Detail</p>
                                            <button className="btn btn-primary">More Detail</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                
                    
                    
            ):("")
        )
    }
}




const mapStateToProps = (state) => ({
    data:state
})



export default connect (mapStateToProps,null)(Result)
                                    









