interface PropType {
    placeholder: string,
    type: string
}

export function TextInput({
    placeholder,
    type
}: PropType) {
  return (
    <input className="text-white pt-2 pr-3 pb-2 pl-3 mr-2 w-full focus:outline-none focus:ring-0 border border-gray-700 rounded-sm" 
    placeholder={placeholder} type={type}>
    </input>
  );
}
