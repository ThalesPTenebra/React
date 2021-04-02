import React from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  const classesAssigned = [];
  let btnClass = "";
  console.log(props.persons.length);
  if (props.persons.length <= 2) {
    classesAssigned.push(classes.red);
  }
  if (props.persons.length <= 1) {
    classesAssigned.push(classes.bold);
  }
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={classesAssigned.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
