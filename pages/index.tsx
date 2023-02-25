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
import photoReducer from "@/store/slice-b"

import {useAppSelector, useAppDispatch} from "@/store/hooks"
// import {selectPhotos} from "@/store/slice-b"
import { useEffect } from 'react';
import { addPhotos } from '@/store/actionCreators';
import React from 'react';

const Home = () => {
    const dispatch = useAppDispatch();
    React.useEffect = async () => {
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
    
    dispatch(addPhotos(photos))
  }, []

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
              <Grid />
            </div>
            <div className="showcase-column col-lg-4">
              <Showcase />
            </div>
          </div>
        </section>
      </>
  )
}

// export const getStaticProps: GetStaticProps = async () => { 
//   const response = await fetch('https://agencyanalytics-api.vercel.app/images.json', {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json',
//     },
//   })
//   const photos = await response.json()
//   photos.sort(function(a: Photo,b: Photo){
//     return +new Date(b.createdAt) - +new Date(a.createdAt);
//   });
  
//   return { props: { photos }}
// }

// Home.getInitialProps = async (ctx: any) => {
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const dispatch = useAppDispatch();
//   const response = await fetch('https://agencyanalytics-api.vercel.app/images.json', {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json',
//     },
//   })
//   const photos = await response.json()
//   photos.sort(function(a: Photo,b: Photo){
//     return +new Date(b.createdAt) - +new Date(a.createdAt);
//   });
  
//   dispatch(addPhotos(photos))
// }

export default Home