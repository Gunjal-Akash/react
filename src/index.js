import React from "react";
import reactDOM from "react-dom";

const YOURNAME = "akash";
const currentDate = new Date();
const year = currentDate.getFullYear();

reactDOM.render(
  <div>
    <p>Created by {YOURNAME}.</p>
    <p>Copyright {year}.</p>
  </div>,
  (document.getElementById = "root")
);
