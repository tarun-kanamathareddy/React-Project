import React from "react";

const NotLoggedIn = ({ LoggedIn, setLoggedIn }) => {
  return (
    <>
    <h1>Sorry Try Another Way</h1>
    <button onClick={() => {setLoggedIn(!LoggedIn);}}>Access</button>
    </>

  )}

export default NotLoggedIn;
