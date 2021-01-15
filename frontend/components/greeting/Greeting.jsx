import React from "react";

class Greeting extends React.Component {
  constructor(props) {
    debugger;
    super(props);

    this.state = {
      currentUser: props.currentUser,
    };
  }

  // componentDidMount() {
  //   // this.props.currentUser =
  //   debugger;
  //   this.setState({ currentUser: this.props.currentUser });
  // }

  render() {
    if (this.state.currentUser) {
      debugger;
      return <h1>{`Welcome to bBnBbb ${this.state.currentUser},`}</h1>;
    } else {
      debugger;
      return <h2>nah</h2>;
    }
  }
}

export default Greeting;
