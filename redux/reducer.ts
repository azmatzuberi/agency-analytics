import { Photos } from './state'
import { getPhotos } from './actions'
import { createReducer } from '@reduxjs/toolkit';

const initialState: PhotoState = {
  photos: [],
}

// export const reducer = (state = initialState, action: any) => {
//   switch (action.type) {
//     case getPhotos:
//       return Object.assign({}, state, { photo: action.photo })
//     default: return state
//   }
// }

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getPhotos.pending, (state) => {

    })
    .addCase(getPhotos.fulfilled, (state, { payload }) => {

    })
    .addCase(getPhotos.rejected, (state) => {

    });
});

export default reducer;