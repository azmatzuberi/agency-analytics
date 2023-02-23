import { createAsyncThunk } from '@reduxjs/toolkit';

export const GET_PHOTOS = 'Get Photos'

export const getPhotos = createAsyncThunk('redux/getPhotos', async dispatch => {
    await fetch('https://agencyanalytics-api.vercel.app/images.json', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
   .then(response => response.json())
   .then(response => console.log(JSON.stringify(response)))
   .then(response => { (dispatch: any) => { ( dispatch(response))}})
})