import React, { useEffect, useState } from 'react';
import {Link, NavLink, Route, Routes } from "react-router-dom";
export default function ApproveStatusComp()
{
    const [members, setMembers] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:8080/pending")
        .then(response => response.json())
        .then(data => setMembers(data));
        console.log(members);
    }, []);

    const handleApproveClick = (memberId) => {
        console.log("Button clicked with memberId:", memberId);
        fetch("http://localhost:8080/approve/" + memberId, {
            method: 'PUT',
        })
        .then(response => {
            if (response.ok) {
                // Refetch the updated member data after a successful PUT request
                fetch("http://localhost:8080/pending")
                    .then(response => response.json())
                    .then(data => setMembers(data));
            } else {
                // Handle error case if the response status is not OK
            }
        });
    };
    

    return (
        <div>
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
          <h1>Approve members</h1>
          <table className='table table-bordered' >
            <tbody>
              <tr> 
                <th> id </th>
                <th>UserType</th>
                <th>Userid</th>
                <th>email</th>
                <th>Action</th>
                </tr>
              {
                members.map(member =>{
                  return (
                    <tr>
                      <td>{member.id}</td>
                      <td>Member</td>
                      <td>{member.uid}</td>
                      <td>{member.email}</td>
                      <td>
                        <button type='button'
                        onClick={() => handleApproveClick(member.id)}
                        >Approve</button>
                      </td>
                      </tr>
                  );
                })
              }
            </tbody>
         </table>
        </div>
    );
};