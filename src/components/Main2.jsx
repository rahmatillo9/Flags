import React, { useState } from "react";
import CountryList from "./counters";

const Main2 = () => {
  const [element, setElement] = useState("/all"); 
  const regions = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];

  function handleChange(e) {
    const region = e.target.value;
    setElement(region === "All" ? "/all" : `/region/${region}`);
  }

  return (
    <main className="w-full bg-[#202C36] py-4 px-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">

        {/* Search Input */}
        <div className="w-full md:w-[480px] flex items-center bg-white rounded-lg shadow-md p-2">
          <input
            type="text"
            className="flex-grow px-2 text-black outline-none"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-5 w-5 text-gray-500"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>


        <div className="w-full md:w-auto">
          <label htmlFor="region" className="text-white mr-2">
            Filter by Region:
          </label>
          <select
            onChange={handleChange}
            className="select select-bordered w-full max-w-xs bg-white text-black"
            defaultValue=""
          >
            <option disabled value="">
              Filter by Region
            </option>
            {regions.map((region) => (
              <option value={region} key={region}>
                {region}
              </option>
            ))}
          </select>
        </div>
      </div>


      <div>
        <CountryList element={element} />
      </div>
    </main>
  );
};

export default Main2;
