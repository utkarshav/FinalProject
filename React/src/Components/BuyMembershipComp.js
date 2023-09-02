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
   
        
        
          const handleBuyPlan = (plann) => {
            // Add your logic here to handle the buy action for the selected plan
            console.log(`Buying ${plann} plan`);
            const membership_id=plann.id;
            const member_id=user.id;
            const status=1;
            const ammount=plann.baseprice;

            fetch("http://localhost:8080/updateMembershipid?membership_id="+membership_id+"&status="+status+"&member_id="+member_id,{ method: 'POST', mode: 'cors', })
            .then(resp =>{  
                      if(resp.ok)
                      {
                          console.log(resp);
                          alert("Welcome to our gym!")
                          navigate("/memberhome");
                      }
                      else
                      {
                          console.log(resp.statusText);
                          throw new Error("server error");
                      }
              })
              //payment table insert
              fetch("http://localhost:8080/savepayment?member_id="+member_id+"&membership_id="+membership_id+"&ammount="+ammount,{ method: 'POST', mode: 'cors', })
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
                  <button  onClick={() => handleBuyPlan(plans)}>Buy</button>
                </div>
              ))}  
              <tr className="exercise-table">
                <td>
                  <div>
                <h2>Silver Membership:</h2>
                <p>Our Silver membership plan is crafted for those who are confident in their workout routine and prefer to take charge of their fitness journey independently. It's the ideal choice for individuals who are already well-versed in exercise techniques and are motivated to achieve their goals without the assistance of a personal trainer. With access to our state-of-the-art gym equipment, a range of group fitness classes, and all the essential amenities, Silver members have the freedom to create their own workout routine and pace.</p>
              </div> 
              </td> 
              <td>
              <div>
                <h2>Gold Membership:</h2>
                <p >Stepping up to the Gold membership plan introduces an elevated level of support and guidance. This plan is designed for members who are seeking a more personalized fitness experience. Gold members are paired with a dedicated personal trainer who crafts a customized workout plan tailored to their goals and fitness level. This one-on-one attention ensures that each workout is effective, efficient, and aligned with the member's aspirations. From goal-setting to progress tracking, our personal trainers are here to provide expertise and motivation every step of the way.</p>
                </div>
                </td>
                <td>
                <div>
                <h2>Platinum Membership:</h2>
                <p>At the pinnacle of our offerings, the Platinum membership plan delivers a comprehensive wellness package. Going beyond fitness, this plan includes the benefits of the Gold membership, with the additional advantage of access to a professional dietitian. Our Platinum members receive personalized nutritional guidance and meal plans designed to complement their fitness regimen. This holistic approach ensures that members are not only achieving their fitness goals but also maintaining a balanced and nourishing lifestyle.</p>
                </div> 
                </td> 
                </tr>
            </div>
          );
}