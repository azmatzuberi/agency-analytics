const Showcase = ({ photo }: { photo: Photo }) => {
    function formatBytes(bytes: number, decimals = 2) {
        if (!+bytes) return '0 Bytes'
        const k = 1024
        const dm = decimals < 0 ? 0 : decimals
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
    }

    const formatDate = (dateString: Date) => {
        return new Date(dateString).toLocaleDateString(undefined)
    }

    return (
    <div className="showcase">
        <div className="display">
            <img src={photo.url} alt={photo.filename} className="image" />
            <div className="row display-panel">
                <div className="col-lg-10">
                    <h3 className="filename">{photo.filename}</h3>
                    <h3 className="size">{formatBytes(photo.sizeInBytes)}</h3>
                </div>
                <div className="col-lg-2 favorite-div">
                    {photo?.favorited ? <img className="heart" src="/heart-full.png" alt="Favorited" /> : <img className="heart" src="/heart-outline.png" alt="Not favorited" />}
                </div>
            </div>
        </div>
        <div className="info">
            <h3>Information</h3>
            <hr />
            <div className="row"><div className="col"><h4 className="left">Uploaded by</h4></div><div className="col"><h4>{photo?.uploadedBy}</h4></div></div>
            <hr />
            <div className="row"><div className="col"><h4 className="left">Last modified</h4></div><div className="col"><h4>{formatDate(photo?.updatedAt)}</h4></div></div>
            <hr />
            <div className="row"><div className="col"><h4 className="left">Dimensions</h4></div><div className="col"><h4>{photo?.dimensions?.width} x {photo?.dimensions?.height}</h4></div></div>
            <hr />
            <div className="row"><div className="col"><h4 className="left">Resolution</h4></div><div className="col"><h4>{photo?.resolution?.width} x {photo?.resolution?.height}</h4></div></div>
            <hr />
        </div>
        <div className="description">
            <h3>Description</h3>
            <h4>{photo?.description ? photo.description : "No description"}</h4>
        </div>
        <div className="delete">
            <button id="delete-button">Delete</button>
        </div>
    </div>
    );
}

export default Showcase;