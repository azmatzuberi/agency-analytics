import * as actionTypes from "./actionTypes"
import { Dispatch } from "redux";

export function addPhotos(photos: Photos) {
    console.log("1.", photos)
    const action: PhotoAction = {
        type: actionTypes.ADD_PHOTOS,
        photos,
    }
    return (dispatch: DispatchType) => {
        dispatch(action)
    }
}

export function removePhoto(photo: Photo) {
  const action: PhotoRemoveAction = {
    type: actionTypes.REMOVE_PHOTO,
    photo,
  }
//   return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: PhotoAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}
