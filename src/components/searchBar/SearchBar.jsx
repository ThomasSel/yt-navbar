import { useState, useRef, useEffect } from "react";

import icons from "../../assets/icons";
import Button from "../button/Button";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");
  const [history, setHistory] = useState(new Set());
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus(), [history, search]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleCrossButton = (event) => {
    event.preventDefault();
    setSearch("");
  };

  const handleSearchButton = (event) => {
    if (search.trim().length === 0) {
      inputRef.current.focus();
      return;
    }
    event.preventDefault();
    setHistory(new Set(history).add(search));
  };

  const handleHistoryClick = (text) => {
    return (event) => {
      event.preventDefault();
      setSearch(text);
    };
  };

  const handleHistoryDelete = (text) => {
    return (event) => {
      event.preventDefault();
      const newHistory = new Set(history);
      newHistory.delete(text);
      setHistory(newHistory);
    };
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearchButton(event);
    }
  };

  const printHistory = () => {
    const matchingHistory = [...history]
      .reverse()
      .filter((prevSearch) => prevSearch.startsWith(search));

    if (matchingHistory.length !== 0) {
      return (
        <ul className="absolute left-0 top-full w-full py-2 bg-white rounded-2xl overflow-hidden drop-shadow-md invisible group-focus-within:visible">
          {matchingHistory.map((prevSearch) => (
            <li
              key={prevSearch}
              className="flex items-center hover:bg-gray-200 py-1 pr-[1px]"
            >
              <button
                className="flex flex-auto items-center w-full"
                onClick={handleHistoryClick(prevSearch)}
              >
                <div className="flex w-6 h-6 ml-4">{icons.history}</div>
                <div className="w-full pl-4 text-md font-semibold text-start">
                  {prevSearch}
                </div>
              </button>
              <button
                className="flex justify-center items-center flex-none h-6 w-10"
                onClick={handleHistoryDelete(prevSearch)}
              >
                <div className="w-5 h-5">{icons.delete}</div>
              </button>
            </li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div className="flex items-center h-10 group">
      <div className="relative">
        <div className="flex flex-row-reverse items-center h-10 border-[1px] border-gray-300 rounded-l-3xl overflow-hidden group-focus-within:border-blue-500">
          <div className="flex w-96 peer">
            <input
              type="text"
              placeholder="Search"
              className="flex-auto text-lg pl-4 outline-none w-max"
              value={search}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              ref={inputRef}
            ></input>
            {search ? (
              <div className="flex-none">
                <Button icon={icons.cross} handleClick={handleCrossButton} />
              </div>
            ) : null}
          </div>
          <div className="w-6 h-6 ml-4 hidden group-focus-within:block">
            {icons.magnifyingGlass}
          </div>
        </div>

        {printHistory()}
      </div>

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
