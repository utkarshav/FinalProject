// import React, { useState } from 'react';

//  function AdminComponent() {
//   const [members, setMembers] = useState([]);
  
//   const addMember = (member) => {
//     setMembers([...members, member]);
//   };

  // const renderMembers = members.map((member, index) => (
  //   <div key={index}>{member.name}</div>
  // ));

  import React, { useEffect, useState } from 'react';
  import { Link, Route, Routes, useNavigate, NavLink } from "react-router-dom"

function AdminDisplayAll() {
  // const [members, setMembers] = useState([]);

  // useEffect(() => {
  //   // Fetch data when the component mounts
  //   fetch("http://localhost:8080/allMem")
  //   .then(resp =>resp.text())
  //   .then(text => text.length ? JSON.parse(text) : {})
  //   .then(data => setMembers(data))
  //   .catch(error => console.error('Error fetching members:', error));

  // }, []);

  const [members, setMembers] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:8080/allMem")
      .then(response => response.json())
      .then(data => setMembers(data))
      .catch((error) => console.error("Error fetching exercises:", error))
  }, []);

 

  return (
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
      <h1>Members</h1>
      <table className='table table-bordered'>
        <tbody>
          <tr> 
            <th> id </th>
            <th>fname</th>
            <th>lname</th>
            <th>email</th>
            <th>bloodgroup</th>
            <th>height</th>
            <th>weight</th>
            <th>contact</th>
            <th>address</th>
            <th>status</th>
            <th>trainer_id</th>
            <th>dietitian_id</th>
            <th>membership_id</th>
            <th>startdate</th>
            <th>enddate</th>
          </tr>
          {
            members.map(member =>{
              return (
                <tr>
                  <td>{member.id}</td>
                  <td>{member.fname}</td>
                  <td>{member.lname}</td>
                  <td>{member.emailid}</td>
                  <td>{member.bloodgroup}</td>
                  <td>{member.height}</td>
                  <td>{member.weight}</td>
                  <td>{member.contactno}</td>
                  <td>{member.address}</td>
                  <td>{member.status}</td>
                  <td>{member.trainer_id ? member.trainer_id.id : "no trainer alloted"}</td>
                  <td>{member.dietitian_id ? member.dietician_id.id : "no dietitian alloted"}</td>
                  <td>{member.membership_id ? member.membership_id.id : "no membership bought"}</td>
                  <td>{member.startdate}</td>
                  <td>{member.enddate}</td>
                  
                </tr>
              );
            })
          }
        </tbody>
     </table>
    </div>
  );
};

export default AdminDisplayAll;