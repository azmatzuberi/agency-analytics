import React, {Component} from 'react';
import Card from '@/components/card'
import { Provider, connect } from 'react-redux'
// import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { NextPage } from 'next/types';
// import { wrapper } from '@/redux/store';

const Grid = ({photos}: {photos: Photo[]} ): JSX.Element => {
 
    return (
        <div className="grid">
            <div>
                <div className='row'>
                    { photos.map((photo: Photo) => <Card key={photo.id} photo={photo} idCode={photo.id} /> )}
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
// export default Grid

