import { NextPage } from 'next/types';
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Header from '@/components/header'
import Grid from '@/components/grid'
import Showcase from '@/components/showcase';
import { applyMiddleware, Store } from "redux";
import { connect, Provider  } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
// import { store }  from "@/store/store-update"
import thunk from "redux-thunk";
import reducer from "@/store/reducer";
import photoReducer from "@/store/slice"

import {useAppSelector, useAppDispatch} from "@/store/hooks"
import {selectPhotos} from "@/store/slice"
import { useEffect } from 'react';
import { addPhotos } from '@/store/actionCreators';

type Props = {
  photos: Photos
}

// Add Photos action
// import { addPhotos } from '@/store/actionCreators';

// const store: Store<PhotoState, PhotoAction> & {
//   dispatch: DispatchType;
// } = configureStore({reducer});

const Home = ({ photos }: Props) => {
  const store = configureStore({reducer});
  // const photo = useAppSelector(selectPhotos);
  const dispatch = useAppDispatch();
  // useEffect(() => {
    setTimeout(() => {
      dispatch(addPhotos(photos))
      console.log("HEY", photos)
    }, 2000)
  // },[])

  return (
    <>
      <Head>
        <title>AgencyAnalytics</title>
        <meta name="description" content="Generated for code challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <section className='container'>
          <div className='row'>
            <div className="grid-column col-lg-8">
              <Header />
              { photos && 
                <Grid data={photos}/>
              }
            </div>
            <div className="showcase-column col-lg-4">
              { photos && 
              <Showcase photo={photos[0]} />
              }
            </div>
          </div>
        </section>
      </>
  )
}

export const getStaticProps: GetStaticProps = async () => { 
  const response = await fetch('https://agencyanalytics-api.vercel.app/images.json', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  })
  const photos = await response.json()
  photos.sort(function(a: Photo,b: Photo){
    return +new Date(b.createdAt) - +new Date(a.createdAt);
  });
  
  return { props: { photos }}
}

// const mapStateToProps = function(state: any) {
//   return {
//     photos: state.photos,
//   }
// }

export default Home