import { UserInfo } from '@/types/user-info.type';
import { create } from 'zustand';

interface UseAuthStore {
    user: UserInfo | null;
    setUser: (user: UserInfo) => void;
    accessToken: string;
    setAccessToken: (token: string) => void;
}

const useAuthStore = create<UseAuthStore>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    accessToken: '',
    setAccessToken: (token) => set({ accessToken: token }),
}));

export default useAuthStore;
