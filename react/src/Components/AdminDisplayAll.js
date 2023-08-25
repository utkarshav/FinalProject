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
      .then(data => setMembers(data));
      console.log(members);
  }, []);

 

  return (
    <div>
      <h1>Admin Component - Members</h1>
      Welcome to Admin Component
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
                  <td>{member.trainer_id}</td>
                  <td>{member.dietitian_id}</td>
                  <td>{member.membership_id}</td>
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