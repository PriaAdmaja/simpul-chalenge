import dayjs from "dayjs";
import { ChatGroupType, chatGroupList } from "../../data/chat/group-list";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import ChatGroup from "./chat-group";
import Loading from "../Loading";

const Chat = () => {
  const [chatData, setChatData] = useState<ChatGroupType[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setChatData(chatGroupList);
    }, 4000);
  }, []);

  return (
    <section className="flex flex-col h-full overflow-hidden">
      <SearchBar />
      {chatData.length > 0 ? (
        <section className="overflow-y-scroll flex-1">
          {chatData
            .sort((a, b) => dayjs(b.date).valueOf() - dayjs(a.date).valueOf())
            .map((list, idx) => {
              return (
                <section
                  className={`py-[22px] ${
                    idx !== chatGroupList.length - 1
                      ? "border-b border-b-solid border-b-border-dark"
                      : ""
                  }`}
                >
                  <ChatGroup
                    key={idx}
                    date={list.date}
                    description={list.description}
                    name={list.name}
                    title={list.title.toUpperCase()}
                  />
                </section>
              );
            })}
        </section>
      ) : (
        <Loading text="Loading Chats..." />
      )}
    </section>
  );
};

export default Chat;
