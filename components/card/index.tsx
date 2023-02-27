import {useAppDispatch} from "@/store/hooks"
import { selectPhoto } from '@/store/actionCreators';
import React from "react";

const Card = ({photo} : {photo: Photo}) => {

    const dispatch = useAppDispatch();
    function formatBytes(bytes: number, decimals = 2) {
        if (!+bytes) return '0 Bytes'
        const k = 1024
        const dm = decimals < 0 ? 0 : decimals
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
    }
    
    const selectPhotoCard = async (e: any, photo: Photo) => {
        dispatch(selectPhoto(photo))
        const allElements = document.getElementsByClassName('selected-card')
        const elem: any = document.getElementById(e.id)
        if(e.id === photo.id){
            Array.from(allElements).
            forEach((element) => {
                element.classList.remove('selected-card');
            })
            elem?.classList.add('selected-card')
        }
    }

    return (
    <div className="card-outline col-lg-3 col-md-4 col-sm-12" onClick={(e) => {selectPhotoCard(e.target, photo)}}>
        <div className={photo.id}>
            <div className="card">
                <div className="image-outline">
                    <figure>
                        <img id={photo.id} src={photo.url} alt={photo.filename} className="image" />
                    </figure>
                </div>
                <figcaption>
                    <h3 className="filename">{photo.filename}</h3>
                    <h3 className="size">{formatBytes(photo.sizeInBytes)}</h3>
                </figcaption>
            </div>
        </div>
    </div>
    );
}

export default Card;