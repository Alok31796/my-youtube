import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/store slice/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandlar = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandlar}
          className="h-8 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/thumbnails/019/858/703/small/menu-flat-color-outline-icon-free-png.png"
          alt="Menu_Image"
        />
        <img
          className="h-8 mx-2"
          alt="Logo_Image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
        />
      </div>
      <div className="col-span-10 px-3">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div>
        <img
          className="h-8 col-span-1"
          alt="User_Icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdztTDcpZ2pFqwWDYwSXbvZq5nzJYg5cn8w&s"
        />
      </div>
    </div>
  );
};

export default Head;
