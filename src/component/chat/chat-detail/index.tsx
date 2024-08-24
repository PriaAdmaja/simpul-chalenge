import { useEffect, useRef, useState } from "react";
import iconArrowLeft from "../../../assets/icons/icon-arrow-left-dark.svg";
import iconClose from "../../../assets/icons/icon-close-dark.svg";
import { useChatStore } from "../../../store/chat";
import { useQuickShow } from "../../../store/quicksApp";
import Button from "../../Button";
import TypeBar from "./TypeBar";
import {
  chatList,
  ChatListType,
  ReplyType,
} from "../../../data/chat/chat-list";
import Loading from "../../Loading";
import dayjs from "dayjs";
import ChatBubble from "./chat-bubble.tsx";
import ScrollableFeed from "react-scrollable-feed";
import ChatDateSeparator from "./ChatDateSeparator.tsx";
import NoConnection from "./NoConnection.tsx";

const ChatDetail = () => {
  const chatGroupTitle = useChatStore((state) => state.chatGroup);
  const closeQuicks = useQuickShow((state) => state.clearSelected);
  const setShowButton = useQuickShow((state) => state.setShowButton);
  const clearChatGroup = useChatStore((state) => state.clearChatGroup);
  const [chatData, setChatData] = useState<ChatListType[]>([]);
  const [nameList, setNameList] = useState<string[]>([]);
  const [haveNewMessage, setHaveNewMessage] = useState<boolean>(false);
  const [noInternet, setNoInternet] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [reply, setReply] = useState<ReplyType | undefined>(undefined);

  const scrollableRef = useRef<ScrollableFeed | null>(null);

  const scrollToBottom = () => {
    scrollableRef.current?.scrollToBottom();
  };

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
    const timeout = setTimeout(() => {
      setNameList(name);
      setChatData(data);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setChatData((temp) =>
        temp.concat([
          {
            id: 7,
            date: dayjs().format(),
            name: "Daniel",
            seen: false,
            description: "dolore placeat quibusdam ea quo ",
          },
        ])
      );
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNoInternet(true);
    }, 7000);
    return () => clearTimeout(timeout);
  }, []);

  const deleteChat = (id: number) => {
    const temp = chatData.filter((d) => d.id !== id);
    setChatData(temp);
  };

  useEffect(() => {
    if (chatData.find((d) => d.seen === false) !== undefined) {
      setHaveNewMessage(true);
    }
  }, [chatData]);

  let lastDate = "";

  const showNewMessage = () => {
    setChatData((prev) => prev.map((d) => ({ ...d, seen: true })));
    setHaveNewMessage(false);
    scrollToBottom();
  };

  const sendMessage = () => {
    setChatData((prev) =>
      prev
        .map((d) => ({ ...d, seen: true }))
        .concat([
          {
            date: dayjs().format(),
            description: inputValue,
            id: 20,
            name: "You",
            seen: true,
            reply: reply,
          },
        ])
    );
    setInputValue("");
    scrollToBottom();
    setHaveNewMessage(false);
  };

  const clearReply = () => {
    setReply(undefined);
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
      <section className="ml-8 mr-3 mb-1 flex-1 flex flex-col overflow-y-scroll relative">
        {chatData.length > 0 ? (
          <ScrollableFeed ref={scrollableRef} className="pr-1">
            {chatData
              .filter((d) => d.seen === true)
              .map((datum, idx) => {
                const temp = lastDate;
                lastDate = dayjs(datum.date).format("DD-MM-YYYY");
                return (
                  <section key={idx}>
                    {temp !== lastDate &&
                      datum.name.toLowerCase() !== "you" && (
                        <ChatDateSeparator date={datum.date} />
                      )}
                    <ChatBubble
                      dateTime={datum.date}
                      description={datum.description}
                      name={datum.name}
                      chatAlignment={
                        datum.name.toLowerCase() === "you" ? "right" : "left"
                      }
                      dataId={datum.id}
                      dataReply={datum.reply}
                      setReply={setReply}
                      deleteChat={deleteChat}
                      variant={
                        nameList.indexOf(datum.name) % 3 === 0
                          ? "primary"
                          : nameList.indexOf(datum.name) % 2 === 0
                          ? "secondary"
                          : "tertiary"
                      }
                    />
                  </section>
                );
              })}
          </ScrollableFeed>
        ) : (
          <Loading />
        )}
        {haveNewMessage && (
          <button
            className="absolute left-[50%] -translate-x-[50%] bottom-0 text-primary bg-[#e9f3ff] py-1 px-3"
            onClick={showNewMessage}
          >
            New Message
          </button>
        )}
      </section>
      {noInternet && <NoConnection />}
      <div className="flex gap-3 px-8 pb-4 items-end">
        <TypeBar
          onChange={(d) => setInputValue(d)}
          value={inputValue}
          replyData={reply}
          clearReply={clearReply}
        />
        <div className="p-[1px]">
          <Button type="button" onClick={sendMessage}>
            Send
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChatDetail;
