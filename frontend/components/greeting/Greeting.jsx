import React from "react";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser) {
      debugger;
      return <h1>{`Welcome to bBnBbb (Bench BnB, babayy),`}</h1>;
    } else {
      debugger;
      return <h2>nah</h2>;
    }
  }
}

export default Greeting;
