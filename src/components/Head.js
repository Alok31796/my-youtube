import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/store slice/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/contants";
import { cacheResults } from "../utils/store slice/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    // Api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    //  Make an api call after every key press
    //  but if the deffrence between 2 API calls is <200ms
    //  Decline the API call
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /*
  key - i
  1- render the componet
  2- useEffect();
  3- start timer => make api call after 200 ms

  key - ip
  4- destroy the comopnent(useEffect return method)  // last timer also clear
  6- re-render the componet
  7- useEffect();
  8- start timer => make api call after 200 ms

  no key press
  9- complete timer(200) -> make an api call
  */

  const getSearchSuggestions = async () => {
    // console.log("API Call " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestion(json[1]);

    //  uspdate cache
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

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
        <div>
          <input
            className=" px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100 hover:bg-white">
            🔍
          </button>
        </div>
        {showSuggestion && (
          <div className="fixed bg-white py-2 px-2 w-[35rem] rounded-lg border border-gray-100">
            <ul>
              {suggestion.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
