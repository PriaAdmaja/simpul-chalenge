import { useState } from "react";
import flashIcon from "../assets/icons/Shape (Stroke).svg";
import chatIcon from "../assets/icons/icon-chat.svg";
import bookIcon from "../assets/icons/icon-book.svg";

const QuicksButton = () => {
  const [showButtonGroup, setShowButtonGroup] = useState<boolean>(false);
  return (
    <section className="absolute bottom-4 right-4">
      <div className="relative flex flex-row-reverse items-center">
        <button
          className="flex justify-center items-center bg-primary rounded-full h-[68px] w-[68px] z-10"
          onClick={() => setShowButtonGroup(!showButtonGroup)}
        >
          <img src={flashIcon} alt="quicks" className="h-8" />
        </button>
       
        <button
          className={`flex justify-center items-center bg-line-primary rounded-full h-[60px] w-[60px] absolute ease-out duration-300 ${
            !showButtonGroup ? " left-0" : "-left-[72px]"
          }`}
        >
          <img src={chatIcon} alt="chat" className="h-[27px]" />
        </button>
        <button
          className={`flex justify-center items-center bg-line-primary rounded-full h-[60px] w-[60px] absolute ease-out duration-300 ${
            !showButtonGroup ? " left-0" : "-left-[144px]"
          }`}
        >
          <img src={bookIcon} alt="chat" className="h-[27px]" />
        </button>
      </div>
    </section>
  );
};

export default QuicksButton;
