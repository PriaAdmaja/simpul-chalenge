import { ComponentPropsWithoutRef } from "react";
import chatIcon from "../assets/icons/icon-chat-white.svg";
import todoIcon from "../assets/icons/icon-todo-white.svg";

type OpenedTabProps = {
  icon: "chat" | "todo";
} & ComponentPropsWithoutRef<"button">;

const OpenedTabButton = ({ icon, ...rest }: OpenedTabProps) => {
  return (
    <section className="flex relative">
      <div className="w-[68px] h-[68px] rounded-full bg-bg-main-secondary absolute right-3 "></div>
      <button
        {...rest}
        className={`w-[68px] h-[68px] rounded-full flex justify-center items-center z-10 ${
          icon === "chat" ? "bg-chat-color" : "bg-todo-color"
        }`}
      >
        {icon === "chat" && (
          <img src={chatIcon} alt="chat" className="w-[27px]" />
        )}
        {icon === "todo" && (
          <img src={todoIcon} alt="todo" className="w-[27px]" />
        )}
      </button>
    </section>
  );
};

export default OpenedTabButton;
