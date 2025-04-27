'use client';

import { refreshToken } from '@/api/auth.api';
import useAuthStore from '@/store/use-auth.store';
import useUtilityStore from '@/store/use-utility.store';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

function AuthProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    useEffect(() => {
        if (pathname.includes('/auth')) return;

        (async () => {
            useUtilityStore.setState({ loading: true });

            const { ok, data } = await refreshToken();
            if (ok) {
                useAuthStore.setState({
                    user: data?.user,
                    accessToken: data?.accessToken,
                });
            }

            useUtilityStore.setState({ loading: true });
        })();
    }, [pathname]);

    return <>{children}</>;
}

export default AuthProvider;
