import React from 'react'
import img from '../images/MK style dz profil.jpg'

const Navbar = () => {
  return (
    <div className="row">
      <nav className="navbar navbar-expand navbar-light w-100">
        <ul className="navbar-nav me-auto d-flex align-items-center w-100">
          {/* Logo à gauche */}
          <li className="nav-item col-4">
            <a className="nav-link active text-dark" href="#">
              <img src={img} alt="profil" width={70} height={50} />
            </a>
          </li>

          {/* Liens du centre */}
          <li className="nav-item col">
            <a className="nav-link text-dark fw-bold nav-link-custom" href="#">Home</a>
          </li>
          <li className="nav-item col">
            <a className="nav-link text-dark fw-bold nav-link-custom" href="#">Courses</a>
          </li>
          <li className="nav-item col">
            <a className="nav-link text-dark fw-bold nav-link-custom" href="#">About Us</a>
          </li>
          <li className="nav-item col">
            <a className="nav-link text-dark fw-bold nav-link-custom" href="#">Contact Us</a>
          </li>

          {/* Bouton login à droite */}
          <li className="nav-item col-4">
            <a className="nav-link active text-dark text-end fw-bold" href="#">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
