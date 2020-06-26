import React, { Component } from "react";
import AddExercise from "../assets/images/add.png";

class NewExercise extends Component {
  render() {
    return (
      <div className="row center">
        <img src={AddExercise} />
      </div>
    );
  }
}

export default NewExercise;
