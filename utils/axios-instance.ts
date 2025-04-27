import useAuthStore from '@/store/use-auth.store';
import axios from 'axios';

const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
if (!NEXT_PUBLIC_BASE_URL) {
    throw new Error('Invalid or missing NEXT_PUBLIC_BASE_URL env variable');
}

const instance = axios.create({
    baseURL: NEXT_PUBLIC_BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
});

instance.interceptors.request.use((config) => {
    const { accessToken } = useAuthStore.getState();
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
});

export default instance;
