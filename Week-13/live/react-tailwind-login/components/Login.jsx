import { useState } from "react";
import { Button } from "./Buttons";
import { Input } from "./Input";
import { z } from "zod";

export const Login = () => {
  const emailSchema = z.string().email();

  const [email, setEmail] = useState("");

  const isDisabledHandler = (e) => {
    setEmail(e.target.value);
  };

  const isDisabled = !emailSchema.safeParse(email.trim()).success;

  return (
    <div className="w-screen min-h-screen bg-blue-500">
      <div className="flex justify-center pt-15 pb-20">
        <img src="https://webinar.gg/loginLogo.svg" alt="Logo" />
      </div>

      <div className="flex justify-center pb-15">
        <h1 className="text-white text-2xl font-bold">Let's Get Started</h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-3">
        <Input
          type="text"
          placeholder="Email id"
          value={email}
          onChange={isDisabledHandler}
        />
      </div>
      <div className="flex flex-col items-center justify-center pt-6">
        <Button isDisabled={isDisabled}>Continue</Button>
      </div>
    </div>
  );
};
