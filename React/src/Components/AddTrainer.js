import React, { useEffect, useState } from "react";
export default function AddTrainer()
{
    


  const [membersWithoutTrainer, setMembersWithoutTrainer] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/getMembersWithoutTrainer") // Replace with your API endpoint
      .then((response) => response.json())
      
      .then((data) => {
        console.log("Fetched data:", data);
        setMembersWithoutTrainer(data);
      })
      
      .catch((error) => console.error("Error fetching members:", error));
  }, []);
      
  const addTrainer = (memberId) => {
    // Implement your logic to assign a trainer to the member
    // You can make an API request here to update the trainer for the member
    // For example: fetch("http://localhost:8080/assignTrainer", { method: "POST", body: JSON.stringify({ memberId }) });
  };

  return (
    <div>
      <h1>Members Without Trainer</h1>
      <table border={1} className="exercise-table">
        <thead>
          <tr>
            <th>Member ID</th>
            <th>Name</th>
            <th>Contact No.</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {membersWithoutTrainer.map(member => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.fname}</td>
              <td>{member.contactno}</td>
              <td>{member.emailid}</td>
              <td>
                <button type="button" onClick={() => addTrainer(member.id)}>
                  Add Trainer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


