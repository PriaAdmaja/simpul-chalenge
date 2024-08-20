import { useEffect, useState } from "react";
import iconArrowLeft from "../../../assets/icons/icon-arrow-left-dark.svg";
import iconClose from "../../../assets/icons/icon-close-dark.svg";
import { useChatStore } from "../../../store/chat";
import { useQuickShow } from "../../../store/quicksApp";
import Button from "../../Button";
import TypeBar from "./TypeBar";
import { chatList, ChatListType } from "../../../data/chat/chat-list";
import Loading from "../../Loading";
import dayjs from "dayjs";
import ChatBubble from "./chat-bubble.tsx";
import ScrollableFeed from "react-scrollable-feed";

const ChatDetail = () => {
  const chatGroupTitle = useChatStore((state) => state.chatGroup);
  const closeQuicks = useQuickShow((state) => state.clearSelected);
  const setShowButton = useQuickShow((state) => state.setShowButton);
  const clearChatGroup = useChatStore((state) => state.clearChatGroup);
  const [chatData, setChatData] = useState<ChatListType[]>([]);
  const [nameList, setNameList] = useState<string[]>([]);

  useEffect(() => {
    const data = [...chatList].sort(
      (a, b) => dayjs(a.date).valueOf() - dayjs(b.date).valueOf()
    );

    const name: string[] = [];
    for (let i = 0; i < data.length; i++) {
      if (!name.includes(data[i].name)) {
        name.push(data[i].name);
      }
    }
    setTimeout(() => {
      setNameList(name);
      setChatData(data);
    }, 1000);
  }, []);

  const deleteChat = (id: number) => {
    const temp = chatData.filter((d) => d.id !== id);
    setChatData(temp);
  };

  return (
    <section className="flex flex-col h-full">
      <header className="flex gap-4 items-center px-8 py-4">
        <img
          src={iconArrowLeft}
          alt="arrow"
          className="select-none w-4 h-4 cursor-pointer"
          onClick={clearChatGroup}
        />
        <section className="flex-1">
          <p className="text-primary text-base font-bold">{chatGroupTitle}</p>
          <p className="text-sm">3 participant</p>
        </section>
        <img
          src={iconClose}
          alt="close"
          className="select-none w-[14px] h-[14px] cursor-pointer"
          onClick={() => {
            closeQuicks();
            setShowButton(false);
            clearChatGroup();
          }}
        />
      </header>
      <div className="w-full h-[1px] bg-[#bdbdbd]" />
      <section className="ml-8 mr-3 mb-1 flex-1 flex flex-col overflow-y-scroll">
        {chatData.length > 0 ? (
          <ScrollableFeed className="pr-1">
            {chatData.map((datum, idx) => {
              return (
                <ChatBubble
                  key={idx}
                  dateTime={datum.date}
                  description={datum.description}
                  name={datum.name}
                  chatAlignment={
                    datum.name.toLowerCase() === "you" ? "right" : "left"
                  }
                  dataId={datum.id}
                  deleteChat={deleteChat}
                  variant={
                    nameList.indexOf(datum.name) % 3 === 0
                      ? "primary"
                      : nameList.indexOf(datum.name) % 2 === 0
                      ? "secondary"
                      : "tertiary"
                  }
                />
              );
            })}
          </ScrollableFeed>
        ) : (
          <Loading />
        )}
      </section>

      <div className="flex gap-3 px-8 pb-4">
        <TypeBar />
        <Button>Send</Button>
      </div>
    </section>
  );
};

export default ChatDetail;
