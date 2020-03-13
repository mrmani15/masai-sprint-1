import React, { Component } from 'react';
import { connect } from 'react-redux';

class Output extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    }
  }

  goBack = () => {
    this.props.history.push("")
  }

  
  render() {
    const data = this.props.data.data[0];
    const id = this.props.match.params.id;
    const val = data.filter((ele) => ele.id == id );
    const value = val[0]
    console.log(value.appearance.height[0])
    return (
      <div className="container">
        <div className="row">
          <button className="btn btn-primary m-3" onClick={this.goBack}>Back</button>
        </div>
        <div className="row">
          <div className="col">
            <img src={value.image.url} alt={value.name}/>
          </div>
          <div className="col">
          <div className="accordion" id="accordionExample">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h2 className="mb-0">
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Powerstats
                    </button>
                  </h2>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div className="card-body">
                    <p>Intelligence : {value.powerstats.intelligence} </p>
                    <p>Strength : {value.powerstats.strength} </p>
                    <p>Speed : {value.powerstats.speed} </p>
                    <p>Durability : {value.powerstats.durability} </p>
                    <p>Power : {value.powerstats.power} </p>
                    <p>Combat : {value.powerstats.combat} </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h2 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Biography
                    </button>
                  </h2>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                  <div className="card-body">
                  <p>Name : {value.biography["full-name"]} </p>
                  <p>Place of Birth : {value.biography["place-of-birth"]} </p>
                  <p>First Appearance : {value.biography["first-appearance"]} </p>
                  <p>Publisher : {value.biography.publisher} </p>
                  <p>Alignment : {value.biography.alignment} </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h2 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                     Appearance
                    </button>
                  </h2>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                  <div className="card-body">
                  <p>Gender : {value.appearance.gender} </p>
                  <p>Race : {value.appearance.race} </p>
                  <p>Height : {value.appearance.height[0]} </p>
                  <p>Weight : {value.appearance.weight[0]} </p>
                  <p>Eye Color : {value.appearance["eye-color"]} </p>
                  <p>Hair Color : {value.appearance["hair-color"]} </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingFour">
                  <h2 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                     Work
                    </button>
                  </h2>
                </div>
                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                  <div className="card-body">
                  <p>Occupation : {value.work.occupation} </p>
                  <p>Base : {value.work.base} </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingFive">
                  <h2 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                     Connections
                    </button>
                  </h2>
                </div>
                <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                  <div className="card-body">
                  <p>Group Affliation : {value.connections["group-affiliation"]} </p>
                  <p>Relative : {value.connections.relatives} </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data:state
})


export default connect(mapStateToProps, null) (Output)
