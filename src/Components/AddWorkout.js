import { useReducer, useState ,useEffect} from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom"
import ViewExercises from "./viewExercise";
import ModifyExerciseForm from "./ModifyExerciseForm";
import { NavLink } from "react-router-dom";
export default function AddWorkout()
{
    const [exercises, setExercises] = useState([]);


    useEffect(() => {
      fetch("http://localhost:8080/getAllExercises") // Replace with your server's API endpoint for exercises
        .then((response) => response.json())
        .then((data) => setExercises(data))
        .catch((error) => console.error("Error fetching exercises:", error));
    }, []);


    const [exerciseOptionsVisible, setExerciseOptionsVisible] = useState(false);

    const toggleExerciseOptions = () => {
      setExerciseOptionsVisible(!exerciseOptionsVisible);
    };
  

    const init ={

        goals_id:" ",
        exercise_id:" ",
        reps:" ",
      

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
        fetch("http://localhost:8080/SaveWorkout",reqOptions,{ method: 'POST', mode: 'cors',})
        .then(resp =>resp.text())
        .then(text => text.length ? JSON.parse(text) : {})
        .then(obj => {
                   if(Object.keys(obj).length === 0)
                   {
                        setMsg("fill all the fields!");
                   }
                   else
                   {
                    alert("Workout Added");
                      if(obj.status === false)
                      {
                          alert("Request has not been approved");
                      }
                      else
                      {
                          alert("0000");
                      }
                   }
        })
    }
    
    return (
        <div >
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
                <NavLink to="/trainer_home/view" className="nav-link" style={{ color: 'white' }}>View Exercise</NavLink>
                <NavLink to="/trainer_home/modify" className="nav-link" style={{ color: 'white' }}>Modify Exercise</NavLink>
               
              </div>
            )}
            { <Routes>
              <Route path="view" element={<ViewExercises></ViewExercises>} />
              <Route path="modify" element={<ModifyExerciseForm></ModifyExerciseForm>} />
              
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

            <br/>
            <br/>
            <br/>
                <h2 style={{ fontSize: '18px', color: 'blue' ,fontWeight: 'bold'}}>New Workout</h2>
                <form class="addworkout-box1">
                <div class="input-group">
                    <label htmlFor="goals_id" className="form-label">Goal:</label>
                    <select
                        className="form-control"
                        id="goals_id"
                        name="goals_id"
                        value={info.goals_id}
                        onChange={(e) => {
                        dispatch({ type: 'update', fld: 'goals_id', val: e.target.value });
                        }}
                    >
                        <option value="">Select a goal</option>
                        <option value="1">Weight Gain</option>
                        <option value="2">Weight Loss</option>
                        <option value="3">Fitness</option>
                    </select>
                    </div>

                    <div class="input-group">
                    <label htmlFor="exercise_id" className="form-label">exercise:</label>
                    <select
                        className="form-control"
                        id="exercise_id"
                        name="exercise_id"
                        value={info.exercise_id}
                        onChange={(e) => {
                        dispatch({ type: 'update', fld: 'exercise_id', val: e.target.value });
                        }}
                    >
                        <option value="">Select an exercise</option>
                        {exercises.map((exercise) => (
                        <option key={exercise.id} value={exercise.id}>
                            {exercise.name}
                        </option>
                        ))}
                    </select>
                    </div>

                    <div class="input-group">
                    <label htmlFor= "reps" className="form-label">reps :</label>
                    <input type="number" className="form-control" id="reps" name="reps" value={info.reps} 
                        onChange={(e)=>{dispatch({type:'update',fld:'reps',val:e.target.value})}}></input>
                    </div>

                    <div className="button-group">
                    <button type="submit" className="btn btn-primary px-3" onClick={(e)=>{sendData(e)}}>Add</button>
                    <button type="reset" className="btn btn-primary px-3"onClick={(e)=>{dispatch({type:'reset'})}}>Reset</button>
                    </div>
                    
                </form>
                <p>{JSON.stringify(info)}</p>
                <p>{msg}</p>
                </div>

   )
}