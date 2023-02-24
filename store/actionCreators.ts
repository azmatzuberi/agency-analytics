import * as actionTypes from "./actionTypes"

export function addPhotos(photos: Photos) {
  const action: PhotoAction = {
    type: actionTypes.ADD_PHOTOS,
    photos,
  }

  return simulateHttpRequest(action)
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
