import { useRef, useState } from "react";

export const Otp = ({ number }) => {
  const ref = useRef([]);
  const [otp, setOtp] = useState(Array(number).fill(""));

  return (
    <div>
      {[...Array(number)].map((x, i) => (
        <SubOtp
          key={i}
          reference={(e) => (ref.current[i] = e)}
          onDone={(val) => {
            if (i >= number) return;
            if (val.charCodeAt() >= 48 && val.charCodeAt() <= 57) {
              const newOtp = [...otp];
              newOtp[i] = val;
              setOtp(newOtp);
              ref.current[i + 1].focus();
            }
          }}
          goBack={() => {
            if (otp[i] === "") {
              if (i > 0) {
                const newOtp = [...otp];
                newOtp[i] = "";
                setOtp(newOtp);
                ref.current[i - 1].focus();
              }
            } else {
              const newOtp = [...otp];
              newOtp[i] = "";
              setOtp(newOtp);
            }
          }}
          value={otp[i]}
        />
      ))}
    </div>
  );
};

const SubOtp = ({ value, reference, onDone, goBack }) => {
  return (
    <input
      value={value}
      maxLength={1}
      ref={reference}
      onChange={(e) => onDone(e.target.value)}
      onKeyUp={(e) => {
        if (e.key == "Backspace") {
          goBack();
        }
      }}
      type="text"
      className="w-[40px] h-[50px] text-center mr-2 bg-blue-400 text-white rounded-lg focus:outline-none focus:ring-0"
    />
  );
};

// ChatGPT Version

// import { useRef, useState } from "react";

// export const Otp = ({ number }) => {
//   const ref = useRef([]);
//   const [otp, setOtp] = useState(Array(number).fill(""));

//   const handleChange = (val, i) => {
//     if (!/^[0-9]$/.test(val)) return;

//     const newOtp = [...otp];
//     newOtp[i] = val;
//     setOtp(newOtp);

//     setTimeout(() => {
//       if (i + 1 < number) {
//         ref.current[i + 1]?.focus();
//       }
//     }, 10);
//   };

//   const handleBackspace = (i) => {
//     const newOtp = [...otp];
//     newOtp[i] = "";
//     setOtp(newOtp);

//     setTimeout(() => {
//       if (i > 0) {
//         ref.current[i - 1]?.focus();
//       }
//     }, 10);
//   };

//   console.log(otp.join(''))

//   return (
//     <div className="flex items-center">
//       {[...Array(number)].map((_, i) => (
//         <SubOtp
//           key={i}
//           value={otp[i]}
//           reference={(e) => (ref.current[i] = e)}
//           onChange={(val) => handleChange(val, i)}
//           onBackspace={() => handleBackspace(i)}
//         />
//       ))}
//     </div>
//   );
// };

// const SubOtp = ({ value, reference, onChange, onBackspace }) => {
//   return (
//     <input
//       ref={reference}
//       value={value}
//       maxLength={1}
//       onChange={(e) => {
//         const val = e.target.value;
//         if (val.charCodeAt(0) >= 48 && val.charCodeAt(0) <= 57) {
//           onChange(val);
//         }
//       }}
//       onKeyUp={(e) => {
//         if (e.key === "Backspace") {
//           onBackspace();
//         }
//       }}
//       type="text"
//       className="w-[40px] h-[50px] text-center mr-2 bg-blue-400 text-white rounded-lg focus:outline-none focus:ring-0"
//     />
//   );
// };
