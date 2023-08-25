import { useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
 import AddExerciseForm from "./AddExerciseForm"; 
import ModifyExerciseForm from "./ModifyExerciseForm"; 
import viewExercise from "./viewExercise";
import AddTrainer from "./AddTrainer";
import AssignWorkout from "./AssignWorkout";

export default function TrainerComp() {

    // In this code, I've added a state variable exerciseOptionsVisible to track whether the exercise options 
    // should be displayed or not. The toggleExerciseOptions function is called when the "Exercise" link is clicked, 
    // which toggles the visibility of the exercise options. The options are displayed based on the value of 
    // exerciseOptionsVisible.

  const [exerciseOptionsVisible, setExerciseOptionsVisible] = useState(false);

  const toggleExerciseOptions = () => {
    setExerciseOptionsVisible(!exerciseOptionsVisible);
  };

  const[user,setUser] =useState(null);


    useEffect( ()=> {
       const loginid= JSON.parse(localStorage.getItem("loggedUser")).id;
       console.log(loginid);

        fetch("http://localhost:8080/getTrainer?loginid="+loginid)
        .then(resp => resp.json())
        .then(obj => {
            localStorage.setItem("loggedUser",JSON.stringify(obj))
            console.log(obj);
            setUser(obj);
        })
        },[])

 
  
  

  return (
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
                Exercise
              </span>
            </div>
            {exerciseOptionsVisible && (
              <div className="exercise-options">
                <NavLink to="/add" className="nav-link" style={{ color: 'white' }}>Add Exercise</NavLink>
                <NavLink to="/modify" className="nav-link" style={{ color: 'white' }}>Modify Exercise</NavLink>
                <NavLink to="/view" className="nav-link" style={{ color: 'white' }}>View Exercise</NavLink>
              </div>
            )}
            { <Routes>
              <Route path="add" element={<AddExerciseForm />} />
              <Route path="modify" element={<ModifyExerciseForm />} />
              
            </Routes> }
          </li>
          <li className="nav-item exercise-dropdown">
          <div onClick={toggleExerciseOptions}>
              <span className="nav-link px-3" style={{ fontSize: '18px', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
                Workouts
              </span>
            </div>
            {exerciseOptionsVisible && (
              <div className="exercise-options">
                <NavLink to="/addW" className="nav-link" style={{ color: 'white' }}>Add Workout</NavLink>
                <NavLink to="/modifyW" className="nav-link" style={{ color: 'white' }}>Modify Workout</NavLink>
                <NavLink to="/viewW" className="nav-link" style={{ color: 'white' }}>View Workout</NavLink>
                <NavLink to="/assignW" className="nav-link" style={{ color: 'white' }}>Assign Workout</NavLink>
              </div>
            )}
            {  }
          </li>
          <li className="nav-item exercise-dropdown">
          <div onClick={toggleExerciseOptions}>
              <span className="nav-link px-3" style={{ fontSize: '18px', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
                Member
              </span>
            </div>
            {exerciseOptionsVisible && (
              <div className="exercise-options">
                <NavLink to="/addT" className="nav-link" style={{ color: 'white' }}> Add Trainer</NavLink>
                <NavLink to="/assignT" className="nav-link" style={{ color: 'white' }}>Assign Workout</NavLink>
              </div>
            )}
            { <Routes>
              <Route path="/addT" element={<AddTrainer></AddTrainer>} />
              <Route path="/assignT" element={<AssignWorkout> </AssignWorkout>} />
              
            </Routes> }
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
