import React, { Component } from "react";

// FUNCTIONAL (STATELESS) COMPONENT
// PROPS RECEIVED AS ARGUMENT TO FUNCTION

const HelloMessage = props => <div>Hello, {props.name}</div>;

// ES5 FUNCTIONAL (STATELESS) COMPONENT

// function HelloMessage(props) {
//   return <div>Hello, {props.name}</div>;
// }

// CLASS BASED COMPONENT
// PROPS RECEIVED AS this.props
// class HelloMessage extends Component {
//   render() {
//     return <div>Hello, {props.name}</div>;
//   }
// }

export default HelloMessage;
