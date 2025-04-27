import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from './ui/select';

export function AppSelect({
    placeholder,
    items,
    value,
    onValueChange,
}: {
    placeholder: string;
    items: { label: string; value: string }[];
    value: string;
    onValueChange: (value: string) => void;
}) {
    return (
        <Select value={value} onValueChange={onValueChange}>
            <SelectTrigger className="w-full text-base md:text-sm">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {items.map((item, idx) => (
                    <SelectItem key={idx} value={item.value}>
                        {item.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
