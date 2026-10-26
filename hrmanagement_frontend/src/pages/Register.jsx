import { useState } from "react"
import { usestate } from "react"
function Register()
{
    let[name,setName]=useState("")
    let[emailid,setEmailid]=useState("")
    let[password,setPassword]=useState("")
    let[role,setrole]=useState("")

    let handleRegister=async (event)=>{
        event.preventDefault()
        let res=await fetch("http://localhost:3000/api/emp/register",
            {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({name,emailid,password,role})
                
            })
            let data=await res.json()
            if(res){
                console.log("data inserted success");
                console.log(data)

            }else{
                console.log("data insertion failed")
                console.log(data)
            }
    }
    return(
        <div>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
               <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter name"/>
                <br/>

                <input type="email"
                 onChange={(event)=>setEmailid(event.target.value)}
                value={emailid}
                placeholder="Enter Email"></input><br/>

                <input
                 type="password"
                 value={password}
                 onChange={(event) => setPassword(event.target.value)}
                 placeholder="Enter your password"
                required/>
                <br/>

                <select
                  onChange={(event)=>setrole(event.target.value)}
                value={role}
                >
                    <option value="">Choose your role</option>
                    <option value="HR">HR</option>
                    <option value="EMPLOYEE">EMPLOYEE</option>

                </select><br/>
                <button type="Submit">Register</button>
            </form>

        </div>
    )
}
export default Register