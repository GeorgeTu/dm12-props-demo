import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// IMPORT CHILD COMPONENT
import SubRedditContainer from "./components/SubRedditContainer/SubRedditContainer";
import HelloMessage from "./components/HelloMessage/HelloMessage";

class App extends Component {
  // CREATE CONSTRUCTOR TO SETUP BASE DATA FOR COMPONENT
  constructor(props) {
    // INVOKE SUPER TO ACCESS PROPS FROM PARENT
    super(props);
    // OUR STATE DECLARATION
    this.state = {
      subreddits: ["r/reactJS", "r/pcmasterrace", "r/cutedoggos", "r/uglycats"]
    };
    // BIND FUNCTION IN CONSTRUCTOR TO KEEP CONTEXT ON APP
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  // handleNameChange() {
  //   // BAD JUJU
  //   // this.state.name = "Josh";
  //   // GOOD WAY
  //   this.setState({ name: "Josh", height: 72 });
  //   // Object.assign({}, this.state, {name: 'Josh'});
  // }
  // METHOD TO PASS TO CHILD COMPONENTS
  handleNameChange(name, index) {
    const subredditsCopy = this.state.subreddits.slice();
    subredditsCopy[index] = name;
    this.setState({ subreddits: subredditsCopy });
  }
  // RENDER OUR CONTENT TO THE DOM
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          {/* MAP OVER DATA ON STATE AND PASS UNIQUE PROPS TO INDIVIDUAL CHILD COMPONENTS */}
          {this.state.subreddits.map((val, idx) => (
            <SubRedditContainer
              key={idx}
              subreddit={val}
              handleChange={this.handleNameChange}
              index={idx}
            />
          ))}
          <br />
          <br />
          <br />
          <br />
          <br />
          <HelloMessage name={"Steven"} />
          <HelloMessage name={"John"} />
          <HelloMessage name={"Jack"} />
        </div>
      </div>
    );
  }
}

export default App;
