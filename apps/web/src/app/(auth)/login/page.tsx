'use client'

import { useState } from "react";
import AuthHeader from "@/app/(auth)/_components/AuthHeader";
import FormField from "../_components/FormField";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface UserProps {
    email: string,
    password: string
}

export default function Page() {
    const [user, setUser] = useState<UserProps>({ email: "", password: "" })
    const [showNextField, setShowNextField] = useState<boolean>(false);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onNextHandler = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowNextField(true);
    }

    const onLoginHandler = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(user);
    }

    return (
        <div className="flex flex-col gap-y-[50px]">
            <div>
                <AuthHeader
                    title="Welcome Back!"
                    description="Sign in to sync your sprints and keep your development momentum moving forward"
                />
            </div>
            <form action="" method="post" className="flex flex-col gap-y-[20px]">
                <FormField
                    label="Email"
                    placeholder="your.email@example.com"
                    type="email"
                    value={user.email}
                    name="email"
                    classes={`${showNextField ? 'hidden' : 'block'}`}
                    onChange={(e) => onChangeHandler(e)}
                />
                <FormField
                    label="Password"
                    placeholder="Enter password..."
                    type="password"
                    value={user.password}
                    name="password"
                    classes={`${showNextField ? 'block' : 'hidden'}`}
                    onChange={(e) => onChangeHandler(e)}
                />
                <Link href={"/forgot-password"} className={`${showNextField ? "relative -top-2 text-end font-roboto text-md font-semibold text-foreground !text-[#1C55CF]" : "hidden"}`}> Forgot Password? </Link>
                <Button type={showNextField ? 'submit' : 'button'} className="w-full font-roboto text-lg font-semibold py-6 rounded-none bg-[#1C55CF]" onClick={(e) => showNextField ? onLoginHandler(e) : onNextHandler(e)}> {showNextField ? "Login" : "Next"} </Button>
            </form>
            <div className="flex justify-center items-center gap-x-[10px]">
                <span className="w-full h-[2px] bg-[#E4E4E7]"></span>
                <p className="font-roboto text-md font-semibold text-foreground uppercase">or</p>
                <span className="w-full h-[2px] bg-[#E4E4E7]"></span>
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