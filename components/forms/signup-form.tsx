'use client';

import { signup } from '@/api/auth.api';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useAuthStore from '@/store/use-auth.store';
import useUtilityStore from '@/store/use-utility.store';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import { AppSelect } from '../app-select';
import { PasswordField } from '../password-field';

function SignupForm() {
    const [fullName, setFullName] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const { loading } = useUtilityStore();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        useUtilityStore.setState({ loading: true });

        const { ok, data } = await signup({ fullName, role, email, password });
        if (ok) {
            useAuthStore.setState({
                user: data?.user,
                accessToken: data?.accessToken,
            });

            toast.success(data?.message || 'Signed up successfully');

            router.replace('/dashboard');

            setRole('');
            setFullName('');
            setEmail('');
            setPassword('');
        } else {
            toast.error(data?.message || 'Failed to sign up');
        }

        useUtilityStore.setState({ loading: true });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
                type="text"
                placeholder="Full name"
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
            />
            <AppSelect
                placeholder="Role"
                items={[
                    { label: 'Job Seeker', value: 'job_seeker' },
                    { label: 'Recruiter', value: 'recruiter' },
                    { label: 'Recruiter Head', value: 'recruiter_head' },
                ]}
                value={role}
                onValueChange={setRole}
            />
            <Input
                type="email"
                placeholder="Email"
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
                disabled={loading || !role || !fullName || !email || !password}
                className="flex gap-2 cursor-pointer"
            >
                {loading ? (
                    <>
                        <Loader2 className="animate-spin" />
                        Sign up
                    </>
                ) : (
                    'Sign up'
                )}
            </Button>
            <div className="self-center flex items-center">
                <p>Already have an account?</p>
                <Link
                    href="/auth/login"
                    className={buttonVariants({ variant: 'link' })}
                >
                    Log in
                </Link>
            </div>
        </form>
    );
}

export default SignupForm;
