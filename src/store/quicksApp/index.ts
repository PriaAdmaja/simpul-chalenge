import { create } from "zustand";

interface QuickAppShow {
  selectedMenu: "chat" | "todo" | null;
  showButton: boolean;
  setSelectedMenu: (d: "chat" | "todo") => void;
  clearSelected: () => void;
  setShowButton: (d: boolean) => void;
}

export const useQuickShow = create<QuickAppShow>()((set) => ({
  selectedMenu: null,
  showButton: false,
  setSelectedMenu: (d) => set({ selectedMenu: d }),
  clearSelected: () => set({ selectedMenu: null }),
  setShowButton: (d) => set({ showButton: d }),
}));
