import Head from 'next/head'
import Container from '@/components/container'
import Showcase from '@/components/showcase';
import {useAppDispatch} from "@/store/hooks"
import {addPhotos, getFavorites} from '@/store/actionCreators';
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
      photos.sort(function(a: any,b: any): any {
        return +new Date(b.createdAt) - +new Date(a.createdAt);
      });
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