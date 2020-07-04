import React, { Component } from "react";

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.logInNow = this.logInNow.bind(this);
  }

  logInNow() {
    const { email, password } = this.state;
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (email === userInfo.email && password === userInfo.password) {
      sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
      this.props.changeUserState();
    } else {
      console.log("enter correct details");
    }
    // console.log(JSON.parse(sessionStorage.getItem("userInfo")));
  }
  render() {
    return (
      <div>
        <h1 className="text-center" style={{"padding-top":"10%"}} >Ingresar</h1>
        <div className="row container text-center" style={{"margin-left":"20%"}}>
          <div className="col-md-4">
            {/* <label htmlFor="email" className="">
              Correo:
            </label> */}
            <input
              type="email"
              onChange={e =>
                this.setState({
                  email: e.target.value
                })
              }
              className="form-control"
              autoComplete="true"
              autoFocus={true}
              placeholder="Correo"
            />
          </div>
          <div className="col-md-4">
            {/* <label htmlFor="password" className="">
              Password:
            </label> */}
            <input
              type="password"
              onChange={e =>
                this.setState({
                  password: e.target.value
                })
              }
              className="form-control"
              placeholder="Contraseña"
            />
          </div>
          <div className="row">
            <div className="col-md-4">
              <button  className="btn btn-success" onClick={this.logInNow}>
              <i className="fa fa-sign-in" /> Ingresar 
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;
