import { useState } from "react";

import icons from "../../assets/icons";
import Button from "../button/Button";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");
  const [history, setHistory] = useState([]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleCrossButton = (event) => {
    event.preventDefault();
    setSearch("");
  };

  const handleSearchButton = (event) => {
    event.preventDefault();
    setHistory([search, ...history]);
  };

  const handleHistoryClick = (text) => {
    return (event) => {
      event.preventDefault();
      setSearch(text);
    };
  };

  return (
    <div className="flex items-center h-10 relative">
      <div className="flex flex-row-reverse items-center h-10 border-[1px] border-gray-300 rounded-l-3xl overflow-hidden focus-within:border-blue-500 peer">
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

      <ul className="absolute left-0 top-full py-2 bg-white rounded-2xl overflow-hidden drop-shadow-md invisible peer-focus-within:visible">
        {history.map((search) => (
          <li className="hover:bg-gray-200 py-1">
            <button
              className="flex items-center"
              onClick={handleHistoryClick(search)}
            >
              <div className="w-6 h-6 ml-4">{icons.history}</div>
              <div className="w-96 pl-4 text-lg font-semibold text-start">
                {search}
              </div>
            </button>
          </li>
        ))}
      </ul>

      <div className="flex justify-center relative h-full w-16">
        <button
          className="flex items-center justify-center h-full w-16 rounded-none rounded-r-3xl border-[1px] border-gray-300 border-l-0 bg-gray-50 hover:bg-gray-100 hover:border-gray-300 peer"
          onClick={handleSearchButton}
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
