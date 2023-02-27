import {useAppDispatch} from '@/store/hooks';
import {connect} from 'react-redux'
import {addToFavorites, removePhoto} from '@/store/actionCreators';
import React, { useState } from 'react';

const Showcase = ({ photo }: { photo: Photo["id"] }) => {

    const [showAlert, setShowAlert] = useState(false);

    const dispatch = useAppDispatch();
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

    const toggleHeart = () => {
        setShowAlert(true);
    }

    return (
    <div className="showcase">
        <div className="display">
            <img src={photo?.url} alt={photo?.filename} className="image" />
            <div className="row display-panel">
                <div className="col-lg-10">
                    <h3 className="filename">{photo?.filename}</h3>
                    <h3 className="size">{formatBytes(photo?.sizeInBytes)}</h3>
                </div>
                <div className="col-lg-2 favorite-div">
                    {photo?.favorited ? <img className="heart" src="/heart-full.png" alt="Favorited" /> : <img className="heart" src="/heart-outline.png" alt="Not favorited" onClick={() => {toggleHeart(); dispatch(addToFavorites(photo))}}/>}
                </div>
            </div>
        </div>
        <div className="info">
            <h3>Information</h3>
            <hr />
            <div className="row"><div className="col"><h4 className="left">Uploaded by</h4></div><div className="col"><h4 className='right'>{photo?.uploadedBy}</h4></div></div>
            <hr />
            <div className="row"><div className="col"><h4 className="left">Last modified</h4></div><div className='col'><h4 className='right'>{formatDate(photo?.updatedAt)}</h4></div></div>
            <hr />
            <div className="row"><div className="col"><h4 className="left">Dimensions</h4></div><div className="col"><h4 className='right'>{photo?.dimensions?.width} x {photo?.dimensions?.height}</h4></div></div>
            <hr />
            <div className="row"><div className="col"><h4 className="left">Resolution</h4></div><div className="col"><h4 className='right'>{photo?.resolution?.width} x {photo?.resolution?.height}</h4></div></div>
            <hr />
        </div>
        <div className="description">
            <h3>Description</h3>
            <p id="description-text">{photo?.description ? photo.description : "No description"}</p>
        </div>
        <div className="delete">
            <button onClick={() => {dispatch(removePhoto(photo))}} id="delete-button">Delete</button>
        </div>
        { 
            showAlert && <div className="alert alert-primary" role="alert">
            Photo favorited
            </div>
        }
    </div>
    );
}

function mapStateToProps(state: any) {
    return {
        photo: state.reducer.photo
    };
}

export default connect(mapStateToProps)(Showcase);