import Head from 'next/head';
import Script from 'next/script';
import Video from '@/app/origin/video';
import Header from '@/app/ideas/header';
import Intro from '@/app/ideas/intro';
import NumberShows from '@/app/ideas/number_shows';
import Wall from '@/app/ideas/wall';
import Items from '@/app/item/item';
import Featured from '@/app/ideas/featured';
import Footer from '@/app/ideas/footer';
// import BigLeapWrapper from '@/app/components/BigLeapWrapper';

export default function Page() {
    return (
          <>
            <Head>
            <link rel="icon" href="/thumbnail-one-one.png" sizes="32x32" />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700;800;900&display=swap" rel="stylesheet" />
            
            <link rel="apple-touch-icon" href="/thumbnail-one-one.png" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap" rel="stylesheet"/>
            <title>One One</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
          <Script src="https://www.youtube.com/iframe_api" />
          <Script
            src="/header.js"
          />
          <div>
          {/* <BigLeapWrapper /> */}
          <Header />
          <Video />
          <div className="front-page-div p-6">
            <Intro />
            <Wall />
            {/* <NumberShows /> */}
            {/* <Items /> */}
            <Featured />
          </div>
          <Footer />
          </div>
          </>
    );
  }