import { Input } from "@/components/ui/input";
import { FieldSet, FieldLabel } from "@/components/ui/field";
import { InputInvalid } from "@/components/ui/inputinvalid";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string,
    classes: string,
    isError: boolean,
    errorLabel: string,
    errorDescription: string,
}

export default function FormField(
    { label, classes, isError = false, errorLabel, errorDescription, ...props }: FormFieldProps
) {
    return (
        !isError ?
            <FieldSet className={`flex flex-col gap-y-2 ${classes}`}>
                <FieldLabel className="font-afacad text-lg font-semibold text-foreground">{label}</FieldLabel>
                <Input {...props} className="rounded-sm placeholder:text-base text-base text-foreground py-4" />
            </FieldSet> :
            <InputInvalid {...props} errorLabel={errorLabel} errorDescription={errorDescription} />
    )
}
