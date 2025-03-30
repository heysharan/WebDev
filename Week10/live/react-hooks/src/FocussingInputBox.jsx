import { useRef } from "react";
export const FocussingInputBox = () => {
  const inputRef = useRef();
  const focusOn = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      Sign Up
      <input ref={inputRef} type="text"></input>
      <input type="text"></input>
      <button onClick={focusOn}>Submit</button>
    </div>
  );
};
