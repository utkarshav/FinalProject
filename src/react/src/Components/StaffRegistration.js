import { useReducer, useState } from "react";
import { Link, Route, Routes, useNavigate, NavLink } from "react-router-dom"
import Home from "./Home";

export default function StaffRegisterComp()
{
    const init ={

        fname:"",
        lname:"",
        uid:"",
        pwd:"",
        email:"",
        contact:"",
        address:"",
        experience:""

    }

    const reducer = (state , action)=>{
         switch(action.type)
         {
             case 'update':
                return {...state , [action.fld]:action.val}
            
             case 'reset':
                return init;
         }
    }

    const [info,dispatch]=useReducer(reducer,init)
    const [msg,setMsg] = useState(" ");
    const navigate = useNavigate();

    const sendData = (e) => {
        e.preventDefault();
        console.log(info);
        const reqOptions ={
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(info)
        }
        fetch("http://localhost:8080/regTrainer",reqOptions)
        .then(resp =>resp.text())
        .then(text => text.length ? JSON.parse(text) : {})
        .then(obj => {
                   if(Object.keys(obj).length === 0)
                   {
                        setMsg("fill all the fields!");
                   }
                   else
                   {
                      if(obj.status === false)
                      {
                          alert("Request has not been approved");
                      }
                      else
                      {
                        navigate("Login");
                      }
                   }
        })
    }


     return(
        <div>
            <nav className="navbar navbar-expand-sm bg-primary  mb-3">
              <div className="container-fluid">
               <ul className="navbar-nav">
               
              <li>
              <Link to="/displayallmembers" className="nav-link px-3" style={{ fontSize: '18px', color: 'white', fontWeight: 'bold' }}>
               Display All Members
            </Link> 
              </li>
              <li>
              <Link to="/pendingapproval" className="nav-link px-3" style={{ fontSize: '18px', color: 'white', fontWeight: 'bold' }}>
               Approve Members
            </Link> 
              </li>
              <li>
              <Link to="/registertrainer" className="nav-link px-3" style={{ fontSize: '18px', color: 'white', fontWeight: 'bold' }}>
               Trainer Registration
            </Link> 
              </li>
               </ul>
               <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink to="/logout" className="nav-link px-3" style={{ fontSize: '18px', color: 'black', fontWeight: 'bold' }}>
              Logout
              </NavLink>
            </li>
          </ul>
              </div>
            </nav>
            <br/>
            <br/>
            <div class="register-box1">
                <h2 style={{ fontSize: '18px', color: 'blue' ,fontWeight: 'bold'}}>Trainer Registration</h2>
                <form>
                    <div class="input-group">
                    <label htmlFor= "uid" className="form-label">First name :</label>
                    <input type="text" className="form-control" id="fname" name="fname" value={info.fname} 
                        onChange={(e)=>{dispatch({type:'update',fld:'fname',val:e.target.value})}}></input>
                    </div>
                    <div class="input-group">
                    <label htmlFor= "uid" className="form-label">Last name :</label>
                    <input type="text" className="form-control" id="lname" name="lname" value={info.lname} 
                        onChange={(e)=>{dispatch({type:'update',fld:'lname',val:e.target.value})}}></input>
                    </div>
                    <div class="input-group">
                    <label htmlFor= "uid" className="form-label">User ID :</label>
                    <input type="text" className="form-control" id="uid" name="uid" value={info.uid} 
                        onChange={(e)=>{dispatch({type:'update',fld:'uid',val:e.target.value})}}></input>
                    </div>
                    <div class="input-group">
                    <label htmlFor= "pwd" className="form-label">Password : </label>
                    <input type="password" className="form-control" id="pwd" name="pwd" value={info.pwd} 
                       onChange={(e)=>{dispatch({type:'update',fld:'pwd',val:e.target.value})}}></input>
                    </div>
                   
                    <div class="input-group">
                    <label htmlFor= "email" className="form-label">Email ID   : </label>
                    <input type="text" className="form-control" id="email" name="email"  value={info.emailid} 
                        onChange={(e)=>{dispatch({type:'update',fld:'email',val:e.target.value})}}></input>
                    </div>
                    
                    
                    <div class="input-group">
                    <label htmlFor= "contact" className="form-label">Contact no : </label>
                    <input type="text" className="form-control" id="contact" name="contact" value={info.contactno} 
                       onChange={(e)=>{dispatch({type:'update',fld:'contact',val:e.target.value})}}></input>
                    </div>
                    <div class="input-group">
                    <label htmlFor= "address" className="form-label">Address : </label>
                    <input type="text" className="form-control" id="address" name="address" value={info.address} 
                       onChange={(e)=>{dispatch({type:'update',fld:'address',val:e.target.value})}}></input>
                    </div>

                    <div class="input-group">
                    <label htmlFor= "experience" className="form-label">Experience : </label>
                    <input type="text" className="form-control" id="experience" name="experience" value={info.experience} 
                       onChange={(e)=>{dispatch({type:'update',fld:'experience',val:e.target.value})}}></input>
                    </div>
                    

                    <div className="button-group">
                    <button type="submit" className="btn btn-primary px-3" onClick={(e)=>{sendData(e)}}>Register</button>
                    <button type="reset" className="btn btn-primary px-3"onClick={(e)=>{dispatch({type:'reset'})}}>Reset</button>
                    </div>
                </form>
                {/* <p>{JSON.stringify(info)}</p> */}
                <p>{msg}</p>
                </div>
              

        </div>
    )
}