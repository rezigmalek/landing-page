import React from 'react';
import img from '../images/MK style dz profil.jpg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-3">

        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center gap-2 fw-bold" href="#">
          <img 
            src={img} 
            alt="profil" 
            width={60} 
            height={45} 
            className="rounded-circle"
          />
          Althue Academy
        </a>

        {/* Toggler (hamburger icon) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item px-4">
              <a className="nav-link nav-link-custom fw-bold text-dark" href="#">Home</a>
            </li>
            <li className="nav-item px-4">
              <a className="nav-link nav-link-custom fw-bold text-dark" href="#">Courses</a>
            </li>
            <li className="nav-item px-4">
              <a className="nav-link nav-link-custom fw-bold text-dark" href="#">About Us</a>
            </li>
            <li className="nav-item px-4">
              <a className="nav-link nav-link-custom fw-bold text-dark" href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Login button */}
        <div className="d-none d-lg-block">
          <a className="btn btn-outline-dark fw-bold" href="#">
            Login
          </a>
        </div>
    </nav>
  );
};

export default Navbar;
