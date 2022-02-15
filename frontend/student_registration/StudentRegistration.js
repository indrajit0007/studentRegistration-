import React, { useState } from "react";
import { BrowserRouter as Router, Link, Switch, Route, Path } from "react-router-dom";
import "../App.css";
import AdminLogin from "./AdminLogin";
import StudentDetail from "./StudedentDetail";
import StudentLogin from "./StudentLogin";

const StudentRegistration = () => {



  return (
    <div className="ui1">
      <Router>
        <h2 className="bg2"><span><Link to="/StudentDetail">Student Registration</Link></span>{"   "} {" "}      
         <span> <Link to="/StudentLogin">Student Login</Link></span>
         <span> <Link to="/AdminLogin">Admin Login</Link></span></h2>

        <Switch>
          <Route path="/StudentDetail">
            <StudentDetail />
          </Route>
          <Route path="/StudentLogin">
            <StudentLogin />
          </Route>
          <Route path="/AdminLogin">
            <AdminLogin />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
export default StudentRegistration;