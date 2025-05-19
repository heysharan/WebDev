export default async function Comments({params} : { params: Promise<{commentIds: []}> }) {
    
    const commentIds: [] = (await params).commentIds

    return (
        <div className="bg-black h-screen text-3xl m-4">
            Route: {JSON.stringify(commentIds)}
        </div>
    )
}