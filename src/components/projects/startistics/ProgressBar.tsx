import React, { useRef, useState } from "react";
import Home from "../../Home";

function ProgressBar() {
  const [width1, setWidth1] = useState("50");
  const [volume, setVolume] = useState("50");
  const widthRef = useRef<React.RefObject<HTMLInputElement>>(null);
  const volumeRef = useRef<React.RefObject<HTMLInputElement>>(null);
  const onChangeHandler = () => {
    setWidth1(widthRef.current?.value);
  };

  const handleVolumeChange = () => {
    setVolume(volumeRef.current?.value);
  };

  return (
    <div className=" w-full h-full flex flex-col gap-10 ml-5">
      <Home />
      <div className=" h-full w-full flex flex-col gap-10 items-start justify-start">
        <div className="w-[90%] flex flex-col items-start gap-2 border p-3 rounded-md">
          <p>example 1</p>
          <div className="flex flex-row gap-2 items-center">
            <div>Enter with</div>
            <input
              type="number"
              className="w-[70px] bg-slate-100 rounded"
              ref={widthRef}
              onChange={onChangeHandler}
            />
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ">
            <div
              className="bg-green-500 rounded-full h-2.5"
              style={{ width: width1?.toString() + "%" }}
            ></div>
          </div>
        </div>

        <div className="w-[90%] flex flex-col items-start gap-2 border p-3 rounded-md">
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div
              className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
              style={{ width: "45%" }}
            >
              {" "}
              45%
            </div>
          </div>
        </div>
        <div className="w-[90%] flex flex-col items-start gap-2 border p-3 rounded-md">
          <div className="relative pt-1 w-full">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-fuchsia-600 bg-fuchsia-200">
                  Task in progress
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-fuchsia-600">
                  30%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-fuchsia-200">
              <div
                style={{ width: "30%" }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-fuchsia-500"
              ></div>
            </div>
          </div>
        </div>

        <div className="w-[90%] flex flex-col items-start gap-2 border p-3 rounded-md">
          <div className="flex justify-between mb-1 w-full">
            <span className="text-base font-medium text-blue-700 dark:text-white">
              Flowbite
            </span>
            <span className="text-sm font-medium text-blue-700 dark:text-white">
              45%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: "45%" }}
            ></div>
          </div>
        </div>

        <div className="w-[90%] flex flex-col items-start gap-2 border p-3 rounded-md">
          <div className="mb-1 text-base font-medium dark:text-white">Dark</div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-gray-600 h-2.5 rounded-full dark:bg-gray-300"
              style={{ width: "45%" }}
            ></div>
          </div>
          <div className="mb-1 text-base font-medium text-blue-700 dark:text-blue-500">
            Blue
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: "45%" }}
            ></div>
          </div>
          <div className="mb-1 text-base font-medium text-red-700 dark:text-red-500">
            Red
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-red-600 h-2.5 rounded-full dark:bg-red-500"
              style={{ width: "45%" }}
            ></div>
          </div>
          <div className="mb-1 text-base font-medium text-green-700 dark:text-green-500">
            Green
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-green-600 h-2.5 rounded-full dark:bg-green-500"
              style={{ width: "45%" }}
            ></div>
          </div>
          <div className="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">
            Yellow
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-yellow-400 h-2.5 rounded-full"
              style={{ width: "45%" }}
            ></div>
          </div>
          <div className="mb-1 text-base font-medium text-indigo-700 dark:text-indigo-500">
            Indigo
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-indigo-600 h-2.5 rounded-full dark:bg-indigo-500"
              style={{ width: "45%" }}
            ></div>
          </div>
          <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">
            Purple
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500"
              style={{ width: "45%" }}
            ></div>
          </div>
        </div>

        <div className="w-[90%] flex flex-col items-start gap-2 border p-3 rounded-md">
          <div className="mb-1 text-base font-medium dark:text-white">
            Small
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
              style={{ width: "45%" }}
            ></div>
          </div>
          <div className="mb-1 text-base font-medium dark:text-white">
            Default
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
              style={{ width: "45%" }}
            ></div>
          </div>
          <div className="mb-1 text-lg font-medium dark:text-white">Large</div>
          <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
            <div
              className="h-4 bg-blue-600 rounded-full dark:bg-blue-500"
              style={{ width: "45%" }}
            ></div>
          </div>
          <div className="mb-1 text-lg font-medium dark:text-white">
            Extra Large
          </div>
          <div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
            <div
              className="h-6 bg-blue-600 rounded-full dark:bg-blue-500"
              style={{ width: "45%" }}
            ></div>
          </div>
        </div>

        <div className="w-[90%] flex flex-col items-start gap-2 border p-3 rounded-md">
          <p className="text-lg font-semibold mb-7">Range</p>
          <div className="flex flex-col w-full items-start">
            <div>
              <label htmlFor="volume">Volume</label>
              <input
                type="number"
                className="w-[70px] bg-slate-100 rounded"
                ref={volumeRef}
                onChange={handleVolumeChange}
              />
            </div>
            <input
              type="range"
              id="volume"
              name="volume"
              min="0"
              max="100"
              className="w-full"
              value={volume}
            />
          </div>

          <div className="flex flex-col w-full items-start">
            <label htmlFor="cowbell">Cowbell</label>
            <input
              type="range"
              id="cowbell"
              name="cowbell"
              min="0"
              max="100"
              step="10"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
