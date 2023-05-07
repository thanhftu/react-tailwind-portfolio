import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <NavLink to="/">
      <div className="bg-slate-100 w-[80px] px-3 py-1 border rounded-2xl shadow translate-x-3 translate-y-3 hover:bg-slate-300 hover:scale-110 transition">
        Home
      </div>
    </NavLink>
  );
}

export default Home;
