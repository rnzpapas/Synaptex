'use client'

import { FieldGroup, FieldSet } from "@/components/ui/field";
import AuthHeader from "@/app/(auth)/_components/AuthHeader";
import FormField from "@/app/(auth)/_components/FormField";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface PasswordProps {
    value: string,
    showPassword: boolean,
    isError: boolean,
    errorDescription: string
}

interface PasswordObjProps {
    newPassword: PasswordProps,
    confirmPassword: PasswordProps
}

export default function Page() {
    const [passwords, setPasswords] = useState<PasswordObjProps>({
        newPassword: { value: "", showPassword: false, isError: false, errorDescription: "" },
        confirmPassword: { value: "", showPassword: false, isError: false, errorDescription: "" }
    });

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name as keyof PasswordObjProps;
        const value = e.target.value;
        setPasswords((prev) => ({ ...prev, [name]: { ...prev[name], value } }));
    }

    const onFocusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        const name = e.target.name as keyof PasswordObjProps;
        setPasswords((prev) => ({ ...prev, [name]: { ...prev[name], isError: false, errorDescription: "" } }));
    }

    const onSubmitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // Add submit logic here
    }

    return (
        <div className="flex flex-col gap-y-[30px]">
            <div>
                <AuthHeader
                    title="Reset Password"
                    description="Enter your new password below"
                />
            </div>
            <form action="" method="post" className="flex flex-col gap-y-[20px]">
                <FieldGroup>
                    <FormField
                        label="New Password"
                        placeholder="Enter password..."
                        type={passwords.newPassword.showPassword ? "text" : "password"}
                        value={passwords.newPassword.value}
                        name="newPassword"
                        classes="block"
                        onChange={onChangeHandler}
                        onFocus={onFocusHandler}
                        isError={passwords.newPassword.isError}
                        errorLabel={passwords.newPassword.isError ? "Invalid Password" : ""}
                        errorDescription={passwords.newPassword.isError ? passwords.newPassword.errorDescription : ""}
                    />
                    <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-x-[10px]">
                            <Checkbox 
                                checked={passwords.newPassword.showPassword} 
                                onCheckedChange={() => setPasswords(prev => ({ ...prev, newPassword: { ...prev.newPassword, showPassword: !prev.newPassword.showPassword } }))} 
                            />
                            <p>Show Password</p>
                        </div>
                    </div>
                </FieldGroup>
                <FieldGroup>
                    <FormField
                        label="Confirm Password"
                        placeholder="Confirm password..."
                        type={passwords.confirmPassword.showPassword ? "text" : "password"}
                        value={passwords.confirmPassword.value}
                        name="confirmPassword"
                        classes="block"
                        onChange={onChangeHandler}
                        onFocus={onFocusHandler}
                        isError={passwords.confirmPassword.isError}
                        errorLabel={passwords.confirmPassword.isError ? "Passwords do not match" : ""}
                        errorDescription={passwords.confirmPassword.isError ? passwords.confirmPassword.errorDescription : ""}
                    />
                    <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-x-[10px]">
                            <Checkbox 
                                checked={passwords.confirmPassword.showPassword} 
                                onCheckedChange={() => setPasswords(prev => ({ ...prev, confirmPassword: { ...prev.confirmPassword, showPassword: !prev.confirmPassword.showPassword } }))} 
                            />
                            <p>Show Password</p>
                        </div>
                    </div>
                </FieldGroup>
                <Button type="submit" className="w-full font-roboto text-lg font-semibold py-6 rounded-none bg-[#1C55CF]" onClick={onSubmitHandler}> Reset Password </Button>
            </form>
        </div>
    )
}