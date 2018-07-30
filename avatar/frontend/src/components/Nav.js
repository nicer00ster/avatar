import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <header className="nav">
        <Link to="/">Logo</Link>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/">Restaurants</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/">Upgrade</Link>
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
