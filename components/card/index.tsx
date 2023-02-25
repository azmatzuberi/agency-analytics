import {useAppDispatch} from "@/store/hooks"
import { selectPhoto } from '@/store/actionCreators';

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
    
    const selectPhotoCard = async (e: EventTarget) => {
        console.log(e.id)
        dispatch(selectPhoto(e.id))
        
    }

    return (
    <div className="card-outline col-lg-3" onClick={(e) => {selectPhotoCard(e.target)}}>
        <div className={photo.id}>
            <div className="card">
                <img id={photo.id} src={photo.url} alt={photo.filename} className="image" />
                <h3 className="filename">{photo.filename}</h3>
                <h3 className="size">{formatBytes(photo.sizeInBytes)}</h3>
            </div>
        </div>
    </div>
    );
}

export default Card;