import React, {Component} from 'react';
import Card from '@/components/card'
import { Provider, connect } from 'react-redux'
import { NextPage } from 'next/types';

const Grid = ({photos}: {photos: Photo[]}, {favorites}: {favorites: Photo[]} ): JSX.Element => {
 
    return (
        <div className="grid">
            <div>
                <div className='row'>
                    { photos && photos.map((photo: Photo) => <Card key={photo.id} photo={photo} /> )}
                    { favorites && favorites.map((favorite: Photo) => <Card key={favorite.id} photo={favorite} /> )}
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state: any) {
    return {
        photos: state.reducer.photos
    };
}

export default connect(mapStateToProps)(Grid);
