import { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate,Route,Routes } from "react-router-dom"
import { login } from "./slice";
// import { useDispatch } from "react-redux";
// import { login } from "./slice";
export default function LoginComp()

{
    const init ={

        uid:"",
        pwd:""

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
    const reduxAction = useDispatch();

    const sendData = (e) => {
        e.preventDefault();
       // alert(JSON.stringify(info));
        const reqOptions ={
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(info)
        }
        fetch("http://localhost:8080/logincheck",reqOptions)
        .then(resp => resp.text())
        //.then(console.log(info))
        .then(text => text.length ? JSON.parse(text):{})
        .then(obj => {
             if(Object.keys(obj).length === 0)
             {
                 console.log(Object.keys(obj).length);
                 setMsg("Wrong Username?Password")
             }   
            else{
                reduxAction(login())
                console.log(JSON.stringify(obj))
                if(obj.status === false)
                {
                    alert("Request has not been approved");
                }
                else{
                    localStorage.setItem("loggedUser",JSON.stringify(obj));
                    //reduxAction(login())
                    console.log();
                    if(obj.usertype_id.id === 1)
                          {
                              // alert("in admin");
                               navigate("/admin_home");
                          }
                          else if(obj.usertype_id.id  === 2)
                          {
                               //alert("in trainer");
                               navigate("/trainer_home");

                          }
                          else if(obj.usertype_id.id === 3)
                          {
                               //alert("in dietitian");
                               navigate("/dietitian_home");

                          }
                          else if(obj.usertype_id.id === 4)
                          {
                               //alert("in member");
                               navigate("/member");

                          }
                          else if(obj.usertype_id.id === 5)
                          {
                               //alert("in member");
                               navigate("/tariner");

                          }

                }
            }
        })
        // fetch("http://localhost:8080/logincheck",reqOptions)
        // .then(resp =>{  if(resp.ok)
        //                 {
        //                     console.log(resp);
        //                     return resp.text();
        //                 }
        //                 else
        //                 {
        //                     console.log(resp.statusText);
        //                     throw new Error("server error");
        //                 }
        //                 })
        // .then(text => text.length ? JSON.parse(text) : {})
        // .then(obj => {  console.log(obj);
        //            if(Object.keys(obj).length === 0)
        //            {
        //                 setMsg("Wrong UID/PWD");
        //            }
        //            else
        //            {
        //                 //reduxAction(login())
        //               localStorage.setItem("loggedUser",JSON.stringify(obj));
        //              // reduxAction(login())
        //                 console.log(obj)
        //               if(obj.status === false)
        //               {
        //                   alert("Request has not been approved");
        //               }
        //               else
        //               {
        //                   console.log(JSON.stringify(obj))
        //                   if(obj.usertype_id.id === 1)
        //                   {
        //                        alert("in admin");
        //                        navigate("/admin_home");
        //                   }
        //                   else if(obj.usertype_id.id  === 2)
        //                   {
        //                        alert("in trainer");
        //                        navigate("/trainer_home");

        //                   }
        //                   else if(obj.usertype_id.id === 3)
        //                   {
        //                        alert("in dietitian");
        //                        navigate("/dietitian_home");

        //                   }
        //                   else if(obj.usertype_id.id === 4)
        //                   {
        //                        alert("in member");
        //                        navigate("/member");

        //                   }
        //               }
        //            }
        // })
        // .catch((error)=> alert("Server error. Try later"))
    }


     return(
        <div>
            <nav className="navbar navbar-expand-sm bg-primary  mb-3">
              <div className="container-fluid">
               <ul className="navbar-nav">
               <li className="nav-item">
                <Link to="/" className="nav-link px-3"style={{ fontSize: '18px', color: 'white' ,fontWeight: 'bold' , marginLeft: '100px'}}> About </Link>
              </li>
              <li className="nav-item">
                <Link to="Login" className="nav-link px-3" style={{ fontSize: '18px', color: 'white' ,fontWeight: 'bold'}} >Exercise</Link>
              </li>
              <li className="nav-item">
                <Link to="Member_register" className="nav-link px-3" style={{ fontSize: '18px', color: 'white' ,fontWeight: 'bold'}}>Food</Link>
              </li>
              <li className="nav-item">
                <Link to="Staff_register" className="nav-link px-3" style={{ fontSize: '18px', color: 'white' ,fontWeight: 'bold'}}>Health</Link>
              </li>
               </ul>
              </div>
            </nav>
            <br/>
            <br/>
            <div className="login-box">
                <h2 style={{ fontSize: '18px', color: 'blue' ,fontWeight: 'bold'}}>Login</h2>
                <form>
                    <div class="input-group">
                    <label htmlFor= "uid" className="form-label">Enter username :</label>
                    <input type="text" className="form-control" id="uid" name="uid" placeholder="Enter your username" value={info.uid} 
                        onChange={(e)=>{dispatch({type:'update',fld:'uid',val:e.target.value})}}></input>
                    </div>
                    <div class="input-group">
                    <label htmlFor= "pwd" className="form-label">Enter password : </label>
                    <input type="password" className="form-control" id="pwd" name="pwd" placeholder="Enter your password"  value={info.pwd} 
                       onChange={(e)=>{dispatch({type:'update',fld:'pwd',val:e.target.value})}}></input>
                    </div>
                    <div className="button-group">
                    <button type="submit" className="btn btn-primary px-3" onClick={(e)=>{sendData(e)}}>Login</button>
                    <button type="reset" className="btn btn-primary px-3"onClick={(e)=>{dispatch({type:'reset'})}}>Reset</button>
                    </div>
                </form>
                {/* <p>{JSON.stringify(info)}</p> */}
                <p>{msg}</p>
                </div>
               
        </div>
    )
}