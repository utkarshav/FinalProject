import { current } from "@reduxjs/toolkit";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function BuyMembershipComp()
{
    const[user,setUser] =useState([]);
    const[plan,setPlan] =useState([]);
    const navigate = useNavigate();
    useEffect( ()=> {
        const obj= JSON.parse(localStorage.getItem("loggedUser"));
    
        localStorage.setItem("loggedUser",JSON.stringify(obj))
        console.log(obj)
        setUser(obj);

        fetch("http://localhost:8080/allmembership") // Replace with your API endpoint
      .then((response) => response.json())
      
      .then((data) => {
        console.log("Fetched data:", data);
        setPlan(data);
      })
      
      .catch((error) => console.error("Error fetching members:", error));

            

         },[]);
   
        
        
          const handleBuyPlan = (id) => {
            // Add your logic here to handle the buy action for the selected plan
            console.log(`Buying ${id} plan`);
            const membership_id=id;
            const member_id=user.id;
            const status=1;

            fetch("http://localhost:8080/updateMembershipid?membership_id="+membership_id+"&status="+status+"&member_id="+member_id,{ method: 'POST', mode: 'cors', })
            .then(resp =>{  
                      if(resp.ok)
                      {
                          console.log(resp);
                          alert("Payment done successfully!")
                          navigate("/memberhome");
                      }
                      else
                      {
                          console.log(resp.statusText);
                          throw new Error("server error");
                      }
              })
     
          };
        
          return (
            <div>
                 <h2>Membership Plans</h2>
              {plan.map(plans => (
                <div className="btn btn-primary btn-lg px-3 mx-3" key={plans.name}>
                  <h3>{plans.name}</h3>
                  <p>Duration: {plans.duration} months</p>
                  <p>Price: ₹{plans.baseprice}</p>
                  <button  onClick={() => handleBuyPlan(plans.id)}>Buy</button>
                </div>
              ))}      
            </div>
          );
}