import Link from 'next/link';
import { buttonVariants } from './ui/button';

const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
if (!NEXT_PUBLIC_BASE_URL) {
    throw new Error('Invalid or missing NEXT_PUBLIC_BASE_URL env variable');
}

function GoogleAuthButton() {
    return (
        <Link
            href={`${NEXT_PUBLIC_BASE_URL}/api/auth/google`}
            className={buttonVariants({ variant: 'outline' })}
        >
            Continue with Google
        </Link>
    );
}

export default GoogleAuthButton;
