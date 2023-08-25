import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';

import { Link, Route, Routes } from 'react-router-dom';
import RegisterComp from './Components/RegisterComp';
import LoginComp from './Components/LoginComp';
import AdminComp from './Components/AdminComp';
import TrainerComp from './Components/TrainerComp';
import DietitianComp from './Components/DietitianComp';
import MemberComp from './Components/MemberComp';
import MemberRegisterComp from './Components/MemberRegisterComp';
import StaffRegisterComp from './Components/StaffRegistration';
import { useSelector } from 'react-redux';
import AddExerciseForm from './Components/AddExerciseForm';
import ModifyExerciseForm from './Components/ModifyExerciseForm';
import viewExercise from './Components/viewExercise';
import ViewExercise from './Components/viewExercise';
import LogoutComp from './LogoutComp';
import AddTrainer from './Components/AddTrainer';
import AssignWorkout from './Components/AssignWorkout';
import AddWorkout from './Components/AddWorkout';
import MemberHomeComp from './Components/MemberHomeComp';
import BuyMembershipComp from './Components/BuyMembershipComp';

function App() {

  //inital state of logged (logged is maintain in slice)
  const mystate = useSelector((state)=>state.logged)



  return (
    
    <div className="App">
      <div style={{display: mystate.loggedIn ? "none":"block"}}>
      <nav className="navbar navbar-expand-sm mb-3">
        <div className="container-fluid">
          <ul className="navbar-nav">
          <li className="nav-item">
                <Link to="/" className="nav-link px-3" style={{ fontSize: '38px', color: 'blue' ,fontWeight: 'bold' , marginLeft: '100px'}}>
                    Fitness Tracker
                </Link>
          </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
             <Link to="member_registration" className="nav-link px-3" style={{ fontSize: '18px', color: 'black', fontWeight: 'bold' }}>
               Member Registration
            </Link>
            </li>
            <li className="nav-item">
             <Link to="staff_registration" className="nav-link px-3" style={{ fontSize: '18px', color: 'black', fontWeight: 'bold' }}>
               Staff Registration
            </Link>
            </li>
            <li className="nav-item">
              <Link to="Login" className="nav-link px-3" style={{ fontSize: '18px', color: 'black', fontWeight: 'bold' }}>
              Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
     
     <Routes>
      <Route path='Login' element={<LoginComp></LoginComp>}></Route>
      <Route path='register' element={<RegisterComp></RegisterComp>}></Route>
      <Route path="/admin_home" element={<AdminComp></AdminComp>}></Route>
      <Route path="/trainer_home"    element={<TrainerComp></TrainerComp>}></Route>
      <Route path="/dietitian_home" element={<DietitianComp></DietitianComp>}></Route>
      <Route path="/member_home" element={<MemberComp></MemberComp>}></Route>
      <Route path='member_registration' element={<MemberRegisterComp></MemberRegisterComp>}></Route>
      <Route path="/buymembership" element={<BuyMembershipComp></BuyMembershipComp>}  ></Route>
      <Route path='/memberhome' element={<MemberHomeComp></MemberHomeComp>}></Route>
      <Route path='staff_registration' element={<StaffRegisterComp></StaffRegisterComp>}></Route>
      <Route path="/trainer_home/add" element={<AddExerciseForm></AddExerciseForm>} />
      <Route path="/trainer_home/modify" element={<ModifyExerciseForm></ModifyExerciseForm>} />
      <Route path="/trainer_home/view" element={<ViewExercise/>} />
      <Route path='/logout' element={<LogoutComp></LogoutComp>}></Route>
      <Route path="/trainer_home/addT" element={<AddTrainer></AddTrainer>} />
      <Route path="/trainer_home/assignT" element={<AssignWorkout></AssignWorkout>} />
      { <Route path="/trainer_home/addW" element={<AddWorkout></AddWorkout>}></Route> }
     </Routes>
     </div>
    </div>
  );
}

export default App;
