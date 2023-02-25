import * as actionTypes from "./actionTypes"

const initialState: PhotoState = {
  photos: [],
}

const reducer = (
    state: PhotoState = initialState,
    action: any
  ): any => {
    switch (action.type) {
        
      case actionTypes.ADD_PHOTOS:
        const data = action.photos
        return {
          ...state,
          photos: data
        }
      case actionTypes.REMOVE_PHOTO:
        const updatedPhoto: Photo[] = state.photos.filter(
          photo => photo.id !== action.photo.id
        )
        return {
          ...state,
          photos: updatedPhoto,
        }
    default:
        return state
    }
}
  
export default reducer