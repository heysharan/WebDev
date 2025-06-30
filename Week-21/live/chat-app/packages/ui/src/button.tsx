interface PropType {
    children: string
    size: "small" | "medium" | "big",
    onClick? : () => void
}

export function Button({
    children, size, onClick
}: PropType) {
    let className: string
    if(size === 'small'){
        className = "bg-white rounded-sm flex items-center px-8 cursor-pointer"
    }
    else if(size === 'medium'){
        className = "bg-white rounded-sm flex items-center justify-center px-3 text-sm font-medium cursor-pointer w-40"
    }
    else{
       className = "bg-white rounded-sm flex items-center justify-center py-3 text-xl font-medium cursor-pointer w-full" 
    }

    return(
        <button className={className} onClick={onClick}>
            {children}
        </button>
    )
}