import Home from "../../Home";

import { useState } from "react";
export default function SliderToGrow() {
  const [slideValue, setSlideValue] = useState(20);
  console.log(slideValue);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSlideValue(parseInt(event.target?.value));
  };
  return (
    <div className=" flex flex-col space-y-20">
      <Home />
      <div className="flex flex-col items-center gap-10">
        <input
          type="range"
          max={100}
          className="w-[70%]"
          value={slideValue}
          onInput={handleInput}
        />

        <div
          className={`flex items-center justify-center rounded-full bg-orange-400 
          ${slideValue > 50 ? "bg-rose-500" : ""}
          ${slideValue > 50 ? "text-white" : ""}
          ${slideValue > 95 ? "bg-lime-500" : ""}
          ${slideValue > 95 ? "text-white" : ""}

          `}
          style={{
            width: `${slideValue}px`,
            height: `${slideValue}px`,
          }}
        >
          Circle
        </div>
      </div>
    </div>
  );
}
