import React, { Component } from "react";
import "../sass/form.scss";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      adress: "",
      money: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  test = () => {
    console.log("form \|/ ")
    console.log(this.props);

    this.props.history.push({
      pathname: "/flightpickup",
      state: {
        name:this.state.name,
        adress:this.state.adress,
        money:this.state.money,
      }
    });
  };
  componentDidMount(){
    console.log(this.props)
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <div className="w-section_f">
        <div className="main_f">
          <div className="title_f">P.H.O.B.o.S</div>
          <div className="content_f">
            painless hybrid obtainable backup plan on starship
          </div>
          <div className="loginform">
            <p className="undertitle">Name</p>
            <input
              className="name"
              name={"name"}
              placeholder={"Elo Mu k"}
              value={this.state.name}
              onChange={this.handleInputChange}
            />
            <p className="undertitle">Adress</p>
            <input
              className="name"
              name="adress"
              placeholder={"Slovensko, Košice"}
              value={this.state.adress}
              onChange={this.handleInputChange}
            />
            <p className="undertitle">Money left on your bank account</p>
            <input
              className="name"
              name="money"
              placeholder={"100 000 USD"}
              value={this.state.money}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="btn_con_f">
            {/* <button className="continue" onClick={this.test}>start exploring</button> */}
            <button onClick={this.test} className="continue_f">proceed</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
