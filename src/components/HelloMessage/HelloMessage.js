import React, { Component } from "react";

const HelloMessage = props => <div>Hello, {props.name}</div>;

// function HelloMessage(props) {
//   return <div>Hello, {props.name}</div>;
// }

// class HelloMessage extends Component {
//   render() {
//     return <div>Hello, {props.name}</div>;
//   }
// }

export default HelloMessage;
