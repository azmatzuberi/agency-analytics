import * as actionTypes from "./actionTypes"

export function addPhotos(photos: Photos) {
    const action: PhotoAction = {
        type: actionTypes.ADD_PHOTOS,
        photos,
    }
    return (dispatch: DispatchType) => {
        dispatch(action)
    }
}

export function selectPhoto(photo: Photo) {
    const action: PhotoAction = {
        type: actionTypes.SELECT_PHOTO,
        photo,
    }
    return function (dispatch: DispatchType) {
       return dispatch(action)
    }
}

export function simulateHttpRequest(action: PhotoAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}
