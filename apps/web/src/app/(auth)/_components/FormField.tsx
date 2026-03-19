import { Input } from "@/components/ui/input";
import { FieldSet, FieldLabel } from "@/components/ui/field";
import { InputInvalid } from "@/components/ui/inputinvalid";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    // only add your CUSTOM props here, native ones like
    // onFocus, onChange, placeholder, type, etc. are inherited
    label: string,
    classes: string,
    isError: boolean,
    errorLabel: string,
    errorDescription: string,
}
// interface FormFieldProps {
//     label: string,
//     placeholder: string,
//     type: string,
//     value: string,
//     name: string,
//     classes: string,
//     onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
//     onFocus: (e: React.FocusEvent<HTMLInputElement>) => void,
//     isError: boolean,
//     errorLabel: string,
//     errorDescription: string,
// }

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
