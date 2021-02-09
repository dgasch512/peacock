import React from 'react';
import '../styles/styles.css';

const Navbar = () => {

  return (
    <header>
      <div className="wrapper">
        <div className="neon-wrapper">
            <span className="neon-logo">gaschdangit</span>
            <span className="gradient"></span>
            <span className="dodge"></span>
        </div>
        {/* <h1 className="name">gaschdangit</h1> */}
      </div>
    </header>
  )
}

export default Navbar;