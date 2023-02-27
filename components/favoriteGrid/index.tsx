// Imports
import React from 'react';
import Card from '@/components/card'
import { connect } from 'react-redux'

// Favorites grid
const FavoriteGrid = ({favorites} : {favorites: Photos}) => {
    return (
        <div className="grid">
            <div className='row'>
                {favorites && favorites.map((photo: Photo) => <Card key={photo.filename} photo={photo} />)}
            </div>
        </div>
    )
}

// Data for favorite photos coming in
function mapStateToProps(state: any) {
    return {
        favorites: state.reducer.favorites
    };
}

export default connect(mapStateToProps)(FavoriteGrid);
