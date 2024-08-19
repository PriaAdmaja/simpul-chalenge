import { useState } from "react";
import flashIcon from "../assets/icons/Shape (Stroke).svg";
import chatIcon from "../assets/icons/icon-chat.svg";
import bookIcon from "../assets/icons/icon-book.svg";
import OpenedTabButton from "./OpenedTabButton";

const QuicksButton = () => {
  const [showButtonGroup, setShowButtonGroup] = useState<boolean>(false);
  const [selectedMenu, setSelectedMenu] = useState<"chat" | "todo" | null>(
    null
  );
  return (
    <section className="absolute bottom-4 right-4">
      <div className="relative flex flex-row-reverse items-center">
        <button
          className={`flex justify-center items-center bg-line-primary rounded-full h-[60px] w-[60px] absolute ease-out duration-300 ${
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
          className={`flex justify-center items-center bg-line-primary rounded-full h-[60px] w-[60px] absolute ease-out duration-300 ${
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
            className="flex justify-center items-center bg-primary rounded-full h-[68px] w-[68px] z-10"
            onClick={() => setShowButtonGroup(!showButtonGroup)}
          >
            <img src={flashIcon} alt="quicks" className="h-8" />
          </button>
        )}
        {selectedMenu === "chat" && <OpenedTabButton icon="chat" />}
        {selectedMenu === "todo" && <OpenedTabButton icon="todo" />}
      </div>
    </section>
  );
};

export default QuicksButton;
