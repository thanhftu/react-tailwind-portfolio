import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProjectList from "./components/ProjectList";
import FloatNavMenu from "./components/projects/NavBar/FloatNavMenu";
import ProgressBar from "./components/projects/startistics/ProgressBar";
import SliderToGrow from "./components/projects/09-slider-to-grow/SliderToGrow";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProjectList />} />
        <Route path="/project1-float-nav-menu" element={<FloatNavMenu />} />
        <Route path="/project2-progress-bar" element={<ProgressBar />} />
        <Route path="/project9-slider-grow" element={<SliderToGrow />} />
        {/* <Route path="/library" element={<Library />} />
        <Route path="/player" element={<Player />} /> */}
      </Routes>
    </>
  );
}

export default App;
