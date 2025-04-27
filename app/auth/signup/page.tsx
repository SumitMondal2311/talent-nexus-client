import SignupForm from '@/components/forms/signup-form';
import GoogleAuthButton from '@/components/google-auth-button';
import { Separator } from '@/components/ui/separator';

export default function Signup() {
    return (
        <div className="h-screen flex items-center justify-center p-8">
            <div className="w-96 flex flex-col gap-8">
                <div>
                    <h1 className="font-mono font-bold text-2xl">
                        Create an account
                    </h1>
                    <p>Enter your credentials to create an account</p>
                </div>
                <SignupForm />
                <Separator />
                <GoogleAuthButton />
            </div>
        </div>
    );
}
