// Imports
import React, {Component, FC} from 'react';
import Card from '@/components/card'
import { connect } from 'react-redux'

// Photos grid
const PhotoGrid = ({photos}: {photos: Photos}) => {
    return (
        <div className="grid">
            <div className='row grid-row'>
                { photos && photos.map((photo: Photo) => <Card key={photo.id} photo={photo} /> )}
            </div>
        </div>
    )
}

// Data for photos coming in
function mapStateToProps(state: any) {
    return {
        photos: state.reducer.photos,
    };
}

export default connect(mapStateToProps)(PhotoGrid);
