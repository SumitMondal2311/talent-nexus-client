import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Talent Nexus - Landing',
};

export default function Landing() {
    return (
        <div className="h-screen flex items-center justify-center text-primary">
            Landing Page
        </div>
    );
}
