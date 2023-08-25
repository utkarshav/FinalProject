import { useReducer, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom"
import ViewExercises from "./viewExercise";
import ModifyExerciseForm from "./ModifyExerciseForm";
import { NavLink } from "react-router-dom";
export default function AddExerciseForm()
{

    const [exerciseOptionsVisible, setExerciseOptionsVisible] = useState(false);

    const toggleExerciseOptions = () => {
      setExerciseOptionsVisible(!exerciseOptionsVisible);
    };
  

    const init ={

        name:" ",
        muscle_type:" ",
        calories_burnt:" ",
        equipment:"",
        description:" ",

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
        fetch("http://localhost:8080/saveExercise",reqOptions)
        .then(resp =>resp.text())
        .then(text => text.length ? JSON.parse(text) : {})
        .then(obj => {
                   if(Object.keys(obj).length === 0)
                   {
                        setMsg("fill all the fields!");
                   }
                   else
                   {
                    alert("Exercise Added");
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
                <h2 style={{ fontSize: '18px', color: 'blue' ,fontWeight: 'bold'}}>New Exercise</h2>
                <form class="addexercise-box1">
                    <div class="input-group">
                    <label htmlFor= "name" className="form-label">Exercise :</label>
                    <input type="text" className="form-control" id="name" name="name" value={info.name} 
                        onChange={(e)=>{dispatch({type:'update',fld:'name',val:e.target.value})}}></input>
                    </div>
                    <div class="input-group">
                    <label htmlFor= "muscle_type" className="form-label">muscle type :</label>
                    <input type="text" className="form-control" id="muscle_type" name="muscle_type" value={info.muscle_type} 
                        onChange={(e)=>{dispatch({type:'update',fld:'muscle_type',val:e.target.value})}}></input>
                    </div>
                    <div class="input-group">
                    <label htmlFor= "calories_burnt" className="form-label">calories/min :</label>
                    <input type="text" className="form-control" id="calories_burnt" name="calories_burnt" value={info.calories_burnt} 
                        onChange={(e)=>{dispatch({type:'update',fld:'calories_burnt',val:e.target.value})}}></input>
                    </div>
                    <div class="input-group">
                    <label htmlFor= "equipment" className="form-label">equipment : </label>
                    <input type="text" className="form-control" id="equipment" name="equipment" value={info.equipment} 
                       onChange={(e)=>{dispatch({type:'update',fld:'equipment',val:e.target.value})}}></input>
                    </div>
                   
                    <div className="input-group">
                    <label htmlFor="description" className="form-label">Description:</label>
                    <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        value={info.description}
                        onChange={(e) => {
                        dispatch({ type: 'update', fld: 'description', val: e.target.value })}}  />
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