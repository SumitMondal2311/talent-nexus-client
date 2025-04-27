import { JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import AuthProvider from '@/components/auth-provider';

const spaceGrotesk = Space_Grotesk({
    variable: '--font-space-grotesk',
    display: 'swap',
    subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
    variable: '--font-jetbrains-mono',
    weight: '400',
    display: 'swap',
    subsets: ['latin'],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} text-sm font-sans`}
            >
                <AuthProvider>{children}</AuthProvider>
                <Toaster position="top-center" />
            </body>
        </html>
    );
}
