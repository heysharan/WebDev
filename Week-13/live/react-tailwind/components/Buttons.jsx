export const Button = ({
    isDisabled,
    children,
    onClick
}) => {
    return (
        <button onClick={onClick} className={`rounded-lg font-medium text-1xl px-33 py-2 text-white cursor-pointer ${isDisabled ? "bg-blue-300" : "bg-green-300"}` }>
            {children}
        </button>
    )
}