import React from "react";
import Input from "./Input";
import { BlockPicker } from "react-color";
import { IoIosColorFill } from "react-icons/io";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "",
      num2: "",
      operator: "",
      operFlag: false,
      eval: false,
      result: 0,
      back: false,
      out: false,
      inp: false
    };
  }

  click = e => {
    // if first num is not giver and opertor pressed then alert
    if (
      !this.state.num1 &&
      (e.target.innerText === "+" ||
        e.target.innerText === "-" ||
        e.target.innerText === "*" ||
        e.target.innerText === "/")
    ) {
      alert("enter a number");
      this.clear();
    } else if (
      this.state.num1.length &&
      this.state.operator.length &&
      this.state.num2.length &&
      (e.target.innerText === "+" ||
        e.target.innerText === "-" ||
        e.target.innerText === "*" ||
        e.target.innerText === "/")
    ) {
      alert("Invalid Operator");
      this.clear();
    }
    //if operatr flag is false , and input in not operator then num1 is assigned
    else if (
      this.state.operFlag === false &&
      (e.target.innerText !== "+" ||
        e.target.innerText !== "-" ||
        e.target.innerText !== "*" ||
        e.target.innerText !== "/")
    ) {
      this.setState({
        num1: this.state.num1 + e.target.innerText
      });
    }

    // if num1 in present and input is
    if (
      this.state.num1 &&
      (e.target.innerText === "+" ||
        e.target.innerText === "-" ||
        e.target.innerText === "*" ||
        e.target.innerText === "/")
    ) {
      this.setState({
        operFlag: true,
        operator: e.target.innerText
      });
    } else if (
      this.state.operFlag &&
      (e.target.innerText !== "+" ||
        e.target.innerText !== "-" ||
        e.target.innerText !== "*" ||
        e.target.innerText !== "/")
    ) {
      this.setState({
        num2: this.state.num2 + e.target.innerText
      });
    }
  };

  result = () => {
    if (!this.state.num2 || !this.state.num1) {
      alert("enter a number");
      this.clear();
    } else {
      //calculation
      let first = this.state.num1;
      first = first.split("");
      first.pop();
      first = first.map(Number).join("");
      let sec = this.state.num2;
      sec = sec
        .split("")
        .map(Number)
        .join("");
      if (this.state.operFlag) {
        if (this.state.operator === "+") {
          let val = Number(first) + Number(sec);
          this.setState({
            result: val,
            eval: true
          });
        } else if (this.state.operator === "-") {
          let val = first - sec;

          this.setState({
            result: val,
            eval: true
          });
        } else if (this.state.operator === "*") {
          let val = first * sec;

          this.setState({
            result: val,
            eval: true
          });
        } else if (this.state.operator === "/") {
          let val = first / sec;

          this.setState({
            result: val,
            eval: true
          });
        }
      }
    }
  };
  clear = () => {
    this.setState({
      num1: "",
      num2: "",
      operator: "",
      operFlag: false,
      eval: false,
      result: 0
    });
  };
  color = (e, color) => {
    this.setState({
      out: !this.state.out
    });
  };
  colorClick = e => {
    e.preventDefault();
    this.setState({
      back: !this.state.back
    });
  };
  colorChange = color => {
    let back = document.getElementById("back");
    back.style.backgroundColor = color.hex;
    this.setState({
      back: !this.state.back
    });
  };
  colorChangeOut = color => {
    let back = document.getElementById("out");
    back.style.backgroundColor = color.hex;
    this.setState({
      out: !this.state.out
    });
  };
  render() {
    if (!this.state.eval) {
      return (
        <div id="back">
          <div className="Output topdown">
            <button className="btn left" onClick={this.colorClick}>
              Color
            </button>
            {this.state.back ? (
              <div className="popover">
                <div onClick={this.handleClose} />
                <BlockPicker onChangeComplete={this.colorChange} />
              </div>
            ) : null}
            <button className="btn" onClick={this.clear}>
              Clear
            </button>
          </div>
          <div className="Output" id="out">
            <IoIosColorFill
              className="left-corner"
              onClick={this.color}
              size="15px"
            />
            {this.state.out ? (
              <div className="popoverout">
                <div onClick={this.handleClose} />
                <BlockPicker onChangeComplete={this.colorChangeOut} />
              </div>
            ) : null}
            <h1>
              {this.state.num1}
              {this.state.num2}
            </h1>
          </div>
          <Input click={this.click} result={this.result} color={this.color} />
        </div>
      );
    } else {
      return (
        <div id="back">
          <div className="Output topdown">
            <button className="btn left" onClick={this.colorClick}>
              Color
            </button>
            {this.state.back ? (
              <div className="popover">
                <div onClick={this.handleClose} />
                <BlockPicker onChangeComplete={this.colorChange} />
              </div>
            ) : null}
            <button className="btn" onClick={this.clear}>
              Clear
            </button>
          </div>
          <div className="Output">
            <h1>{this.state.result}</h1>
          </div>
          <Input click={this.click} result={this.result} />
        </div>
      );
    }
  }
}

export default Home;
