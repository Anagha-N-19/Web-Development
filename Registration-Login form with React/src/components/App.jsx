import React from "react";
import LogIn from "./LogIn";
import Register from "./Register";
var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {userIsRegistered ? <LogIn /> : <Register />}
    </div>
  );
}

export default App;
