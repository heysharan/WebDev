export const ListsAndKeys = ( {children} ) => {
    return (
        <ul>  {/* ul: defines an unordered (bulleted) list & <li>: tag to create unordered lists */}
            { children.map(i => (
                <li key={i.id}>{i.title}, {i.done ? 'Done' : 'Not-done'}</li> 
            )) }     
        </ul>
    )
}
