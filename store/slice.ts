import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {RootState} from "@/store/store-update"

const initialState: PhotoState = {
  photos: []
}

export const photoSlice = createSlice({
    name: 'photos',
    initialState: {
        photos: []
    },
    reducers: {
        addPhotos: (state, action: PayloadAction<Photos>) => {
            const photos = action.payload;
            state.photos.push(photos);
        },
        removePhoto: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            const photos = state.photos.filter((photo) => photo.id !== id);
            state.photos = photos;
        }
    },
})

// actions
export const {addPhotos, removePhoto} = photoSlice.actions 

// selectors
export const selectPhotos = (state: RootState) => state.photos.photos

export default photoSlice.reducer
