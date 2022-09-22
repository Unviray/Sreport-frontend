import create from "zustand";

interface SearchStore {
  value: string;
  setValue: (value: string) => void;
}

const useSearchStore = create<SearchStore>((set) => ({
  value: "",
  setValue: (value) => set(() => ({ value })),
}));

export default useSearchStore;
