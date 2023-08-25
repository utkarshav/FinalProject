import './App.css';
import Home from './Components/Home';

import { Link, Route, Routes } from 'react-router-dom';
import RegisterComp from './Components/RegisterComp';
import LoginComp from './Components/LoginComp';
import AdminComp from './Components/AdminDisplayAll';
import TrainerComp from './Components/TrainerComp';
import DietitianComp from './Components/DietitianComp';
import MemberComp from './Components/MemberComp';
import MemberRegisterComp from './Components/MemberRegisterComp';
import StaffRegisterComp from './Components/StaffRegistration';
import LogoutComp from './Components/LogoutComp';
import AdminComponent from './Components/AdminComponent';
import AdminDisplayAll from './Components/AdminDisplayAll';
import ApproveStatusComp from './ApproveStatusComp';

function App() {
  return (
    <div className="App">
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
      <Route path="/admin_home" element={<AdminComponent/>}></Route>
      <Route path="/trainer_home"element={<TrainerComp></TrainerComp>}></Route>
      <Route path="/dietitian_home" element={<DietitianComp></DietitianComp>}></Route>
      <Route path="/member_home3" element={<MemberComp></MemberComp>}></Route>
      <Route path='member_registration' element={<MemberRegisterComp></MemberRegisterComp>}></Route>
      <Route path='staff_registration' element={<StaffRegisterComp></StaffRegisterComp>}></Route>
      <Route path="/logout"element={<LogoutComp />}/>
      <Route path="/displayallmembers"element={<AdminDisplayAll />}/>
      <Route path="/pendingapproval"element={<ApproveStatusComp />}/>
      <Route path="/registertrainer" element={<StaffRegisterComp/>}/>
     </Routes>
    </div>
  );
}

export default App;
