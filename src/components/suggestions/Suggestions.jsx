import { useState, useEffect } from "react";
import icons from "../../assets/icons";

const Suggestions = (props) => {
  const matchingHistory = [...props.history]
    .reverse()
    .filter((prevSearch) => prevSearch.startsWith(props.search))
    .slice(0, props.search === "" ? 10 : 4);

  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    if (props.search.trim().length === 0) {
      setSuggestions([]);
      return;
    }

    const url = new URL("https://api.datamuse.com/sug?");
    const params = new URLSearchParams({
      s: props.search,
      max: 20,
    });
    fetch(url + params)
      .then((response) => response.json())
      .then((data) => {
        setSuggestions(data.map((suggestion) => suggestion.word));
      });
  }, [props.search]);

  const handleSuggestionClick = (text) => {
    return (event) => {
      event.preventDefault();
      props.setSearch(text);
    };
  };

  const handleHistoryDelete = (text) => {
    return (event) => {
      event.preventDefault();

      const newHistory = new Set(props.history);
      newHistory.delete(text);

      props.setHistory(newHistory);
    };
  };

  const render = matchingHistory.length !== 0 || suggestions.length !== 0;

  if (render) {
    return (
      <ul className="absolute left-0 top-full w-full py-2 bg-white rounded-2xl overflow-hidden drop-shadow-md invisible group-focus-within:visible">
        {matchingHistory.map((prevSearch) => (
          <li
            key={prevSearch}
            className="flex items-center hover:bg-gray-200 py-1 pr-[1px]"
          >
            <button
              className="flex flex-auto items-center w-full"
              onClick={handleSuggestionClick(prevSearch)}
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
        {suggestions.slice(0, 10 - matchingHistory.length).map((suggestion) => (
          <li
            key={suggestion}
            className="flex items-center hover:bg-gray-200 py-1 pr-[1px]"
          >
            <button
              className="flex flex-auto items-center w-full"
              onClick={handleSuggestionClick(suggestion)}
            >
              <div className="flex w-6 h-6 ml-4">{icons.magnifyingGlass}</div>
              <div className="w-full pl-4 text-md font-semibold text-start">
                {suggestion}
              </div>
            </button>
          </li>
        ))}
      </ul>
    );
  }
};

export default Suggestions;
