import React from "react";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <header className="App-header  pd-3 mb-3">
          <Link to="/" className="fs-3 ubuntu navbar-brand">
            Rick & Morty <span className="text-primary">Wiki</span>{" "}
          </Link>
        </header>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <style jsx>
            {`
              button[aria-expanded="false"] > .close {
                display: none;
              }
              button[aria-expanded="true"] > .open {
                display: none;
              }
            `}
          </style>
          <i class="fas fa-bars open fw-bold text-dark"></i>
          <i class="fas fa-times close fw-bold text-dark"></i>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav fs-5">
            <NavLink activeClassName="active" to="/" className="nav-link ">
              Characters
            </NavLink>
            <NavLink to="/Episodes" className=" nav-link">
              Episodes
            </NavLink>
            <NavLink to="/Location" className=" nav-link">
              Locations
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
