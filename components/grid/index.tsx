import React, {Component} from 'react';
import Card from '@/components/card'
import { Provider, connect } from 'react-redux'
// import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { NextPage } from 'next/types';
// import { wrapper } from '@/redux/store';

const Grid = ({data}: {data: Photo[]} ): JSX.Element => {
 
    return (
        <div className="grid">
            <div>
                <div className='row'>
                    { data.map((photo: Photo) => <Card key={photo.id} photo={ photo } /> )}
                </div>
            </div>
        </div>
    );
}

export default Grid

