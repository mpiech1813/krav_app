import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <div id='img.container'>
          <img src='/public/bin/logo_small.jpg'></img>
        </div>
        <div id='middle'>
          <p>Login with the account which owns sheet</p>
          <div className='g-signin2' data-onsuccess='onSignIn'></div>
          <p>OR</p>
          {/*continue button can be replaced with just a redirect to the page if user login data is present*/}
          <button>Continue</button>
        </div>
      </div>
    );
  }
}

export default App;
