'use client';

import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Input } from './ui/input';

export function PasswordField({
    placeholder,
    onChange,
    value,
}: {
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}) {
    const [visible, setVisible] = useState(false);

    return (
        <div className="relative flex items-center">
            <Input
                type={visible ? 'text' : 'password'}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <span
                onClick={() => setVisible((prev) => !prev)}
                className="absolute right-0 px-3 py-2 cursor-pointer"
            >
                {visible ? <EyeOff size="20" /> : <Eye size="20" />}
            </span>
        </div>
    );
}
