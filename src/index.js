/*const element = document.createElement("h1");
element.innerHTML = "Hello React";

const container = document.getElementById("root");
container.appendChild(element);*/

import React from "react";
import ReactDOM from "react-dom";

const user = {
  firstname: "Alexis",
  lastname: "Hernandez",
  avatar:
    "https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg",
};

function getName(user) {
  return `${user.firstname} ${user.lastname}`;
}

function getGetting(user) {
  if (user) {
    return <h1>Hello React, welcome {getName(user)}</h1>;
  } else {
    return <h1>Hello Stranger!</h1>;
  }
}

const name = "Alexis Hernandez Mondragon";

const element = (
  <div>
    <h1>{getGetting(user)}</h1>
    <img src={user.avatar} />
  </div>
);

const container = document.getElementById("root");

ReactDOM.render(element, container);
