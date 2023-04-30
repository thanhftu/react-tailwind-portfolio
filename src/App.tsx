import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProjectList from "./components/ProjectList";
import FloatNavMenu from "./components/projects/NavBar/FloatNavMenu";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProjectList />} />
        <Route path="/project1-float-nav-menu" element={<FloatNavMenu />} />
        {/* <Route path="/library" element={<Library />} />
        <Route path="/player" element={<Player />} /> */}
      </Routes>
    </>
  );
}

export default App;
