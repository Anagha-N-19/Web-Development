import React from "react";
import Inputs from "./Inputs";
import Button from "./Buttons";

function Register() {
  return (
    <div>
      <form className="form">
        <Inputs type="Username" placeholder="Username" />
        <Inputs type="Password" placeholder="Password" />
        <Inputs type="Password" placeholder="Confirm password" />
        <Button buttonInfo="Register" />
      </form>
    </div>
  );
}

export default Register;
