import React, { Component } from "react";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.signUpNow = this.signUpNow.bind(this);
  }

  signUpNow() {
    let { toggleToSignIn } = this.props;
    const { username, email, password } = this.state;
    if (!email.match(/\S+@\S+\.\S+/)) {
      alert("Igresa un correo correcto");
    } else if (!password.match(/(?=.*\d)(?=.*[a-z]).{8,}/)) {
      alert(
        "La contraseña debe contener 8 caracteres entre letras y numeros"
      );
    } else {
      let signUpObj = { username, email, password };
      localStorage.setItem("userInfo", JSON.stringify(signUpObj));
      toggleToSignIn(false);
      console.log(signUpObj, "****");
    }
  }

  render() {
    // const {  } = this.props;
    return (
      <div>
        <h1 className="text-center " style={{"padding-top":"10%"}}>Registrate</h1>
        <br />
        <div  className="row text-center" style={{"margin-left":"20%"}}>
          <div className="col-md-3">
            {/* <label htmlFor="name">Usuario:</label> */}
            <input
              type="text"
              onChange={e => {
                this.setState({ username: e.target.value });
              }}
              autoFocus={true}
              className="form-control"
              placeholder="Usuario"
            />
          </div>
          <div className="col-md-3">
            {/* <label htmlFor="number">Correo:</label> */}
            <input
              type="email"
              onChange={e => {
                this.setState({ email: e.target.value });
              }}
              className="form-control"
              placeholder="Correo"
            />
          </div>
          <div className="col-md-3">
            {/* <label htmlFor="number">Contraseña:</label> */}
            <input
              type="password"
              onChange={e => {
                this.setState({ password: e.target.value });
              }}
              maxLength="8"
              className="form-control"
              placeholder="Contraseña"
            />
          </div>
          <div className="row">
            <div className="col-md-3" >
              <button style={{margin:"15%"}} className="btn btn-primary" onClick={this.signUpNow}>
              <i className="fa fa-database" /> Crear 
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
