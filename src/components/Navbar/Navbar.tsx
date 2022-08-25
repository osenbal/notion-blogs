import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.modules.css';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg mt-md-3 mt-lg-5 mt-2">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">
            Simp Blogs
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                  aria-current="page"
                  href="https://iqballl.netlify.app"
                >
                  PORTFOLIO
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={'/'}>
                  BLOG
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  ABOUT ME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
