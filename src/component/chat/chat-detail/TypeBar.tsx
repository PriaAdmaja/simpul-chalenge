import { ChangeEvent } from "react";
import { ReplyType } from "../../../data/chat/chat-list";
import iconClose from "../../../assets/icons/icon-close-dark.svg";

const TypeBar = ({
  onChange,
  value,
  replyData,
  clearReply,
}: {
  onChange: (text: string) => void;
  value: string;
  replyData?: ReplyType;
  clearReply: () => void;
}) => {
  return (
    <section className=" w-full border-solid border border-border-dark rounded-md overflow-hidden">
      {replyData && (
        <div className="border-b border-b-solid border-b-border-dark py-3 px-5 bg-line-primary">
          <div className="flex items-start justify-between">
            <p className="text-bg-main-secondary font-semibold">Replying to {replyData.name}</p>
            <div className="w-3 h-3">
              <img
                src={iconClose}
                alt="close"
                className="w-full h-full cursor-pointer"
                onClick={clearReply}
              />
            </div>
          </div>
          <p className="text-bg-main-secondary text-sm">{replyData.description}</p>
        </div>
      )}
      <div className="flex items-center px-5 h-10">
        <input
          placeholder="Type a new message"
          className="flex-1 outline-none placeholder:text-placeholder-color"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.value);
          }}
          value={value}
        />
      </div>
    </section>
  );
};

export default TypeBar;
