'use client';

import { login } from '@/api/auth.api';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useAuthStore from '@/store/use-auth.store';
import useUtilityStore from '@/store/use-utility.store';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import { PasswordField } from '../password-field';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const { loading } = useUtilityStore();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        useUtilityStore.setState({ loading: true });

        const { ok, data } = await login({ email, password });
        if (ok) {
            useAuthStore.setState({
                user: data?.user,
                accessToken: data?.accessToken,
            });

            toast.success(data?.message || 'Signed up successfully');

            router.replace('/dashboard');

            setEmail('');
            setPassword('');
        } else {
            toast.error(data?.message || 'Failed to sign up');
        }

        useUtilityStore.setState({ loading: false });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
                type="email"
                placeholder="Email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <PasswordField
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <Button
                type="submit"
                disabled={loading || !email || !password}
                className="flex gap-2 cursor-pointer"
            >
                {loading ? (
                    <>
                        <Loader2 className="animate-spin" />
                        Log in
                    </>
                ) : (
                    'Log in'
                )}
            </Button>
            <div className="self-center flex items-center">
                <p>Already have an account?</p>
                <Link
                    href="/auth/signup"
                    className={buttonVariants({ variant: 'link' })}
                >
                    Sign up
                </Link>
            </div>
        </form>
    );
}

export default LoginForm;
