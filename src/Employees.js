import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { logoutAction } from './actions/login';
import { connect } from 'react-redux';

class Employees extends Component {
  render() {    
    const {isLoggedIn} = this.props.login;
    const { employeeList } = this.props.employees;
    if (!isLoggedIn) {
      return (
        <Redirect
          to={{
            pathname: "/"            
          }}
        />
      )
    }   
    return (
      <div className="completeFace">
        <ul>
          {
            employeeList.map((emp, i) => (
              <ul>
              <li key={emp.id}>{emp.id}</li> 
              <li key={emp.id}>{emp.name}</li> 
              <li key={emp.id}>{emp.age}</li> 
              <li key={emp.id}>{emp.gender}</li> 
              <li key={emp.id}>{emp.email}</li> 
              <li key={emp.id}>{emp.phoneNo}</li>   
              <br/>
              </ul>
            ))
          }
        </ul>
        <div className="buttondiv">
          <button className="logout"
          onClick={logoutAction}>Logout</button>
        </div>              
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  login: store.loginReducer,
  employees: store.employeeReducer,
});

export default withRouter(connect(mapStateToProps)(Employees));
