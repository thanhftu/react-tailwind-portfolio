import { useState } from "react";
import { NavLink } from "react-router-dom";

import { AiOutlineCaretDown } from "react-icons/ai";

function DropMenu2() {
  const [isSub, setIsSub] = useState(false);
  console.log(isSub);
  const onSubmenu = () => {
    setIsSub(!isSub);
  };

  return (
    <div className="w-full h-full min-h-[100vh] bg-green-950">
      <div className="relative mx-auto px-auto bg-cyan-500">
        <div className="h-[64px] flex flex-row items-center justify-between p-0">
          {/* Logo */}
          {/* <div className="pt-2">
          <img src={logo} alt="Logo" />
        </div> */}
          <NavLink to="/">
            <div className="text-orange-500 text-2xl font-bold italic shadow-md p-4 rounded-full h-full">
              LOGO
            </div>
          </NavLink>
          {/* Menu Items */}
          <div className="hidden space-x-10 items-center justify-between md:flex text-white h-full">
            <a
              href="#"
              className="hover:text-veryDarkBlue text-white text-center align-middle hover:bg-slate-300 h-full flex items-center"
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-veryDarkBlue text-white text-center hover:bg-slate-300 h-full flex items-center justify-center gap-1 relative group"
            >
              Dropdown{""}
              <span>
                <AiOutlineCaretDown />
              </span>
              <ul className="absolute left-0 top-[64px] bg-cyan-200 bg-opacity-30 w-[200px] hidden group-hover:flex flex-col gap-3 p-7">
                <li className="w-full text-left">
                  <a href="#">Product 1</a>
                </li>
                <li className="w-full text-left">
                  <a href="#">Product 2</a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative w-full flex justify-between"
                    onClick={onSubmenu}
                  >
                    Product 3 <b>+</b>
                    <ul
                      className={`absolute top-0 left-[180px] bg-cyan-200 bg-opacity-30 w-[200px]  flex-col gap-3 p-7 
                      ${isSub ? "flex" : "hidden"}
                    `}
                    >
                      <li>
                        <a href="">Submenu 01</a>
                      </li>
                      <li>
                        <a href="">Submenu 02</a>
                      </li>
                      <li>
                        <a href="">Submenu 03</a>
                      </li>
                    </ul>
                  </a>
                </li>
              </ul>
            </a>
            <a
              href="#"
              className="hover:text-veryDarkBlue text-white text-center hover:bg-slate-300 h-full"
            >
              Plortfolio
            </a>
            <a
              href="#"
              className="hover:text-veryDarkBlue text-white text-center hover:bg-slate-300 h-full flex items-center justify-center gap-1"
            >
              Blog{" "}
              <span>
                <AiOutlineCaretDown />
              </span>
            </a>
            <a
              href="#"
              className="hover:text-veryDarkBlue text-white text-center hover:bg-slate-300 h-full"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropMenu2;
