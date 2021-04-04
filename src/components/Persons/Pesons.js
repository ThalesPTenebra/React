import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log("[Persons.js] getDerivedStateFromProps", props);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate");
    return true;
  }

  takeSnapshotBeforeUpdate(previousProps, previousState) {
    console.log("[Persons.js] takeSnapshotbeforeUpdate");
    return { message: "error" };
  }

  componentDidUpdate(previousProps, previousState, snapshot) {
    console.log("[Persons.js] componentDidUpdate", snapshot);
  }

  render() {
    console.log("[Persons.js] Component rendering");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}
export default Persons;
