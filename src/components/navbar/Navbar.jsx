import icons from "../../assets/icons";
import Button from "../button/Button";
import SearchBar from "../searchBar/SearchBar";

const Navbar = (props) => {
  const seed = Math.floor(Math.random() * 1000);

  return (
    <div className="fixed top-0 left-0 w-screen h-16 flex items-center justify-between bg-white border-b-gray-300 border-b-[1px] px-4">
      <div className="flex items-center">
        <Button icon={icons.menu} />
        <a href="/" className="ml-2">
          <img src="/g5614.svg" className="h-6" />
        </a>
      </div>

      <div className="flex justify-end w-1/4">
        <SearchBar />
        <Button icon={icons.microphone} tooltip="Search with your voice" />
      </div>

      <div className="flex items-center">
        <Button icon={icons.newVideo} tooltip="Create" />
        <Button icon={icons.notification} tooltip="Notifications" />
        <img
          src={`https://api.dicebear.com/5.x/open-peeps/svg?seed=${seed}`}
          className="w-8 h-8 rounded-3xl ml-1 hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
