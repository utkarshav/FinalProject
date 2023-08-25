import { useState } from "react";
import { useEffect } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
 import AddExerciseForm from "./AddExerciseForm"; 
import ModifyExerciseForm from "./ModifyExerciseForm"; 
import viewExercise from "./viewExercise";
import AddTrainer from "./AddTrainer";
import AssignWorkout from "./AssignWorkout";

export default function MemberHomeComp()
{

    const[user,setUser] =useState([]);
    const[plan,setPlan] =useState([]);
    const [exerciseOptionsVisible, setExerciseOptionsVisible] = useState(false);

  const toggleExerciseOptions = () => {
    setExerciseOptionsVisible(!exerciseOptionsVisible);
  };

    useEffect( ()=> {
        const obj= JSON.parse(localStorage.getItem("loggedUser"));
    
        localStorage.setItem("loggedUser",JSON.stringify(obj))
        console.log(obj)
        setUser(obj);

        fetch("http://localhost:8080/allmembership") // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setPlan(data);
      })
      .catch((error) => console.error("Error fetching members:", error));

            

         },[]);


    return(
      <div>
      <h3>
           Welcome - {user && user.fname} {user && user.lname}
         </h3>
 <nav className="navbar navbar-expand-sm bg-primary  mb-3">
   <div className="container-fluid">
     <ul className="navbar-nav">
       <li className="nav-item exercise-dropdown">
         <div onClick={toggleExerciseOptions}>
           <span className="nav-link px-3" style={{ fontSize: '18px', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
             Profile
           </span>
         </div>
         {exerciseOptionsVisible && (
           <div className="exercise-options">
             <NavLink to="/add" className="nav-link" style={{ color: 'white' }}>show profile</NavLink>
             <NavLink to="/modify" className="nav-link" style={{ color: 'white' }}>Update profile</NavLink>
             <NavLink to="/view" className="nav-link" style={{ color: 'white' }}>Change password</NavLink>
           </div>
         )}
         { <Routes>
           <Route path="add" element={<AddExerciseForm />} />
           <Route path="modify" element={<ModifyExerciseForm />} />
           
         </Routes> }
       </li>
       <li className="nav-item">
       
             <NavLink to="/addW" className="nav-link px-3" style={{ fontSize: '18px', color: 'white', fontWeight: 'bold', cursor: 'pointer' }} >Schedule</NavLink>
       </li>
       <li className="nav-item">
       
             <NavLink to="/addW" className="nav-link px-3" style={{ fontSize: '18px', color: 'white', fontWeight: 'bold', cursor: 'pointer' }} >Track</NavLink>
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
        
 </div>


    );
} 