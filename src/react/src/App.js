import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import MemberComp from "./Components/MemberComp";
import { Link, Route, Routes } from 'react-router-dom';

import LoginComp from './Components/LoginComp';
import MemberRegisterComp from './Components/MemberRegisterComp';
import StaffRegisterComp from './Components/StaffRegistration';
import BuyMembershipComp from './Components/BuyMembershipComp';
import MemberHomeComp from './Components/MemberHomeComp';
import TrainerComp from './Components/TrainerComp';

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
      <Route path='member_registration' element={<MemberRegisterComp></MemberRegisterComp>}></Route>
      <Route path='staff_registration' element={<StaffRegisterComp></StaffRegisterComp>}></Route>
      <Route path="/member" element={<MemberComp></MemberComp>}></Route>
      <Route path="/buymembership" element={<BuyMembershipComp></BuyMembershipComp>}  ></Route>
      <Route path='/memberhome' element={<MemberHomeComp></MemberHomeComp>}></Route>
      <Route path='/trainer_home' element={<TrainerComp></TrainerComp>}></Route>
     </Routes>
    </div>
  );
}

export default App;
