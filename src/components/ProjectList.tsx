import React from "react";
import { NavLink } from "react-router-dom";

function ProjectList() {
  return (
    <div>
      <ul className="text-white">
        <li>
          <NavLink to="/project1-float-nav-menu">
            Project 1: Float Nav Menu
          </NavLink>
        </li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul>
    </div>
  );
}

export default ProjectList;
