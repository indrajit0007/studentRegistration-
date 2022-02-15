import React, { useState, createContext } from "react";
import "../App.css"
import AdminLogin from "./AdminLogin";
import StudentLogin from "./StudentLogin";
//import { useState } from "react";
import {useHistory } from "react-router-dom";

const StudentDetail = () => {
const history=useHistory();
  const [stuDetails, setDetails] = useState([{}]);
  const addStudent = async (event) => {
    event.preventDefault();

    let details = {
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      gender: event.target.gender.value,
      email: event.target.email.value,
      
      password: event.target.password.value,
      confirmpassword: event.target.confirmpassword.value,
      phonenumber: event.target.phonenumber.value,
      age:event.target.age.value
      
    };
    console.log("hiiii")
    let inputob = [...stuDetails, details]
    setDetails(inputob);
    console.log(stuDetails);
    const {firstname,lastname,gender,email,password,confirmpassword,phonenumber,age}=stuDetails;
  const res=await fetch("/register",{
    method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
   
    firstname,lastname,gender,email,password,confirmpassword,phonenumber,age,
  })
});
const data=await res.json();
if(!data){
  window.alert("invalid registration");
  console.log("invalid registration");
  
}
else {
  window.alert("registration successfull");
  console.log("registration successfull");
  history.push("/login")
}
  
  }
  return (
    <div>
      
      <form id="registr-from" method="POST" onSubmit={addStudent} >
        <h2 className="links">
          <h2><u>Welcome to Student Registration Page </u></h2>
          First Name:<input type="text" id="firstname"></input><br /><br />
          Last Name:<input type="text" id="lastname"></input><br /><br />
          Gender:   <input type="radio" name="gender" value="male"></input>Male
          <input type="radio" name="gender" value="female"></input>Female <br /><br />
          Email Id:<input type="email" id="email"></input><br /><br />
          
          Password:<input type="text" id="password"></input><br /><br />
          Confirm  Password:<input type="password" id="confirmpassword"></input><br /><br />
          Phone Number: <input type="number" id="phonenumber"></input><br /><br />
          Age:<input type="text" id="age"></input><br /><br />

          <button>Submit</button>





        </h2>

      </form>

    </div>
  )
}
export default StudentDetail;
