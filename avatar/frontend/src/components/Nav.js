import React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <header className="nav">
        <a href="#">Logo</a>
        <nav>
          <a href="#">Dashboard</a>
          <a href="#">Search Restaurants</a>
          <a href="#">Profile</a>
          <a href="#">Upgrade</a>
        </nav>
        <div>
          <div className="nav__search">
            <input type="text" placeholder="Search"/>
            {/* svg here  */}
          </div>
          {/* logo here */}
        </div>
      </header>
    )
  }
}

export default Nav;
