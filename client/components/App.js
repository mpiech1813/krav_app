import React, { Component } from "react";
// import logo from "./public/bin/logo_small.jpg";

class App extends Component {
  render() {
    return (
      <div>
        <div id='img.container'>
          <img src='/public/bin/logo_small.jpg'></img>
        </div>
        <div id='middle'>
          <button>Login</button>
          <p>OR</p>
          {/*continue button can be replaced with just a redirect to the page displaying the data*/}
          <button>Continue</button>
        </div>
      </div>
    );
  }
}

export default App;
