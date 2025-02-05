'user client';

import Head from 'next/head';
import Script from 'next/script';
import Header from '@/app/ideas/header';
import Footer from '@/app/ideas/footer';
import CoreValue from '@/app/core_value/core_value';

export default function Page() {
    return (
          <> 
            <Head>
            <meta property="og:image:secure_url" content="/thumbnail-one-one.png" />
            <meta name="msapplication-TileImage" content="/thumbnail-one-one.png" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="萬萬奶昔 One One" />
            <meta property="og:site_name" content="www.oneone.global"></meta>
            <meta property="og:url" content="https://www.oneone.global/"></meta>
            <meta property="og:image" content="/link-thumbnail.png"></meta>
            <meta property="og:image:width" content="1200"></meta>
            <meta property="og:image:height" content="600"></meta>
            <meta property="og:locale" content="zh_TW"></meta>
            <meta name="description" content="每一杯奶昔都是調皮的小精靈，帶著獨特風味和趣味，準備驚喜你味蕾。萬萬不僅僅是一個名字，而是一種生活態度。每個細節都灑滿美學追求，從店內設計到產品包裝，每一吋都展現我們對生活的熱愛。"></meta>
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
          <Script
            src="/header.js"
          />
          {/* <Script
            src="https://unpkg.com/zdog@1.1.3/dist/zdog.dist.min.js"
          />
          <Script
            src="/warp.js"
          /> */}
          <div>
          {/* <p>Dashboard Page</p> */}
          <Header />
          <div className="md:p-6">
            <CoreValue />
            
          </div>
          <Footer />  
          </div>
          </>
    );
  }