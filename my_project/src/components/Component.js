import React from "react";

const Component = () => {
  let data = [
    {
      Name: "tarun",
      Title: "developer",
    },
    {
      Name: "Irfan",
      Title: "team lead",
    },
    {
      Name: "Yaseen",
      Title: "hacker",
    },
    {
      Name: "sandeep",
      Title: "writer",
    },
    {
      Name: "sateesh",
      Title: "coder",
    },
    {
      Name: "Amit",
      Title: "tester",
    },
    {
      Name: "babu",
      Title: "Designer",
    },
    {
      Name: "Abhijeeth",
      Title: "Facilitator",
    },
  ]

return (
  <>{
    data.map((item) => {
      let {Name,Title} = item;
      return (
        <>
          <h1>{item.Name}</h1>
          <p>{item.Title}</p>
        </>
      );
    })
  }
   
  </>
);
};

export default Component;
