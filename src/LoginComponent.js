import React, { Component } from 'react';
import { Route , withRouter, Redirect } from 'react-router-dom';
import { loginUserAction } from './actions/login';
import { connect } from 'react-redux';

class LoginComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      email : "",
      password : "",      
    }
  }

  onChange = (event) =>{
    this.setState ({
      email : event.target.value,
    })
  }

  onChangepass = (event) =>{
    this.setState({
      password:event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    loginUserAction(email, password, this.props.history);    
  }

  render(){    
    const isLoggedIn = this.props.isLoggedIn;    
    if (isLoggedIn) {
      return (
        <Redirect
          to={{
            pathname: "/employees"            
          }}
        />
      );
    }

    return(
      
      <div className=" login ">
        <div className="logincontent">
          <h1>Welcome</h1>
          <p>Please Login To Continue</p>
          <form onSubmit={this.onSubmit}>
            <div class="form-control">
              <label class="login-form">Enter Your registered Email Address</label>
              <input class="input-form" type="text"  onChange = {this.onChange} placeholder="Email Address"   required />
            </div>
            <div>
            <label class="login-form">Enter Your Password</label>
            <input class="input-form"type="password" onChange ={this.onChangepass} placeholder="Password"  required />
            </div>
             {/* <Link to = "/Facedetect">  */}
            <button class="buttonclass" onClick = {this.onSubmit}value="Login">Login</button> 
            {/* </Link> */}
          </form>
          
        </div>
      </div>
      
    )
  }

}

const mapStateToProps = (store) => ({
  isLoggedIn: store.loginReducer.isLoggedIn,
})

export default withRouter(connect(mapStateToProps)(LoginComponent));
