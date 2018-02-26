import React, { Component } from "react";

class SubRedditContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: ""
    };
  }
  handleInput(value) {
    console.log(value);
    this.setState({ textInput: value });
  }
  render() {
    return (
      <div>
        <input onChange={event => this.handleInput(event.target.value)} />
        {this.props.subreddit}
        <button
          onClick={() =>
            this.props.handleChange(this.state.textInput, this.props.index)
          }
        >
          Change Name
        </button>
      </div>
    );
  }
}

export default SubRedditContainer;
