import React, { useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import AddExerciseForm from "./AddExerciseForm";
import ModifyExerciseForm from "./ModifyExerciseForm"; 

export default function ViewExercises() {
  
    const [exerciseOptionsVisible, setExerciseOptionsVisible] = useState(false);

    const toggleExerciseOptions = () => {
      setExerciseOptionsVisible(!exerciseOptionsVisible);
    };
  
  
  
  
    const [exercises, setExercises] = useState([]);


  useEffect(() => {
    // Fetch exercises from the server and set them to the state
    fetch("http://localhost:8080/getAllExercises") // Replace with your server's API endpoint for exercises
      .then((response) => response.json())
      .then((data) => setExercises(data))
      .catch((error) => console.error("Error fetching exercises:", error));
  }, []);

  return (
    <div>
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
                <NavLink to="/trainer_home/add" className="nav-link" style={{ color: 'white' }}>Add Exercise</NavLink>
                <NavLink to="/trainer_home/modify" className="nav-link" style={{ color: 'white' }}>Modify Exercise</NavLink>
               
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
                <NavLink to="/trainer_home/addW" className="nav-link" style={{ color: 'white' }}>Add Workout</NavLink>
                <NavLink to="/trainer_home/modifyW" className="nav-link" style={{ color: 'white' }}>Modify Workout</NavLink>
                <NavLink to="/trainer_home/viewW" className="nav-link" style={{ color: 'white' }}>View Workout</NavLink>
                <NavLink to="/trainer_home/assignW" className="nav-link" style={{ color: 'white' }}>Assign Workout</NavLink>
              </div>
            )}
            {  }
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
      <h2>View Exercises</h2>
      <table border={1} className="exercise-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Muscle Type</th>
            <th>Reps</th>
            <th>Calories Burnt</th>
            <th>Equipment</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise) => (
            <tr key={exercise.id}>
              <td>{exercise.id}</td>
              <td>{exercise.name}</td>
              <td>{exercise.muscle_type}</td>
              <td>{exercise.reps}</td>
              <td>{exercise.calories_burnt}</td>
              <td>{exercise.equipment}</td>
              <td>{exercise.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
