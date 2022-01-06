import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <div id='img.container'>
          <img src='/public/bin/logo_small.jpg'></img>
        </div>
        <div id='middle'>
          <button href='/api/login'>Login</button>
          <p>OR</p>
          {/*continue button can be replaced with just a redirect to the page displaying the data*/}
          <button>Continue</button>
          <p>OR GOOGLE API'S LOGIN BUTTON</p>
          <div class='g-signin2' data-onsuccess='onSignIn'></div>
        </div>
      </div>
    );
  }
}

export default App;
