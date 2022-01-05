import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <div id='img.container'>
          <img src='/public/bin/logo_small.jpg'></img>
        </div>
        <div>
          <button>Login</button>
        </div>
      </div>
    );
  }
}

export default App;
