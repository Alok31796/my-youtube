import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/store slice/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      // API Polling
      // console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(25) + "❤️‍🔥",
        })
      );
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="h-[500px] ml-2 p-2 border border-black bg-gray-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessage.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("On Submit", liveMessage);
          dispatch(
            addMessage({
              name: "Alok Pandey",
              message: liveMessage,
            })
          );
        }}
        className="w-full p-2 ml-2 border bg-gray-100"
      >
        <input
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          type="text"
          className="border border-black w-80 px-2 "
        />
        <button className="bg-green-500 text-white px-2 mx-1 rounded-lg">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
