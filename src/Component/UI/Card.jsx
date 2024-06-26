import React from "react";

const data = [
  {
    title: "Commercial",
    money: "$20",
    content: "Unlimited access Courses",
    content2: "certificate After Completion",
    content3: "High Resolution Videos",
    content4: "24/7 Dedicated Suppport",
  },
  {
    title: "Commercial",
    money: "$20",
    content: "Unlimited access Courses",
    content2: "certificate After Completion",
    content3: "High Resolution Videos",
    content4: "24/7 Dedicated Suppport",
  },
  {
    title: "Commercial",
    money: "$20",
    content: "Unlimited access Courses",
    content2: "certificate After Completion",
    content3: "High Resolution Videos",
    content4: "24/7 Dedicated Suppport",
  },
];

const Card = () => {
  return <>
  <div>
    {
        data.map((val,i)=>{
            return(
               
               <div>

                
                </div>
                
            )
        })
    }
  </div>
  
  </>;
};

export default Card;
