import React from "react";

import "../App.css"

const StudentLogin=()=>
{

    return (
        <div>
          
<h2 className="bg1"> 
<h2><u>Welcome to Student Login Page </u></h2>
    <form>
    Username: <input type="text" id="username"></input><br/><br/>
    Password: <input type="password" id="password"></input><br/><br/>
    <button>Login</button>
    </form>
</h2>
        </div>
    )
}
export default StudentLogin;