export const Button = ({
    isDisabled,
    children,
    onClick
}) => {
    return (
        <button onClick={onClick} className={`rounded-lg font-medium text-1xl px-33 py-2  cursor-pointer ${isDisabled ? "bg-blue-300 text-white" : "bg-white text-blue-500"}` }>
            {children}
        </button>
    )
}