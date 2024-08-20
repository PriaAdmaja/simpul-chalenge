import { useChatStore } from "../../store/chat";
import ChatDetail from "./chat-detail";
import ChatGroupList from "./ChatGroupList";

const Chat = () => {
  const chatGroup = useChatStore((state) => state.chatGroup);
  return <>{chatGroup === null ? <ChatGroupList /> : <ChatDetail />}</>;
};

export default Chat;
