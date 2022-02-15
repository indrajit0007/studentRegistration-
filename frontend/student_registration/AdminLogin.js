import React, { useContext, useState }  from "react";
import StudentDetail from "./StudedentDetail";
import "../App.css"
//import { stuDetails1 } from "./StudedentDetail";

const AdminLogin=()=>
{
    //let user=useContext(stuDetails1);

    const [adminU,setAdminU] =useState();
    const [adminP,setAdminP] =useState();
    const adminUsername="india_starto";
    const adminPassword="starto@123";
    
    const authentication=(event)=>
    {
        event.preventDefault();
let inputob1=[event.target.username.value];
let inputob2=[event.target.password.value];
setAdminU(inputob1);
setAdminP(inputob2);


if(adminU == adminUsername && adminP == adminPassword)
{
    //console.log(user);
    alert("Login Success");
    
}
    else
    alert(" Please check admin username or password !!");



    }
    //const stu=useContext(stuDetails1);
    

    return (
        <div>
            
<h2 className="bg3"> 
<h2>Welcome to Admin Login</h2>
    <form onSubmit={authentication}>
   Admin Username: <input type="text" id="username"></input><br/><br/>
   Admin Password: <input type="password" id="password"></input><br/><br/>
    <button>Login</button>
    </form>

    
</h2>
        </div>
    )
}
export default AdminLogin;