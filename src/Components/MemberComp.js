import { useState } from "react";
import { useEffect } from "react";
import { NavLink, Navigate, Route, Routes,useNavigate  } from "react-router-dom";

export default function MemberComp() {

    
    const[user,setUser] =useState([]);
    const navigate = useNavigate();

  const [exerciseOptionsVisible, setExerciseOptionsVisible] = useState(false);

  const toggleExerciseOptions = () => {
    setExerciseOptionsVisible(!exerciseOptionsVisible);
  };

  useEffect( ()=> {
    const login_id= JSON.parse(localStorage.getItem("loggedUser")).id;
    console.log(login_id)
     fetch("http://localhost:8080/getMemberByLoginid?login_id="+login_id)
     .then(resp => resp.json())
     .then(obj => {
         localStorage.setItem("loggedUser",JSON.stringify(obj))
         console.log(obj)
         setUser(obj);
                      if(obj.status === 0)
                      {
                          navigate("/buymembership");
                      }
                      else
                      {
                            navigate("/memberhome");
                         
                      }
        })
     },[]);
  
}