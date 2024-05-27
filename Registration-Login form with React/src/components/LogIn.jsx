import React from "react";
import Inputs from "./Inputs";
import Button from "./Buttons";

function LogIn() {
  return (
    <div>
      <form className="form">
        <Inputs type="Username" placeholder="Username" />
        <Inputs type="Password" placeholder="Password" />
        <Button buttonInfo="Log In" />
      </form>
    </div>
  );
}

export default LogIn;
