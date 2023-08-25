import { Link, Route, Routes } from 'react-router-dom';
export default function AdminComponent()
    {

        return(
            <div>
                <nav className="navbar navbar-expand-sm bg-primary  mb-3">
              <div className="container-fluid">
               <ul className="navbar-nav">
               
              <li>
              <Link to="/displayallmembers" className="nav-link px-3" style={{ fontSize: '18px', color: 'white', fontWeight: 'bold' }}>
               Display All Members
            </Link> 
              </li>
              <li>
              <Link to="/pendingapproval" className="nav-link px-3" style={{ fontSize: '18px', color: 'white', fontWeight: 'bold' }}>
               Approve Members
            </Link> 
              </li>
              <li>
              <Link to="/registertrainer" className="nav-link px-3" style={{ fontSize: '18px', color: 'white', fontWeight: 'bold' }}>
               Trainer Registration
            </Link> 
              </li>
               </ul>
              </div>
            </nav>
                
                Welcome to Admin Component
            </div>
        )

    }