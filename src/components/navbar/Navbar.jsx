const Navbar = (props) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-16 flex items-center bg-white border-b-gray-300 border-b-[1px] px-4">
      <a className="w-10 h-10 flex items-center justify-center rounded-3xl hover:bg-gray-200 hover:cursor-pointer">
        <span className="material-symbols-outlined text-2xl text-neutral-600">
          menu
        </span>
      </a>
    </div>
  );
};

export default Navbar;
