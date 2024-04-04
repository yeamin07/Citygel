import { Link } from "react-router-dom";

const chatData = [
  {
    avatar: "",
    name: "Devid Heilo",
    text: "How are you?",
    time: 12,
    textCount: 3,
    color: "#10B981",
  },
  {
    avatar: "",
    name: "Henry Fisher",
    text: "Waiting for you!",
    time: 12,
    textCount: 0,
    color: "#DC3545",
  },
  {
    avatar: "UserFour",
    name: "Jhon Doe",
    text: "What's up?",
    time: 32,
    textCount: 0,
    color: "#10B981",
  },
  {
    avatar: "UserFive",
    name: "Jane Doe",
    text: "Great",
    time: 32,
    textCount: 2,
    color: "#FFBA00",
  },
  {
    avatar: "UserOne",
    name: "Jhon Doe",
    text: "How are you?",
    time: 32,
    textCount: 0,
    color: "#10B981",
  },
  {
    avatar: "UserThree",
    name: "Jhon Doe",
    text: "How are you?",
    time: 32,
    textCount: 3,
    color: "#FFBA00",
  },
];

const ChatCard = () => {
  return (
    <div className="bg-white shadow-default col-span-12 rounded-sm border border-stroke py-6 dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <h4 className="px-7.5 text-black dark:text-white mb-6 text-xl font-semibold">
        Chats
      </h4>

      <div>
        {chatData.map((chat, key) => (
          <Link
            to="/"
            className="px-7.5 flex items-center gap-5 py-3 hover:bg-gray-3 dark:hover:bg-meta-4"
            key={key}
          >
            <div className="relative h-14 w-14 rounded-full">
              <img src={chat.avatar} alt="User" />
              <span
                className="border-white absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2"
                style={{ backgroundColor: chat.color }}
              ></span>
            </div>

            <div className="flex flex-1 items-center justify-between">
              <div>
                <h5 className="text-black dark:text-white font-medium">
                  {chat.name}
                </h5>
                <p>
                  <span className="text-black dark:text-white text-sm">
                    {chat.text}
                  </span>
                  <span className="text-xs"> . {chat.time} min</span>
                </p>
              </div>
              {chat.textCount !== 0 && (
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                  <span className="text-white text-sm font-medium">
                    {" "}
                    {chat.textCount}
                  </span>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChatCard;
