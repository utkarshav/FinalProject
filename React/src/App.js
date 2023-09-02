import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import MemberComp from "./Components/MemberComp";
import { Link, Route, Routes } from 'react-router-dom';
import FitnessTracker from './Components/FitnessTracker.png'
//import LoginComp from './Components/LoginComp';
import MemberRegisterComp from './Components/MemberRegisterComp';
import BuyMembershipComp from './Components/BuyMembershipComp';
import MemberHomeComp from './Components/MemberHomeComp';
import TrainerComp from './Components/TrainerComp';
import LoginComp from './Components/LoginComp';
import AdminComponent from './Components/AdminComponent';
import StaffRegisterComp from './Components/StaffRegistration';
import AdminDisplayAll from './Components/AdminDisplayAll';
import ApproveStatusComp from './ApproveStatusComp';
import AddExerciseForm from './Components/AddExerciseForm';
import ModifyExerciseForm from './Components/ModifyExerciseForm';
import ViewExercise from './Components/viewExercise';
import AddTrainer from './Components/AddTrainer';
import AssignWorkout from './Components/AssignWorkout';
import AddWorkout from './Components/AddWorkout';
import LogoutComp from './Components/LogoutComp';
import { useSelector } from 'react-redux';
function App() {
  const mystate=useSelector((state)=>state.logged)
  return (
    <div className="App">
      <div style={{display: mystate.loggedIn?"none":"block" }}>
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
              <Link to="Login" className="nav-link px-3" style={{ fontSize: '18px', color: 'black', fontWeight: 'bold' }}>
              Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      </div>
      {/* <div>
        <img src={FitnessTracker} alt="Gym Interior" />
      </div> */}
     <Routes>
      <Route path='Login' element={<LoginComp/>}></Route>
      <Route path='member_registration' element={<MemberRegisterComp></MemberRegisterComp>}></Route>
      <Route path='staff_registration' element={<StaffRegisterComp></StaffRegisterComp>}></Route>
      <Route path="/admin_home" element={<AdminComponent/>}></Route>
      <Route path="/member" element={<MemberComp></MemberComp>}></Route>
      <Route path="/buymembership" element={<BuyMembershipComp></BuyMembershipComp>}  ></Route>
      <Route path='/memberhome' element={<MemberHomeComp></MemberHomeComp>}></Route>
      <Route path='/trainer_home' element={<TrainerComp></TrainerComp>}></Route>
      <Route path="/trainer_home/add" element={<AddExerciseForm></AddExerciseForm>} />
      <Route path="/trainer_home/modify" element={<ModifyExerciseForm></ModifyExerciseForm>} />
      <Route path="/trainer_home/view" element={<ViewExercise></ViewExercise>} />
      <Route path='/logout' element={<LogoutComp></LogoutComp>}></Route>
      <Route path="/trainer_home/addT" element={<AddTrainer></AddTrainer>} />
      <Route path="/trainer_home/assignT" element={<AssignWorkout></AssignWorkout>} />
       <Route path="/trainer_home/addW" element={<AddWorkout></AddWorkout>}></Route>
      <Route path="/displayallmembers"element={<AdminDisplayAll/>}/>
      <Route path="/pendingapproval"element={<ApproveStatusComp />}/>
      <Route path="/registertrainer" element={<StaffRegisterComp/>}/>
      <Route path="/registertrainer" element={<StaffRegisterComp/>}/>
     </Routes>
    </div>
  );
}

export default App;
