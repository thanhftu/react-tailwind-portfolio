import { useState } from "react";

export default function Calculator() {
  const [screenValue, setScreenValue] = useState("");
  console.log(screenValue);

  const clickHandler = (val: string) => {
    setScreenValue((pre) => pre + val);
  };
  const onClear = () => {
    setScreenValue("");
  };
  const onDelete = () => {
    setScreenValue(screenValue.slice(0, -1));
  };
  const onCaculate = () => {
    const result = eval(screenValue);
    setScreenValue(result);
  };
  return (
    <div className="h-full w-full min-h-[100vh] bg-slate-100">
      <div className="w-full h-[100vh] mx-auto flex items-center justify-center">
        <div className="bg-white p-[15px] rounded-2xl shadow-inner grid grid-cols-[68px_68px_68px_68px]">
          <input
            type="text"
            placeholder="0"
            value={screenValue}
            readOnly
            className="col-span-4 h-[70px] w-[260px] bg-slate-50 shadow-inner rounded-2xl text-emerald-900 font-bold text-4xl text-right p-4 mt-2 mb-5 mx-auto"
          />
          <button
            onClick={onClear}
            className="h-[48px] w-[48px] bg-[#ecf0f3] rounded-full tct-button-shadow m-[8px] text-lg"
          >
            CL
          </button>
          <button
            onClick={onDelete}
            className="h-[48px] w-[48px] bg-[#ecf0f3] rounded-full tct-button-shadow m-[8px] text-lg"
          >
            DEL
          </button>
          <button
            onClick={() => clickHandler("%")}
            className="h-[48px] w-[48px] bg-[#ecf0f3] rounded-full tct-button-shadow m-[8px] text-lg"
          >
            %
          </button>
          <button
            onClick={() => clickHandler("/")}
            className="h-[48px] w-[48px] bg-[#ecf0f3] rounded-full tct-button-shadow m-[8px] text-lg"
          >
            /
          </button>
          <button
            onClick={() => clickHandler("7")}
            className="h-[48px] w-[48px] bg-[#ecf0f3] rounded-full tct-button-shadow m-[8px] text-lg"
          >
            7
          </button>
          <button
            onClick={() => clickHandler("8")}
            className="h-[48px] w-[48px] bg-[#ecf0f3] rounded-full tct-button-shadow m-[8px] text-lg"
          >
            8
          </button>
          <button className="h-[48px] w-[48px] bg-[#ecf0f3] rounded-full tct-button-shadow m-[8px] text-lg">
            9
          </button>
          <button
            onClick={() => clickHandler("*")}
            className="h-[48px] w-[48px] bg-[#ecf0f3] rounded-full tct-button-shadow m-[8px] text-lg"
          >
            *
          </button>
          <button
            onClick={() => clickHandler("4")}
            className="h-[48px] w-[48px] bg-[#ecf0f3] rounded-full tct-button-shadow m-[8px] text-lg"
          >
            4
          </button>
          <button
            onClick={() => clickHandler("5")}
            className="h-[48px] w-[48px] bg-[#ecf0f3] rounded-full tct-button-shadow m-[8px] text-lg"
          >
            5
          </button>
          <button
            onClick={() => clickHandler("6")}
            className="h-[48px] w-[48px] bg-[#ecf0f3] rounded-full tct-button-shadow m-[8px] text-lg"
          >
            6
          </button>
          <button
            onClick={() => clickHandler("-")}
            className="h-[48px] w-[48px] bg-[#ecf0f3] rounded-full tct-button-shadow m-[8px] text-lg"
          >
            -
          </button>
          <button
            onClick={() => clickHandler("1")}
            className="h-[48px] w-[48px] bg-[#ecf0f3] rounded-full tct-button-shadow m-[8px] text-lg"
          >
            1
          </button>
          <button
            onClick={() => clickHandler("2")}
            className="h-[48px] w-[48px] bg-[#ecf0f3] rounded-full tct-button-shadow m-[8px] text-lg"
          >
            2
          </button>
          <button
            onClick={() => clickHandler("3")}
            className="h-[48px] w-[48px] bg-[#ecf0f3] rounded-full tct-button-shadow m-[8px] text-lg"
          >
            3
          </button>
          <button
            onClick={() => clickHandler("+")}
            className="h-[48px] w-[48px] bg-[#ecf0f3] rounded-full tct-button-shadow m-[8px] text-lg"
          >
            +
          </button>
          <button
            onClick={() => clickHandler(".")}
            className="h-[48px] w-[48px] bg-[#ecf0f3] rounded-full tct-button-shadow m-[8px] text-lg"
          >
            .
          </button>
          <button
            onClick={() => clickHandler("0")}
            className="h-[48px] w-[48px] bg-[#ecf0f3] rounded-full tct-button-shadow m-[8px] text-lg"
          >
            0
          </button>
          <button
            onClick={onCaculate}
            className="h-[48px] w-[115px] bg-[#ecf0f3] rounded-full tct-button-shadow m-[8px] text-lg  "
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
