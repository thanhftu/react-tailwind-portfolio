import React from "react";

export default function BorderAnimation() {
  const edge = "20px";
  return (
    <div className="text-white bg-black w-full h-full flex flex-col items-center justify-center gap-32 p-7 ">
      <div
        className="relative overflow-hidden bg-slate-200 w-[350px] h-[500px] rounded-3xl flex flex-col items-center justify-center
        before:content-[' '] before:bg-gradient-to-b before:from-cyan-500 before:to-pink-500 before:w-[60%] before:h-[700px] before:absolute before:animate-spin-slow
       
      "
      >
        <p className="text-[5rem] uppercase flex flex-col item justify-center font-[800] absolute bg-black h-[calc(100%-30px)] w-[calc(100%-30px)] rounded-2xl">
          amac
        </p>
      </div>
      <div className="w-full min-h-[700px] flex flex-col items-center justify-center">
        <div className="tct-grow">
          <div className="tct-block">CSS</div>
        </div>
      </div>
    </div>
  );
}
