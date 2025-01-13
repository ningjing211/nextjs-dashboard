'user client';

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


export default function Page() {
    return (
          <>
            <Head>
            <meta property="og:image:secure_url" content="/thumbnail-one-one.png" />
            <meta name="msapplication-TileImage" content="/thumbnail-one-one.png" />
            <link rel="icon" href="/thumbnail-one-one.png" sizes="32x32" />
            <link rel="apple-touch-icon" href="/thumbnail-one-one.png" />
            <title>One One</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
          <Script
            src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"
          />

        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
        />

        {/* <Script 
            src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/noframework.waypoints.min.js"
        /> */}

        <Script 
            src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"
        />

          {/* <Script
            src="https://unpkg.com/zdog@1.1.3/dist/zdog.dist.min.js"
          /> */}
          {/* <Script 
            src="/waypoints.js"
          /> */}
          
          {/* <Script
            src="/number_shows.js"
          /> */}
          <Script
            src="/wall.js"
          />
          <Script
            src="/header.js"
          />
          <div>
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