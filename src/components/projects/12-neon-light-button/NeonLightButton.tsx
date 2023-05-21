import React from "react";

export default function NeonLightButton() {
  return (
    <div className="min-h-[100vh] bg-[#050801] flex flex-col items-center justify-items-center">
      <a
        href="#"
        className="relative inline-block py-6 px-8 my-10 mx-auto uppercase tracking-[4px] font-semibold text-2xl text-[#03e9f4] transition duration-200
            hover:bg-[#03e9f4] hover:text-[#050801] hover:shadow-neon1  hover:delay-1000 group overflow-hidden rounded-lg
        "
      >
        <span className="absolute top-0 left-[-100%] w-[100%] h-[2px] bg-gradient-to-r from-transparent to-[#2196f3]  group-hover:left-[100%] group-hover:duration-[1s]"></span>
        <span className="absolute bottom-0 left-[100%] w-[100%] h-[2px] bg-gradient-to-l from-transparent to-[#2196f3]  group-hover:left-[-100%] group-hover:duration-[1s] group-hover:delay-500"></span>
        <span className="absolute top-[-100%] right-[0] w-[2px] h-[100%] bg-gradient-to-b from-transparent to-[#2196f3]  group-hover:top-[100%] group-hover:duration-[1s] group-hover:delay-[250ms]"></span>
        <span className="absolute bottom-[-100%] left-[0] w-[2px] h-[100%] bg-gradient-to-t from-transparent to-[#2196f3]  group-hover:bottom-[100%] group-hover:duration-[1s] group-hover:delay-[750ms]"></span>
        NEON Button
      </a>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Button
      </a>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Button
      </a>
    </div>
  );
}
