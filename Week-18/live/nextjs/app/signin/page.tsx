export default function Home () {
    return (
        <div className="bg-gray-100 w-screen h-screen flex justify-center items-center">
            <div className=" bg-white rounded-2xl w-120 h-94 border-2 border-gray-200">
                <div className="flex flex-col p-5 gap-1">
                    <p className="font-extrabold text-3xl text-gray-900">Login</p>
                    <p className="text-gray-900">Enter your email to sign in to your account</p>
                </div>
                <div className="flex flex-col pr-5 pb-5 pl-5">
                    <p className="font-extrabold text-lg text-gray-900">Email</p>
                    <input type="text" placeholder="someone@example.com" className="p-2 border border-gray-300 rounded-lg"></input>
                </div>
                <div className="flex flex-col pr-5 pb-5 pl-5">
                    <p className="font-extrabold text-lg text-gray-900">Password</p>
                    <input type="password" className="p-2 border border-gray-300 rounded-lg"></input>
                </div>
                <div className="flex justify-center items-center pt-3 pr-5 pb-5 pl-5">
                    <Button variant='primary' text='Login' fullWidth={true}/>
                </div>
            </div>
        </div>
    )
}



import { ReactElement } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  fullWidth?: boolean;
  loading?: boolean;
  onClick?: () => void
}

const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-300 text-purple-500",
};

const defaultStyles = "px-4 py-2 cursor-pointer rounded-md font-light flex items-center";

export const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick}
      className={`${variantStyles[props.variant]} ${defaultStyles} ${props.loading? 'opacity-40': ''} ${props.fullWidth ? 'w-full pt-2 pb-2 font-medium flex items-center justify-center': ''}`}> {props.startIcon ? <div className="pr-2"> {props.startIcon} </div> : null}
      {props.text}
    </button>
  );
};
