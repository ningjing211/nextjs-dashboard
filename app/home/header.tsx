import '@/app/ui/main-outline.css';

import Video from '@/app/home/video';
import Philosophy from '@/app/home/philosophy';
import Vision from '@/app/home/vision';
import Work from '@/app/home/work';
import GetInTouch from '@/app/home/getintouch';
import Service from '@/app/home/service';
import Parallax from '@/app/home/parallax';


export default function Header() {
    return (
        <div className="w-full h-full"> 

            <nav>
                <a href="#video" data-anchor="video">show</a>
                <a href="#origin" data-anchor="origin">Origin</a>
                <a href="#philosophy" data-anchor="philosophy">Philosophy</a>
                <a href="#vision" data-anchor="vision">Vision</a>
                <a href="#work" data-anchor="work">Work</a>
                
                {/* <a href="#service" data-anchor="service">Service</a>
                <a href="#getintouch" data-anchor="getintouch">Getintouch</a> */}
                <div className="progress-bar"></div>
            </nav>


            <section id="video" className="videoSection">
                <Video />
            </section>

            
            <Parallax />
            
            

            <section id="philosophy">
                <Philosophy />
            </section>
            
            <section id="vision">
                <Vision />
            </section>

            <section id="work">
                <Work />
            </section>
{/* 
            <section id="service">
                <Service />
            </section>
            
            <section id="getintouch">
                <GetInTouch />
            </section> */}

        </div>
    );
  }