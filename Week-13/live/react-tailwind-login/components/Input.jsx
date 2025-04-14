export const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="rounded-lg font-medium text-1xl pl-4 pr-24 py-2 text-white cursor-text bg-blue-200 focus:outline-none focus:ring-0"
    ></input>
  );
};
