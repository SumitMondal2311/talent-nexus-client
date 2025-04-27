'use client'

import { logout } from '@/api/auth.api';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import useAuthStore from '@/store/use-auth.store';
import useUtilityStore from '@/store/use-utility.store';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function Dashboard() {
    const router = useRouter();

    const handleLogout = async () => {
        useUtilityStore.setState({ loading: true });

        const { ok, data } = await logout();
        if (ok) {
            useAuthStore.setState({
                user: null,
                accessToken: '',
            });

            router.replace('/auth/login');

            toast.success(data?.message || 'Logged out successfully');
        } else {
            toast.error(data?.message || 'Failed to logout');
        }

        useUtilityStore.setState({ loading: false });
    };
    return (
        <div className="h-screen flex items-center justify-center">
            <Button
                onClick={handleLogout}
                className={cn(
                    buttonVariants({ variant: 'destructive' }),
                    'cursor-pointer'
                )}
            >
                Log out
            </Button>
        </div>
    );
}
