import React from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  const classesAssigned = [];
  let btnClass = "";
  if (props.persons.length <= 2) {
    classesAssigned.push(classes.red);
  }
  if (props.persons.length <= 1) {
    classesAssigned.push(classes.bold);
  }
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  console.log("[Cockpit.js] Component rendering...");
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classesAssigned.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
