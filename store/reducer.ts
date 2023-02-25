import * as actionTypes from "./actionTypes"

const initialState: PhotoState = {
  photos: [],
  photo: {
    id: "fce11e73-c529-4aae-a405-4aadb9035372",
    url: "https://agencyanalytics-api.vercel.app/images/15.jpg",
    filename: "so_iceland_keira.jpg",
    createdAt: "2018-10-21T16:11:11.737Z",
    sizeInBytes: 4076439,
    description: "",
    uploadedBy: "Pauline Kessler",
    dimensions: {height: 4270, width: 6400},
    resolution: {height: 72, width: 72},
    updatedAt: "2022-06-26T20:14:53.357Z",
    favorited: false,
  }
}

const reducer = (
    state: PhotoState = initialState,
    action: any
  ): any => {
    switch (action.type) {
        
        case actionTypes.ADD_PHOTOS:
            const photos = action.photos
            return {
              ...state,
              photos
            }
        case actionTypes.REMOVE_PHOTO:
            const updatedPhoto: Photo = state.photos.filter(
            photo => photo.id !== action.photo.id
            )
        return {
          ...state,
          photos: updatedPhoto,
        }
        case actionTypes.SELECT_PHOTO:
            const selectPhoto: Photo = action.photo
        return {
          ...state,
          photo: selectPhoto,
        }
    default:
        return state
    }
}
  
export default reducer