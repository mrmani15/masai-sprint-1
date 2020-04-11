import React from "react";
import { IoIosColorFill } from "react-icons/io";
import { BlockPicker } from "react-color";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inp: false
    };
  }
  inputColor = color => {
    this.setState({
      inp: !this.state.inp
    });
  };
  colorChangeInput = color => {
    let back = document.getElementById("inp");
    back.style.backgroundColor = color.hex;
    this.setState({
      inp: !this.state.inp
    });
  };
  render() {
    return (
      <div className="mainDiv" id="inp">
        <IoIosColorFill className="left-corner" onClick={this.inputColor} />
        {this.state.inp ? (
          <div className="popoverout">
            <div onClick={this.handleClose} />
            <BlockPicker onChangeComplete={this.colorChangeInput} />
          </div>
        ) : null}
        <div className="numberInput">
          <div className="row horizon">
            <div className="number" onClick={this.props.click}>
              <h1 className="centerNum">7</h1>
            </div>
            <div className="number" onClick={this.props.click}>
              <h1 className="centerNum">8</h1>
            </div>
            <div className="number" onClick={this.props.click}>
              <h1 className="centerNum">9</h1>
            </div>
          </div>
          <div className="row horizon">
            <div className="number" onClick={this.props.click}>
              <h1 className="centerNum">4</h1>
            </div>
            <div className="number" onClick={this.props.click}>
              <h1 className="centerNum">5</h1>
            </div>
            <div className="number" onClick={this.props.click}>
              <h1 className="centerNum">6</h1>
            </div>
          </div>
          <div className="row horizon">
            <div className="number" onClick={this.props.click}>
              <h1 className="centerNum">1</h1>
            </div>
            <div className="number" onClick={this.props.click}>
              <h1 className="centerNum">2</h1>
            </div>
            <div className="number" onClick={this.props.click}>
              <h1 className="centerNum">3</h1>
            </div>
          </div>
        </div>
        <div className="vertical">
          <div className="operatorDiv" onClick={this.props.click}>
            <h1 className="center">/</h1>
          </div>
          <div className="operatorDiv" onClick={this.props.click}>
            <h1 className="center">*</h1>
          </div>
          <div className="operatorDiv" onClick={this.props.click}>
            <h1 className="center">-</h1>
          </div>
          <div className="operatorDiv" onClick={this.props.click}>
            <h1 className="center">+</h1>
          </div>
          <div className="operatorDiv" onClick={this.props.result}>
            <h1 className="center">=</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Input;
