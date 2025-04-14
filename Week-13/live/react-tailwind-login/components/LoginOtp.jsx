import { Button } from "./Buttons";
import { Otp } from "./Otp";

export const LoginOtp = () => {

  const isDisabled = true
  return (
    <div className="w-screen min-h-screen bg-blue-500">
      <div className="flex justify-center pt-15 pb-20">
        <img src="https://webinar.gg/loginLogo.svg" alt="Logo" />
      </div>

      <div className="flex justify-center pb-15">
        <h1 className="text-white text-2xl font-bold">
          Check Your Email For An OTP
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-white text-sm">
          Please enter the verification code sent to your email id
        </p>
        <Otp number={6}/>

      </div>
      <div className="flex flex-col items-center justify-center pt-6 gap-1">
        <Button isDisabled={isDisabled}>Verify</Button>
        <p className="text-white text-sm">
          Can't find the email? Click here to resend
        </p>
      </div>
    </div>
  );
};
