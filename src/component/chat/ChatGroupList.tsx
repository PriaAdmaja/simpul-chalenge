import dayjs from "dayjs";
import { ChatGroupType, chatGroupList } from "../../data/chat/group-list";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import ChatGroup from "./chat-group";
import Loading from "../Loading";
import { useChatStore } from "../../store/chat";

const ChatGroupList = () => {
  const [chatData, setChatData] = useState<ChatGroupType[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setChatData(chatGroupList);
    }, 1000);
  }, []);

  const selectGroup = useChatStore((state) => state.setChatGroup);

  return (
    <section className="flex flex-col h-full px-8 py-6">
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
                    selectChatGroup={(d) => selectGroup(d)}
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

export default ChatGroupList;
