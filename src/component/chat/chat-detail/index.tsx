import iconArrowLeft from "../../../assets/icons/icon-arrow-left-dark.svg";
import iconClose from "../../../assets/icons/icon-close-dark.svg";
import { useChatStore } from "../../../store/chat";
import { useQuickShow } from "../../../store/quicksApp";

const ChatDetail = () => {
  const chatGroupTitle = useChatStore((state) => state.chatGroup);
  const closeQuicks = useQuickShow((state) => state.clearSelected);
  const setShowButton = useQuickShow((state) => state.setShowButton);
  const clearChatGroup = useChatStore((state) => state.clearChatGroup);
  return (
    <section>
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
    </section>
  );
};

export default ChatDetail;
