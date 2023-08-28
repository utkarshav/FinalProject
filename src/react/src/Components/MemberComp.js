import { useState } from "react";
import { useEffect } from "react";
import { NavLink, Navigate, Route, Routes,useNavigate  } from "react-router-dom";
// import AddExerciseForm from "./AddExerciseForm"; // Import your AddExerciseForm component
//import ModifyExerciseForm from "./ModifyExerciseForm"; // Import your ModifyExerciseForm component
//import viewExercise from "./viewExercise";

export default function MemberComp() {

    // In this code, I've added a state variable exerciseOptionsVisible to track whether the exercise options 
    // should be displayed or not. The toggleExerciseOptions function is called when the "Exercise" link is clicked, 
    // which toggles the visibility of the exercise options. The options are displayed based on the value of 
    // exerciseOptionsVisible.
    
    const[user,setUser] =useState([]);
    const navigate = useNavigate();

  const [exerciseOptionsVisible, setExerciseOptionsVisible] = useState(false);

  const toggleExerciseOptions = () => {
    setExerciseOptionsVisible(!exerciseOptionsVisible);
  };

  useEffect( ()=> {
    const login_id= JSON.parse(localStorage.getItem("loggedUser")).id;

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