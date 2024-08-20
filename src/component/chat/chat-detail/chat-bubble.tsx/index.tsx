import dayjs from "dayjs";

type ChatBubbleType = {
  chatAlignment?: "left" | "right";
  name: string;
  description: string;
  dateTime: Date | string;
  variant: "primary" | "secondary" | "tertiary";
};

const ChatBubble = ({
  chatAlignment,
  name,
  variant,
  description,
  dateTime,
}: ChatBubbleType) => {
  return (
    <section className="mb-2">
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
        <button className="text-bg-main-secondary leading-[5px]">...</button>
      </section>
    </section>
  );
};

export default ChatBubble;
