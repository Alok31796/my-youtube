const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-8 "
        alt="User_Icon"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdztTDcpZ2pFqwWDYwSXbvZq5nzJYg5cn8w&s"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
