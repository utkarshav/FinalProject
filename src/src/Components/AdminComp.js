import { NavLink, Route, Routes } from "react-router-dom";
export default function AdminComp()
{
    return(
        <nav className="navbar navbar-expand-sm bg-primary  mb-3">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item exercise-dropdown">
            <div >
              <span className="nav-link px-3" style={{ fontSize: '18px', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
                Approve Member
              </span>
            </div>
            {/* {exerciseOptionsVisible && (
              <div className="exercise-options">
                <NavLink to="/add" className="nav-link" style={{ color: 'white' }}>Add Exercise</NavLink>
                <NavLink to="/modify" className="nav-link" style={{ color: 'white' }}>Modify Exercise</NavLink>
                <NavLink to="/view" className="nav-link" style={{ color: 'white' }}>View Exercise</NavLink>
              </div>
            )}
            { <Routes>
              <Route path="add" element={<AddExerciseForm />} />
              <Route path="modify" element={<ModifyExerciseForm />} />
              
            </Routes> } */}
          </li>
          <li className="nav-item exercise-dropdown">
          <div >
              <span className="nav-link px-3" style={{ fontSize: '18px', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
                Create Trainer
              </span>
            </div>
            {/* {exerciseOptionsVisible && (
              <div className="exercise-options">
                <NavLink to="/addW" className="nav-link" style={{ color: 'white' }}>Add Workout</NavLink>
                <NavLink to="/modifyW" className="nav-link" style={{ color: 'white' }}>Modify Workout</NavLink>
                <NavLink to="/viewW" className="nav-link" style={{ color: 'white' }}>View Workout</NavLink>
                <NavLink to="/assignW" className="nav-link" style={{ color: 'white' }}>Assign Workout</NavLink>
              </div>
            )}
            {  } */}
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
  );
    
}