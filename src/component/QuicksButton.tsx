import { useState } from "react";
import flashIcon from "../assets/icons/Shape (Stroke).svg";
import chatIcon from "../assets/icons/icon-chat.svg";
import bookIcon from "../assets/icons/icon-book.svg";
import OpenedTabButton from "./OpenedTabButton";
import Chat from "./chat";

const QuicksButton = () => {
  const [showButtonGroup, setShowButtonGroup] = useState<boolean>(false);
  const [selectedMenu, setSelectedMenu] = useState<"chat" | "todo" | null>(
    null
  );

  const closeTab = () => {
    setShowButtonGroup(false);
    setSelectedMenu(null);
  };
  return (
    <>
      <section className="absolute bottom-4 right-4 flex flex-col-reverse gap-4 items-end">
        <div className="relative flex flex-row-reverse items-center">
          <button
            className={`flex justify-center items-center hover:scale-105 bg-line-primary rounded-full h-[60px] w-[60px] absolute ease-out duration-300 ${
              selectedMenu === "chat"
                ? "left-2"
                : selectedMenu === "todo"
                ? "-left-[84px]"
                : showButtonGroup
                ? "-left-[72px]"
                : "left-2"
            }`}
            onClick={() => setSelectedMenu("chat")}
          >
            <img src={chatIcon} alt="chat" className="h-[27px]" />
          </button>
          <button
            className={`flex justify-center items-center hover:scale-105 bg-line-primary rounded-full h-[60px] w-[60px] absolute ease-out duration-300 ${
              selectedMenu === "todo"
                ? "left-2"
                : selectedMenu === "chat"
                ? "-left-[84px]"
                : showButtonGroup
                ? "-left-[144px]"
                : "left-2"
            }`}
            onClick={() => setSelectedMenu("todo")}
          >
            <img src={bookIcon} alt="todo" className="h-[27px]" />
          </button>
          {selectedMenu === null && (
            <button
              className="flex justify-center items-center bg-primary rounded-full hover:scale-105 h-[68px] w-[68px] z-10"
              onClick={() => setShowButtonGroup(!showButtonGroup)}
            >
              <img src={flashIcon} alt="quicks" className="h-8" />
            </button>
          )}
          {selectedMenu === "chat" && (
            <OpenedTabButton icon="chat" onClose={closeTab} />
          )}
          {selectedMenu === "todo" && (
            <OpenedTabButton icon="todo" onClose={closeTab} />
          )}
        </div>

        <main
          className={` bg-white rounded-md max-h-[80vh] ease-out duration-200 ${
            selectedMenu === null ? "w-0 h-0" : "w-[734px] h-[737px] px-8 py-6"
          }`}
        >
          {selectedMenu === "chat" && <Chat />}
        </main>
      </section>
    </>
  );
};

export default QuicksButton;
