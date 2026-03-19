import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "./input";

interface InputInvalidProps extends React.InputHTMLAttributes<HTMLInputElement> {
    errorLabel: string,
    errorDescription: string,
}

export function InputInvalid({ errorLabel, errorDescription, ...props }: InputInvalidProps) {
    return (
        <Field data-invalid>
            <FieldLabel htmlFor="input-invalid">{errorLabel}</FieldLabel>
            <Input {...props} id="input-invalid" aria-invalid />
            <FieldDescription>
                {errorDescription}
            </FieldDescription>
        </Field>
    )
}