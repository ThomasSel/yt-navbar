import { useState } from "react";

import icons from "../../assets/icons";
import Button from "../button/Button";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleCrossButton = (event) => {
    event.preventDefault();
    setSearch("");
  };

  return (
    <div className="flex items-center h-10">
      <div className="flex flex-row-reverse items-center h-10 border-[1px] border-gray-300 rounded-l-3xl overflow-hidden focus-within:border-blue-500">
        <div className="flex w-96 peer">
          <input
            type="text"
            placeholder="Search"
            className="flex-auto text-lg pl-4 outline-none w-max"
            value={search}
            onChange={handleChange}
          ></input>
          {search ? (
            <div className="flex-none">
              <Button icon={icons.cross} handleClick={handleCrossButton} />
            </div>
          ) : null}
        </div>
        <div className="w-6 h-6 ml-4 hidden peer-focus-within:block">
          {icons.magnifyingGlass}
        </div>
      </div>
      <div className="flex justify-center relative h-full w-16">
        <button
          className="flex items-center justify-center h-full w-16 rounded-none rounded-r-3xl border-[1px] border-gray-300 border-l-0 bg-gray-50 hover:bg-gray-100
              hover:border-gray-300 peer"
        >
          <div className="w-6 h-6">{icons.magnifyingGlass}</div>
        </button>
        <div className="button-tooltip invisible peer-hover:visible mr-1">
          Search
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
