import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import reactImage from "../../../assets/react.svg";
import { RxPerson } from "react-icons/rx";

function DropMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: Event) => {
      if (!menuRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [menuRef]);
  const inActive = "opatcity-0 hidden transldate-y-[-20px]";
  const active = "opatcity-1  transldate-y-0";
  return (
    <div className="w-full h-full min-h-[100vh] bg-green-950">
      <div className="relative container mx-auto p-6">
        <div className="flex flex-row items-center justify-between">
          {/* Logo */}
          {/* <div className="pt-2">
          <img src={logo} alt="Logo" />
        </div> */}
          <NavLink to="/">
            <div className="text-orange-500 text-2xl font-bold italic shadow-md p-4 rounded-full">
              LOGO
            </div>
          </NavLink>
          {/* Menu Items */}
          <div className="hidden space-x-4 items-center md:flex">
            <a href="#" className="hover:text-veryDarkBlue">
              Pricing
            </a>
            <a href="#" className="hover:text-veryDarkBlue">
              Products
            </a>
            <a href="#" className="hover:text-veryDarkBlue">
              About
            </a>
            <a href="#" className="hover:text-veryDarkBlue">
              Careers
            </a>
            <a href="#" className="hover:text-veryDarkBlue">
              Community
            </a>
          </div>
          {/* buttom */}
          <a
            href="#"
            className="hidden md:block px-6 pt-2 text-blue bg-brightRed rounded-full hover:bg-brightRedLight"
          >
            Get Started
          </a>
          <div ref={menuRef}>
            <img
              onClick={() => setIsOpen(!isOpen)}
              src={reactImage}
              alt="menu"
              className="w-[40px] cursor-pointer"
            />

            <div
              className={`absolute right-[15px] top-[100px] bg-white w-[200px] flex flex-col items-center rounded-lg transition duration-[10000ms]
             before:absolute before:content-[' '] before:top-[-5px] before:right-[20px] before:w-[20px] before:h-[20px] before:rotate-45 before:bg-white
            ${isOpen ? active : inActive}
          `}
            >
              <h3 className="text-center font-semibold mt-3 text-lg text-slate-600 w-full">
                Thanh <br />
                <span className="font-light text-slate-300 text-sm">
                  Software Engineer
                </span>
              </h3>
              <ul>
                <li className="flex gap-2 items-center p-2">
                  <div className="text-slate-600 ">
                    <RxPerson />
                  </div>
                  <div className="text-slate-600 w-[100px] p-2">Profile</div>
                </li>
                <li className="flex gap-2 items-center p-2">
                  <div className="text-slate-600 ">
                    <RxPerson />
                  </div>
                  <div className="text-slate-600 w-[100px] p-2">Profile</div>
                </li>
                <li className="flex gap-2 items-center p-2">
                  <div className="text-slate-600 ">
                    <RxPerson />
                  </div>
                  <div className="text-slate-600 w-[100px] p-2">Profile</div>
                </li>
                <li className="flex gap-2 items-center p-2">
                  <div className="text-slate-600 ">
                    <RxPerson />
                  </div>
                  <div className="text-slate-600 w-[100px] p-2">Profile</div>
                </li>
                <li className="flex gap-2 items-center p-2">
                  <div className="text-slate-600 ">
                    <RxPerson />
                  </div>
                  <div className="text-slate-600 w-[100px] p-2">Profile</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropMenu;
