import dayjs from "dayjs";
import { ComponentPropsWithRef, useState } from "react";
import iconThreeDot from "../../../../assets/icons/icon-triple-dot.svg";
import { ReplyType } from "../../../../data/chat/chat-list";

type ChatBubbleType = {
  chatAlignment?: "left" | "right";
  name: string;
  deleteChat: (id: number) => void;
  description: string;
  dateTime: Date | string;
  dataId: number;
  dataReply?: ReplyType;
  setReply: ({ id, name, description }: ReplyType) => void;
  variant: "primary" | "secondary" | "tertiary";
} & ComponentPropsWithRef<"section">;

const ChatBubble = ({
  chatAlignment,
  name,
  variant,
  description,
  dateTime,
  deleteChat,
  dataId,
  setReply,
  dataReply,
  ...rest
}: ChatBubbleType) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const deletingData = () => {
    setShowOptions(false);
    setTimeout(() => {
      deleteChat(dataId);
    }, 500);
  };
  return (
    <section className="mb-2" {...rest}>
      <p
        className={`${chatAlignment === "right" ? "text-right" : "text-left"} ${
          variant === "primary"
            ? "text-chat-bubble-first-primary"
            : variant === "secondary"
            ? "text-chat-bubble-second-primary"
            : "text-chat-bubble-third-primary"
        } font-bold text-sm mb-1`}
      >
        {name}
      </p>
      {dataReply && (
        <div
          className={`bg-line-primary p-2 rounded-md border border-solid border-[#e0e0e0] ${
            chatAlignment === "right" ? "flex-row-reverse ml-auto" : "flex-row"
          } mb-1 w-fit max-w-[70%]`}
        >
          <p className="text-sm text-bg-main-secondary">{dataReply.description}</p>
        </div>
      )}
      <section
        className={`flex ${
          chatAlignment === "right" ? "flex-row-reverse ml-auto" : "flex-row"
        } w-fit max-w-[70%] gap-2 items-start`}
      >
        <div
          className={`${
            variant === "primary"
              ? "bg-chat-bubble-first-secondary"
              : variant === "secondary"
              ? "bg-chat-bubble-second-secondary"
              : "bg-chat-bubble-third-secondary"
          } p-2 rounded-md`}
        >
          <p className="text-bg-main-secondary text-sm mb-2">{description}</p>
          <p className="text-bg-main-secondary text-xs">
            {dayjs(dateTime).format("hh:mm")}
          </p>
        </div>
        <div className="relative">
          <div className="w-4 cursor-pointer">
            <img
              src={iconThreeDot}
              alt="option"
              className="text-bg-main-secondary w-full"
              onClick={() => setShowOptions(!showOptions)}
            />
          </div>
          {showOptions && (
            <div
              className={`border-border-secondary overflow-hidden border border-solid rounded-md w-32 bg-white absolute ${
                chatAlignment === "right" ? "right-0" : "left-0"
              }`}
            >
              {name.toLowerCase() === "you" ? (
                <>
                  <button className="px-4 py-2 text-[#2f80ed] hover:bg-slate-100 w-full text-start">
                    Edit
                  </button>
                  <div className="w-full h-[1px] bg-border-secondary" />
                  <button
                    className="px-4 py-2 text-[#eb5757] hover:bg-slate-100 w-full text-start"
                    onClick={deletingData}
                  >
                    Delete
                  </button>
                </>
              ) : (
                <>
                  <button className="px-4 py-2 text-[#2f80ed] hover:bg-slate-100 w-full text-start">
                    Share
                  </button>
                  <div className="w-full h-[1px] bg-border-secondary" />
                  <button
                    className="px-4 py-2 text-[#2f80ed] hover:bg-slate-100 w-full text-start"
                    onClick={() => {
                      setReply({
                        id: dataId,
                        name: name,
                        description: description,
                      });
                      setShowOptions(false);
                    }}
                  >
                    Reply
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </section>
    </section>
  );
};

export default ChatBubble;
