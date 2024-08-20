import dayjs from "dayjs";

const ChatDateSeparator = ({ date }: { date: string | Date }) => {
  return (
    <div className="flex items-center justify-center gap-5 mt-7 mb-2">
      <div
        className={`h-[1px] flex-1  ${
          dayjs().valueOf() < dayjs(date).add(4, "second").valueOf()
            ? "bg-[#eb5757]"
            : "bg-bg-main-secondary"
        }`}
      />
      <p
        className={`${
          dayjs().valueOf() < dayjs(date).add(4, "second").valueOf()
            ? "text-[#eb5757]"
            : "text-bg-main-secondary"
        }`}
      >
        {dayjs().valueOf() < dayjs(date).add(4, "second").valueOf()
          ? "New Message"
          : dayjs(date).format("MMMM DD, YYYY")}
      </p>
      <div
        className={`h-[1px] flex-1  ${
          dayjs().valueOf() < dayjs(date).add(4, "second").valueOf()
            ? "bg-[#eb5757]"
            : "bg-bg-main-secondary"
        }`}
      />
    </div>
  );
};

export default ChatDateSeparator;
