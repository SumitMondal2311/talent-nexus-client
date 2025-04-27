import { create } from 'zustand';

interface UseUtilityStore {
    loading: boolean;
    setLoading: (state: boolean) => void;
}

const useUtilityStore = create<UseUtilityStore>((set) => ({
    loading: false,
    setLoading: (state) => set({ loading: state }),
}));

export default useUtilityStore;
