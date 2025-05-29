interface PropType {
    children: string
}

export function Button({
    children
}: PropType) {
    return(
        <div className="bg-white rounded-sm flex items-center py-1 px-8 cursor-pointer">
            {children}
        </div>
    )
}