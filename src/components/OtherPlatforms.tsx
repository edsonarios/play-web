import { useState } from "react";
import { Windows, Mac, Linux, Download } from "../icons/Platforms";
export function OtherPlatforms() {
  const [open, setOpen] = useState(true);
  return (
    <section className="body-font">
      <div className="container px-5 mt-4 mx-auto">
        <header className="flex items-center justify-center text-center">
          <button
            className="flex items-center sm:text-3xl font-medium title-font mb-4"
            onClick={() => setOpen(!open)}
          >
            <h2 className="text-white text-lg mr-4">Other Platforms</h2>
            <svg
              width="22"
              height="13"
              viewBox="0 0 22 13"
              fill="#eee"
              xmlns="http://www.w3.org/2000/svg"
              className={`inline-block h-4 w-4 transition-transform ${
                open ? "-rotate-180" : "rotate-0"
              }`}
            >
              <path
                d="M1 1L11 11L21 1"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
            </svg>
          </button>
        </header>

        {open && (
          <div>
            <div className="flex flex-col justify-center items-center mt-6 mb-10">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
              <h2 className="text-lg title-font font-medium mt-4 mb-3">
                Latest version: 1.4.1
              </h2>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <Windows />
                <div className="flex-grow mt-10">
                  <h2 className="text-lg title-font font-medium mb-3">
                    Windows
                  </h2>
                  <button className="mt-3 text-indigo-500 inline-flex items-center">
                    <h3 className="mr-4">64 Bit - Download</h3>
                    <Download />
                  </button>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <Mac />
                <div className="flex-grow mt-10">
                  <h2 className="text-lg title-font font-medium mb-3">Mac</h2>
                  <button className="mt-3 text-indigo-500 inline-flex items-center">
                    <h3 className="mr-4">Universal - Download</h3>
                    <Download />
                  </button>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <Linux />
                <div className="flex-grow mt-10">
                  <h2 className="text-lg title-font font-medium mb-3">Linux</h2>
                  <button className="mt-3 text-indigo-500 inline-flex items-center">
                    <h3 className="mr-4">64 Bit - Download</h3>
                    <Download />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
