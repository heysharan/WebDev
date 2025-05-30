import { ForwardedRef, forwardRef } from "react";

interface PropType {
    placeholder: string,
    type: string
}


export const TextInput = forwardRef(
  (
    { placeholder, type }: PropType,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <input
        className="py-2 px-3 mr-2 w-full focus:outline-none focus:ring-0 border text-neutral-50 border-neutral-800 rounded-sm"
        placeholder={placeholder}
        type={type}
        ref={ref}
      />
    );
  }
);
