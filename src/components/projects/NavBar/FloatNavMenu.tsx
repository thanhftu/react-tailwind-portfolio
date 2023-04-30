import React from "react";
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlinePlus,
  AiOutlineSetting,
} from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { BsPerson, BsTelephone } from "react-icons/bs";

function FloatNavMenu() {
  return (
    <div className="bottomNav grid grid-cols-2 gap-16">
      <div className="flex justify-center items-center text-2xl gap-6">
        <p className="menu-icon">
          <AiOutlineHome />
        </p>
        <p className="menu-icon">
          <GoComment />
        </p>
        <p className="menu-icon">
          <BsPerson />
        </p>
      </div>
      <div className="flex justify-center items-center text-2xl gap-6">
        <p className="menu-icon">
          <AiOutlineMail />
        </p>
        <p className="menu-icon">
          <BsTelephone />
        </p>
        <p className="menu-icon">
          <AiOutlineSetting />
        </p>
      </div>

      <label htmlFor="check" className="control-btn">
        <input
          type="checkbox"
          name="check"
          id="check"
          className="appearance-none"
        />
        <p className="icon-plus">
          <AiOutlinePlus size={30} color="white" />
        </p>
      </label>
    </div>
  );
}

export default FloatNavMenu;
