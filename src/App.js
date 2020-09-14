import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    setTimeout(() => {
      console.log("consturstor");
    }, 3000);
  }

  componentDidMount() {
    setTimeout(() => {
      console.log("consturstor");
    }, 3000);
  }

  componentWillMount() {
    setTimeout(() => {
      console.log("consturstor");
    }, 3000);
  }

  render() {
    setTimeout(() => {
      console.log("consturstor");
    }, 3000);
    return <div> Hello World </div>;
  }
}

export default App;
