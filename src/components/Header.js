import React from 'react';
import '../css/header.css';
class Header extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div id="header" class="row">
          <div id="nav-name" class="col-5">
            <h1>Remind Me</h1>
          </div>
          <div id="header-logo" className="col-2">
            <img src="logo.png" />
          </div>
          <div id="nav-login" class="col-5 ">
            <h2>
              <a href="">Login/Signup</a>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
