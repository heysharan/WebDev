interface PropType {
    children: string
    onClick? : () => void
}

export function Button({
    children, onClick
}: PropType) {

    return(
        <button className={"bg-white text-black font-medium rounded-sm flex items-center px-8 py-1 m-2 cursor-pointer"} onClick={onClick}>
            {children}
        </button>
    )
}