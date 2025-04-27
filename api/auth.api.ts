import axiosInstance from '@/utils/axios-instance';
import handleApiError from '@/utils/handler-api-error';

export async function signup(formData: {
    fullName: string;
    role: string;
    email: string;
    password: string;
}) {
    try {
        const { status, data } = await axiosInstance.post(
            '/api/auth/signup',
            formData
        );

        return { ok: status === 201, data };
    } catch (error) {
        return handleApiError(error);
    }
}

export async function login(formData: { email: string; password: string }) {
    try {
        const { status, data } = await axiosInstance.post(
            '/api/auth/login',
            formData
        );

        return { ok: status === 200, data };
    } catch (error) {
        return handleApiError(error);
    }
}

export async function refreshToken() {
    try {
        const { status, data } = await axiosInstance.get(
            '/api/auth/refresh-token'
        );
        return { ok: status === 200, data };
    } catch (error) {
        return handleApiError(error);
    }
}

export async function logout() {
    try {
        const { status, data } = await axiosInstance.post('/api/auth/logout');
        return { ok: status === 200, data };
    } catch (error) {
        return handleApiError(error);
    }
}
