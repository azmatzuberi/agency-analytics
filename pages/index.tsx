import { NextPage } from 'next/types';
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Header from '@/components/header'
import { getPhotos } from '@/redux/actions';
import Grid from '@/components/grid'
import { Provider } from 'react-redux';
import Showcase from '@/components/showcase';

type Props = {
  photos: Photo[]
}


const Home = ({ photos }: Props) => {
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
            <Grid data={photos}/>
          </div>
          <div className="showcase-column col-lg-4">
            <Showcase photo={photos[0]} />
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
  console.log(photos)
  return { props: { photos }}
}

export default Home