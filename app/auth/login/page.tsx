import LoginForm from '@/components/forms/login-form';
import GoogleAuthButton from '@/components/google-auth-button';
import { Separator } from '@/components/ui/separator';

export default function Login() {
    return (
        <div className="h-screen flex items-center justify-center px-8">
            <div className="w-96 flex flex-col gap-8">
                <div>
                    <h1 className="font-mono font-bold text-2xl">
                        Welcome back!
                    </h1>
                    <p>Enter your credentials to access your account</p>
                </div>
                <LoginForm />
                <Separator />
                <GoogleAuthButton />
            </div>
        </div>
    );
}
