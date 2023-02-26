import React, {Component, FC} from 'react';
import Card from '@/components/card'
import { connect } from 'react-redux'

const PhotoGrid = ({photos}: {photos: Photos}) => {
 
    return (
        <div className="grid">
            <div>
                <div className='row'>
                    { photos && photos.map((photo: Photo) => <Card key={photo.id} photo={photo} /> )}
                </div>
            </div>
        </div>
    )

}

function mapStateToProps(state: any) {
    return {
        photos: state.reducer.photos,
    };
}

export default connect(mapStateToProps)(PhotoGrid);
