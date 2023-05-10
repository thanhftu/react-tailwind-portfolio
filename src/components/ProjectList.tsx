import React from "react";
import { NavLink } from "react-router-dom";

function ProjectList() {
  return (
    <div>
      <ul className="text-black">
        <li>
          <NavLink to="/project1-float-nav-menu">
            <div>Project 1: Float Nav Menu</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/project2-progress-bar">
            <div>Project 2: Progressive Bar</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/project9-slider-grow">
            <div>Project 9: Slider to Grow</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/project8-border-animation">
            <div>Project 8: Border Animation</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/project7-calculator">
            <div>Project 7: Neumorphic Calculator</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/project10-drop-menu">
            <div>Project 10: Drop Menu</div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default ProjectList;
