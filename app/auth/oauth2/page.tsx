'use client';

import useAuthStore from '@/store/use-auth.store';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'sonner';

export default function OAuth2() {
    const router = useRouter();
    const { user } = useAuthStore();

    useEffect(() => {
        if (user) router.replace('/dashboard');

        const cookie = document.cookie
            .split('; ')
            .find((row) => row.startsWith('__oauth2_payload__='))
            ?.split('=')[1];

        if (cookie) {
            const { user, accessToken } = JSON.parse(
                decodeURIComponent(cookie)
            );
            useAuthStore.setState({
                user,
                accessToken,
            });

            toast.success('Authenticated by Google successfully');

            document.cookie = '__oauth2_payload__; max-age=0;';

            router.push('/dashboard');
        }
    }, [router, user]);

    return (
        <div className="h-screen flex items-center justify-center">
            <Loader2 className="animate-spin" />
        </div>
    );
}
