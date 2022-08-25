import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.modules.css';

function Navigation({ categories }: any) {
  return (
    <>
      <section className="container" id="navigation">
        <ul className="navigation__category d-flex flex-row justify-content-start align-items-center gap-5">
          <li key="all" className="navigation__item">
            <NavLink className="fw-bold" to="/">
              All
            </NavLink>
          </li>
          {categories
            ? categories.map((category: any) => (
                <li key={category.id} className="navigation__item">
                  <NavLink
                    className="fw-bold"
                    to={`/category/${category.name}`}
                  >
                    {category.name}
                  </NavLink>
                </li>
              ))
            : null}
        </ul>
      </section>
    </>
  );
}

export default Navigation;
