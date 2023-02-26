import React from 'react';
import Card from '@/components/card'
import { connect } from 'react-redux'

const FavoriteGrid = ({favorites}: {favorites: Photos}) => {
    return (
        <div className="grid">
            <div>
                <div className='row'>
                    {favorites && favorites.map((photo: Photo) => <Card key={photo.filename} photo={photo} />)}
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state: any) {
    return {
        favorites: state.reducer.favorites
    };
}

export default connect(mapStateToProps)(FavoriteGrid);
