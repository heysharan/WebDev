import { useState } from "react";
import { Button } from "./Buttons";
import { Input } from "./Input";

export const AgeVerification = () => {
  const [birthYear, setBirthYear] = useState("");

  const isDisabledHandler = (e) => {
    setBirthYear(e.target.value);
  };
  const isDisabled = birthYear.trim() === "";
  console.log(isDisabled);
  return (
    <div className="w-screen min-h-screen bg-blue-500">
      <div className="flex justify-center pt-15 pb-20">
        <img src="https://webinar.gg/loginLogo.svg" alt="Logo" />
      </div>

      <div className="flex justify-center pb-15">
        <h1 className="text-white text-2xl font-bold">Verify Your Age</h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-white text-sm">
          Please confirm your birth year. This data will not be stored.
        </p>
        <Input
          type="text"
          placeholder="Your Birth Year"
          value={birthYear}
          onChange={isDisabledHandler}
        />
      </div>
      <div className="flex flex-col items-center justify-center pt-6">
        <Button isDisabled={isDisabled}>Submit</Button>
      </div>
    </div>
  );
};
