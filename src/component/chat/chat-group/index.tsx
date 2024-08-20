import dayjs from "dayjs";
import IconChatGroup from "./Icon";

const ChatGroup = ({
  title,
  date,
  name,
  selectChatGroup,
  description,
}: {
  title: string;
  date: Date | string;
  name: string;
  selectChatGroup: (d: string) => void;
  description: string;
}) => {
  const slicedDescription =
    description.length > 100 ? `${description.slice(0, 93)} ...` : description;

  const selectChat = (data: string) => {
    selectChatGroup(data);
  };
  return (
    <section className="flex gap-4 pr-1 items-start">
      <IconChatGroup onClick={() => selectChat(title)}/>
      <section className="flex-1">
        <div className="flex mb-1 gap-2">
          <p
            className="flex-1 text-base font-bold text-primary cursor-pointer"
            onClick={() => selectChat(title)}
          >
            {title}
          </p>
          <p className="text-bg-main-secondary text-sm">
            {dayjs(date).format("DD/MM/YYYY hh:mm")}
          </p>
        </div>
        <p className="text-sm font-bold">{name} :</p>
        <p className="text-sm">{slicedDescription}</p>
      </section>
    </section>
  );
};

export default ChatGroup;
