// Imports
import {useAppDispatch} from '@/store/hooks';
import {connect} from 'react-redux'
import {addToFavorites, removePhoto} from '@/store/actionCreators';
import React, { useState } from 'react';

// Component aside to display file details
const Showcase = ({ photo }: { photo: Photo["id"] }) => {

    const [showAlert, setShowAlert] = useState(false);
    const [showAlertDelete, setShowAlertDelete] = useState(false);

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

    // Shows alert when pressing heart
    const toggleHeart = () => {
        setShowAlert(true);
    }

    // Shows alert when deleted
    const deleteAlert = () => {
        setShowAlertDelete(true);
    }

    return (
    <div className="showcase">
        { 
            showAlert && <div className="alert alert-primary" role="alert">
                Photo favorited
            </div>
        }
        { 
            showAlertDelete && <div className="alert alert-danger" role="alert">
                Photo Deleted
            </div>
        }
        <div className="display">
            <figure>
                <img src={photo?.url} alt={photo?.filename} className="image" />
            </figure>
            <div className="row display-panel">
                <div className="col-lg-10">
                    <h3 className="filename">{photo?.filename}</h3>
                    <h3 className="size">{formatBytes(photo?.sizeInBytes)}</h3>
                </div>
                <div className="col-lg-2 favorite-div">
                    {photo?.favorited ? <img className="heart" src="/heart-full.png" alt="Favorited" /> : 
                    <img 
                        className="heart" 
                        src="/heart-outline.png" 
                        alt="Not favorited" 
                        onClick={() => {
                            toggleHeart(); 
                            dispatch(addToFavorites(photo))
                        }}/>}
                </div>
            </div>
        </div>
        <summary>
            <div className="info">
                <h3>Information</h3>
                <hr />
                <div className="row">
                    <div className="col">
                        <h4 className="left">Uploaded by</h4>
                    </div>
                    <div className="col">
                        <h4 className='right'>{photo?.uploadedBy}</h4>
                        </div>
                    </div>
                    <hr />
                    <div className="row"><div className="col">
                        <h4 className="left">Last modified</h4>
                    </div>
                    <div className='col'>
                        <h4 className='right'>{formatDate(photo?.updatedAt)}</h4>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col">
                        <h4 className="left">Dimensions</h4>
                    </div>
                    <div className="col">
                        <h4 className='right'>{photo?.dimensions?.width} x {photo?.dimensions?.height}</h4>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col">
                        <h4 className="left">Resolution</h4>
                    </div>
                    <div className="col">
                        <h4 className='right'>{photo?.resolution?.width} x {photo?.resolution?.height}</h4>
                    </div>
                </div>
                <hr />
            </div>
        </summary>
        <summary>
            <div className="description">
                <h3>Description</h3>
                <p id="description-text">
                    {photo?.description ? photo.description : "No description"}
                </p>
            </div>
        </summary>
        <div className="delete">
            <button onClick={() => {dispatch(removePhoto(photo)); deleteAlert()}} id="delete-button">Delete</button>
        </div>
    </div>
    );
}

// Data coming in with specific photo data
function mapStateToProps(state: any) {
    return {
        photo: state.reducer.photo
    };
}

export default connect(mapStateToProps)(Showcase);