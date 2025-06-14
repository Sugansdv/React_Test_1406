import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../App.css';

export default function Navbar() {
  useEffect(() => {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map((el) => new bootstrap.Tooltip(el));
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink
          className="navbar-brand"
          to="/"
          title="Go to Home page"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
        >
          RecipeApp
        </NavLink>

        <div className="d-flex gap-3">
          <NavLink
            to="/"
            title="Go to Home page"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            className={({ isActive }) =>
              "nav-link text-white" + (isActive ? " active" : "")
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/recipes"
            title="Browse all recipes"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            className={({ isActive }) =>
              "nav-link text-white" + (isActive ? " active" : "")
            }
          >
            Recipes
          </NavLink>

          <NavLink
            to="/add"
            title="Add a new recipe"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            className={({ isActive }) =>
              "nav-link text-white" + (isActive ? " active" : "")
            }
          >
            Add Recipe
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
