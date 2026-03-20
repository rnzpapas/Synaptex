'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthHeader from "@/app/(auth)/_components/AuthHeader";
import FormField from "../_components/FormField";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox"
import { FieldGroup, FieldSeparator, FieldSet } from "@/components/ui/field";
import { validateEmail } from "../../../../../../packages/utils/src/validators/index";
interface UserProps {
    email: string,
    password: string
}
interface FieldErrorsProps {
    field: string,
    isError: boolean,
    errorDescription: string
}
export default function Page() {
    const router = useRouter();
    const [user, setUser] = useState<UserProps>({ email: "", password: "" })
    const [showNextField, setShowNextField] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [fieldErrors, setFieldErrors] = useState<FieldErrorsProps>({ field: "", isError: false, errorDescription: "" });

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onNextHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (user.email.length > 0 && validateEmail(user.email)) {
            setShowNextField(true);
            return
        }
        setFieldErrors({ field: "email", isError: true, errorDescription: "Please enter a valid email address" });
    }

    const onLoginHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (user.password.length > 0) {
            router.push("/dashboard");
            return
        }
        setFieldErrors({ field: "password", isError: true, errorDescription: "Please enter a valid password" });
    }

    const onFocusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        if (fieldErrors.field === e.target.name) {
            setFieldErrors({ field: "", isError: false, errorDescription: "" });
        }
    }
    return (
        <div className={`flex flex-col ${showNextField ? 'gap-y-[20px]' : 'gap-y-[30px]'}`}>
            <div>
                <AuthHeader
                    title="Welcome Back!"
                    description="Sign in to sync your sprints and keep your development momentum moving forward"
                />
            </div>
            <form action="" method="post" className="flex flex-col gap-y-[20px]">
                <FieldGroup>
                    <FieldSet>
                        <FormField
                            label="Email"
                            placeholder="your.email@example.com"
                            type="email"
                            value={user.email}
                            name="email"
                            classes={`${showNextField ? 'hidden' : 'block'}`}
                            onChange={(e) => onChangeHandler(e)}
                            onFocus={onFocusHandler}
                            isError={fieldErrors.field === "email" && fieldErrors.isError}
                            errorLabel={fieldErrors.field === "email" && fieldErrors.isError ? "Invalid Email" : ""}
                            errorDescription={fieldErrors.field === "email" && fieldErrors.isError ? fieldErrors.errorDescription : ""}
                        />
                    </FieldSet>
                    <div className={`${showNextField ? 'flex gap-x-[8px]' : 'hidden'}`}>
                        <p className="font-roboto text-sm font-normal text-foreground">Enter password for <span className="font-medium">{user.email}</span>:</p>
                        <p className="text-[#1C55CF] font-roboto text-sm font-semibold decoration-solid hover:underline cursor-pointer" onClick={() => setShowNextField(false)}> Not you?</p>
                    </div>
                    <FormField
                        label="Password"
                        placeholder="Enter password..."
                        type={showPassword ? "text" : "password"}
                        value={user.password}
                        name="password"
                        classes={`${showNextField ? 'block' : 'hidden'}`}
                        onChange={(e) => onChangeHandler(e)}
                        onFocus={onFocusHandler}
                        isError={fieldErrors.field === "password" && fieldErrors.isError}
                        errorLabel={fieldErrors.field === "password" && fieldErrors.isError ? "Invalid Password" : ""}
                        errorDescription={fieldErrors.field === "password" && fieldErrors.isError ? fieldErrors.errorDescription : ""}
                    />
                    <div className={`${showNextField ? 'flex justify-between items-center' : 'hidden'}`}>
                        <div className="flex justify-center items-center gap-x-[10px]">
                            <Checkbox checked={showPassword} onCheckedChange={() => setShowPassword(!showPassword)} />
                            <p>Show Password</p>
                        </div>
                        <Link href={"/forgot-password"} className={`${showNextField ? "-top-2 text-end font-roboto text-md font-semibold text-foreground !text-[#1C55CF]" : "hidden"}`}> Forgot Password? </Link>
                    </div>
                    <Button type={showNextField ? 'submit' : 'button'} className="w-full font-roboto text-lg font-semibold py-6 rounded-none bg-[#1C55CF]" onClick={(e) => showNextField ? onLoginHandler(e) : onNextHandler(e)}> {showNextField ? "Login" : "Next"} </Button>
                </FieldGroup>
            </form>
            <div className="flex justify-center items-center gap-x-[10px]">
                <FieldSeparator className="w-full h-[2px] bg-[#E4E4E7]" />
                <p className="font-roboto text-md font-semibold text-foreground uppercase">or</p>
                <FieldSeparator className="w-full h-[2px] bg-[#E4E4E7]" />
            </div>
            <div className="flex flex-col gap-y-[20px]">
                <Button className="flex justify-center items-center gap-x-[14px] w-full font-roboto text-foreground text-lg font-semibold py-6 rounded-none bg-[#fff] border border-[#E4E4E7]">
                    <Image src="/google.svg" alt="Google" width={30} height={30} />
                    Sign in with Google
                </Button>
                <Button className="flex justify-center items-center gap-x-[14px] w-full font-roboto text-[#fff] text-lg font-semibold py-6 rounded-none bg-[#000] border border-[#E4E4E7]">
                    <Image src="/github.svg" alt="Google" width={30} height={30} className="invert" />
                    Sign in with Github
                </Button>
            </div>
        </div>
    )
}