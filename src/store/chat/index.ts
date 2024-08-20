import { create } from "zustand";

interface ChatState {
  chatGroup: string | null;
  clearChatGroup: () => void;
  setChatGroup: (d: string) => void;
}
export const useChatStore = create<ChatState>()((set) => ({
  chatGroup: null,
  clearChatGroup: () => set({ chatGroup: null }),
  setChatGroup: (d) => set({ chatGroup: d }),
}));