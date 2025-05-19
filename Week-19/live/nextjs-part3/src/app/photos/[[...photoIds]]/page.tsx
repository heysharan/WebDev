export default async function Photos({params}: { params: Promise<{ photoIds: []}>}) {
    
    const photoIds: [] = (await params).photoIds;
    
    return(
        <div className="text-2xl m-4">
            {photoIds ? <div>Route: {JSON.stringify(photoIds)}</div> : <div> Photos Page</div>}
        </div>
    )
}