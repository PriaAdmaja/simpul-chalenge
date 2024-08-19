import dayjs from "dayjs";
import { chatGroupList } from "../../data/chat/group-list";
import ChatGroup from "./chat-group";
import SearchBar from "./SearchBar";

const Chat = () => {
  return (
    <section className="flex flex-col h-full">
      <SearchBar />
      <section className="overflow-y-scroll flex-1">
        {chatGroupList
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
    </section>
  );
};

export default Chat;
