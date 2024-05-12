//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

var date = new Date();
var hour = date.getHours();
var min = date.getMinutes();
const timeStyle = { color: "red" };
var msg;

if (hour >= 0 && hour < 12) {
  msg = "Good morning";
  timeStyle.color = "red";
} else if (hour >= 12 && hour < 18) {
  msg = "Good afternoon";
  timeStyle.color = "green";
} else {
  msg = "Good evening";
  timeStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={timeStyle}>
    {msg}
  </h1>,
  document.getElementById("root")
);
