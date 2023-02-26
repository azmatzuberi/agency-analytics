import * as actionTypes from "./actionTypes"
import store from "@/store/store-update"

export function addPhotos(photos: Photos) {
    const action: PhotosAction = {
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

export function removePhoto(photo: Photo) {
  const action: PhotoAction = {
    type: actionTypes.REMOVE_PHOTO,
    photo,
  }
  return function (dispatch: DispatchType) {
     return dispatch(action)
  }
}

export function getFavorites(favorites: Photos) {
  const action: FavoritesAction = {
    type: actionTypes.GET_FAVORITES,
    favorites,
  }
  return (dispatch: DispatchType) => {
      dispatch(action)
  }
}

export function addToFavorites(favorite: Photo) {
  favorite.favorited = true
  const action: FavoriteAction = {
    type: actionTypes.ADD_TO_FAVORITES,
    favorite,
  }
  return (dispatch: DispatchType) => {
      dispatch(action)
  }
}