/*
Author: Azmat Zuberi
Date: Feb. 27, 2023
App Name: AgencyAnalytics - Code Challenge
*/

// Imports
import Head from 'next/head'
import Container from '@/components/container'
import Showcase from '@/components/showcase';
import {useAppDispatch} from "@/store/hooks"
import {addPhotos, getFavorites} from '@/store/actionCreators';
import React from 'react';

// Main component
const Home = () => {
    const dispatch = useAppDispatch();

    // Async call to API server
    React.useEffect = async () => {
      const response = await fetch('https://agencyanalytics-api.vercel.app/images.json', {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
        },
      })
      const photos = await response.json()
      photos.sort(function(a: Photo,b: Photo): number {
        return +new Date(b.createdAt.toString()) - +new Date(a.createdAt.toString());
      });

      // Dispatches and sorts of data
      dispatch(addPhotos(photos))
      const favorites = photos.filter((favorite: Photo) => favorite.favorited === true);
      dispatch(getFavorites(favorites))
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
              <Container />
            </div>
            <div className="showcase-column col-lg-4">
              <aside>
                <Showcase />
              </aside>
            </div>
          </div>
        </section>
      </>
  )
}

export default Home