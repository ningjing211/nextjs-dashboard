'user client';

import Head from 'next/head';
import Script from 'next/script';
import Video from '@/app/origin/video';
import Header from '@/app/ideas/header';
import Intro from '@/app/ideas/intro';
import NumberShows from '@/app/ideas/number_shows';
import Items from '@/app/item/item';
import Featured from '@/app/ideas/featured';
import Footer from '@/app/ideas/footer';


export default function Page() {
    return (
          <div> 
            <Head>
              <title>This page has a title 🤔</title>
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

        <Script 
            src="https://cdnjs.cloudflare.com/ajax/libs/zepto/1.2.0/zepto.min.js"
        />

          {/* <Script
            src="https://unpkg.com/zdog@1.1.3/dist/zdog.dist.min.js"
          /> */}
          {/* <Script 
            src="/waypoints.js"
          /> */}
          
          <Script
            src="/number_shows.js"
          />

          <div className="front-page-div">
            <Header />
            <Video />
            <Intro />
            <NumberShows />
            <Items />
            <Featured />
            <Footer />
          </div>

          </div>
    );
  }