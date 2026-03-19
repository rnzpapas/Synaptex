import { Input } from "@/components/ui/input";

interface FormFieldProps {
    label: string,
    placeholder: string,
    type: string,
    value: string,
    name: string,
    classes: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function FormField(
    { label, placeholder, type, value, name, classes, onChange }: FormFieldProps
) {
    return (
        <div className={`flex flex-col gap-y-2 ${classes}`}>
            <h5 className="font-afacad text-lg font-semibold text-foreground">{label}</h5>
            <Input placeholder={placeholder} type={type} value={value} onChange={onChange} name={name} className="rounded-sm placeholder:text-base text-base text-foreground py-4" />
        </div>
    )
}
