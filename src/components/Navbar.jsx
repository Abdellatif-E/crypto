import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo">
        <h1><a className="log" href="/">Home</a></h1>
      </div>
      {activeMenu && (
        // eslint-disable-next-line
      <div className="link"> 
        <div>
          <Link className="m" to="/exchanges">Exchanges</Link>
        </div>
        <div>
          <Link className="m" to="/">Chart</Link>
        </div>
      </div>
      )}
    </div>
  );
};

export default Navbar;
