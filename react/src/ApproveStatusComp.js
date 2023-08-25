import React, { useEffect, useState } from 'react';
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
          <h1>Admin Component - Members</h1>
          Welcome to Admin Component
          <table className='table table-bordered'>
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
                      <td>{member.userid}</td>
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