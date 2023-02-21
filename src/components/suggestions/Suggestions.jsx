import icons from "../../assets/icons";

const Suggestions = (props) => {
  const matchingHistory = [...props.history]
    .reverse()
    .filter((prevSearch) => prevSearch.startsWith(props.search));

  const handleHistoryClick = (text) => {
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

  const render = matchingHistory.length !== 0;

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

export default Suggestions;
