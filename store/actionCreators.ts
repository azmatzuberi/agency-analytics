// Actions
import * as actionTypes from "./actionTypes"

// Adds photos to Redux
export function addPhotos(photos: Photos) {
    const action: PhotosAction = {
      type: actionTypes.ADD_PHOTOS,
      photos,
    }
    return (dispatch: DispatchPhotosType) => {
        dispatch(action)
    }
}

// Enters data when photo is clicked
export function selectPhoto(photo: Photo) {
    const action: PhotoAction = {
      type: actionTypes.SELECT_PHOTO,
      photo,
    }
    return function (dispatch: DispatchType) {
       return dispatch(action)
    }
}

// Deletes a photo from grid
export function removePhoto(photo: Photo) {
  const action: PhotoAction = {
    type: actionTypes.REMOVE_PHOTO,
    photo,
  }
  return function (dispatch: DispatchType) {
     return dispatch(action)
  }
}

// Adds the favorite images to Redux
export function getFavorites(favorites: Photos) {
  const action: FavoritesAction = {
    type: actionTypes.GET_FAVORITES,
    favorites,
  }
  return (dispatch: DispatchFavoritesType) => {
      dispatch(action)
  }
}

// Adds clicked image to favorites in Redux
export function addToFavorites(favorite: Photo) {
  const action: FavoriteAction = {
    type: actionTypes.ADD_TO_FAVORITES,
    favorite,
  }
  return (dispatch: DispatchFavoriteType) => {
      dispatch(action)
  }
}