import { useState } from "react";

import icons from "../../assets/icons";
import Button from "../button/Button";

const Navbar = (props) => {
  const seed = Math.floor(Math.random() * 1000);
  console.log(icons);

  return (
    <div className="fixed top-0 left-0 w-screen h-16 flex items-center justify-between bg-white border-b-gray-300 border-b-[1px] px-4">
      <div className="flex items-center">
        <Button icon={icons.menu} />
        <a href="/" className="ml-2">
          <img src="/g5614.svg" className="h-6" />
        </a>
      </div>

      <div className="flex">
        <SearchBar />
        <Button icon={icons.microphone} />
      </div>

      <div className="flex items-center">
        <Button icon={icons.newVideo} />
        <Button icon={icons.notification} />
        <img
          src={`https://api.dicebear.com/5.x/open-peeps/svg?seed=${seed}`}
          className="w-8 h-8 rounded-3xl ml-1 hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

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
      <button
        className="flex items-center justify-center h-full w-16 rounded-none rounded-r-3xl border-[1px] border-gray-300 border-l-0 bg-gray-50 hover:bg-gray-100
            hover:border-gray-300"
      >
        <div className="w-6 h-6">{icons.magnifyingGlass}</div>
      </button>
    </div>
  );
};

export default Navbar;
