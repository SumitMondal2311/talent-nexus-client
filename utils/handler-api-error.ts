const handleApiError = (error: any) => {
    return { ok: false, data: { message: error?.response?.data?.message } };
};

export default handleApiError;
