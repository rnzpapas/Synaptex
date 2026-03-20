'use client'

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
    InputOTPSeparator,
} from "@/components/ui/input-otp"
import AuthHeader from "@/app/(auth)/_components/AuthHeader"
import { Button } from "@/components/ui/button"
import { FieldGroup } from "@/components/ui/field"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Page() {
    const router = useRouter();
    const [otp, setOtp] = useState<string>("")
    const [countdown, setCountdown] = useState<number>(0)

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
            return () => clearTimeout(timer)
        }
    }, [countdown])

    const onSubmitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("Submitting OTP:", otp);
        router.push("/forgot-password");
    }

    const onResendHandler = () => {
        if (countdown > 0) return;

        console.log("Resending OTP...");
        setCountdown(30);
    }

    return (
        <div className="flex flex-col gap-y-[30px]">
            <div>
                <AuthHeader
                    title="Verification Code"
                    description="We've sent a 6-digit verification code to your email."
                />
            </div>
            <form action="" method="post" className="flex flex-col gap-y-[20px]">
                <FieldGroup className="flex justify-center items-center py-6">
                    <InputOTP maxLength={6} value={otp} onChange={(value) => setOtp(value)}>
                        <InputOTPGroup>
                            <InputOTPSlot index={0} className="w-14 h-14 text-xl" />
                            <InputOTPSlot index={1} className="w-14 h-14 text-xl" />
                            <InputOTPSlot index={2} className="w-14 h-14 text-xl" />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                            <InputOTPSlot index={3} className="w-14 h-14 text-xl" />
                            <InputOTPSlot index={4} className="w-14 h-14 text-xl" />
                            <InputOTPSlot index={5} className="w-14 h-14 text-xl" />
                        </InputOTPGroup>
                    </InputOTP>
                </FieldGroup>

                <Button type="submit" className="w-full font-roboto text-lg font-semibold py-6 rounded-none bg-[#1C55CF]" onClick={onSubmitHandler}>
                    Verify Account
                </Button>

                <div className="flex justify-center items-center mt-2">
                    <p className="font-roboto text-sm font-normal text-foreground">
                        Didn't receive the code?
                        <span
                            className={`ml-1 font-semibold ${countdown > 0 ? "text-muted-foreground cursor-not-allowed" : "text-[#1C55CF] cursor-pointer hover:underline"}`}
                            onClick={onResendHandler}
                        >
                            {countdown > 0 ? `Resend in ${countdown}s` : "Resend"}
                        </span>
                    </p>
                </div>
            </form>
        </div>
    )
}