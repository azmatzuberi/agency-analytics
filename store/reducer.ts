import * as actionTypes from "./actionTypes"

const initialState: PhotoState = {
  photos: [],
}

const reducer = (
    state: PhotoState = initialState,
    action: PhotoAction
  ): PhotoState => {
    switch (action.type) {
      case actionTypes.ADD_PHOTO:
        const newPhoto: Photo = {
          id: Math.random(), // not really unique
        }
        return {
          ...state,
        }
      case actionTypes.REMOVE_PHOTO:
        const updatedPhoto: Photo[] = state.photos.filter(
          photo => photo.id !== action.photo.id
        )
        return {
          ...state,
          photos: updatedPhoto,
        }
    }
    return state
}
  
export default reducer