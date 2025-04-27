import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Talent Nexus - Landing',
};

export default function Landing() {
    return (
        <div className="h-screen flex items-center justify-center text-primary">
            <div className="flex gap-2 items-center">
                <Link href="/auth/login" className="hover:underline">
                    Log in
                </Link>
                /
                <Link href="/auth/signup" className="hover:underline">
                    Sign up
                </Link>
            </div>
        </div>
    );
}
