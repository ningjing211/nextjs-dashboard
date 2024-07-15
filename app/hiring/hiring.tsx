import '@/app/ui/hiring/hiring.css';
import Parallax from '@/app/hiring/parallax';
import { library, icon } from '@fortawesome/fontawesome-svg-core';

export default function Hiring() {
    return (
        <div>
            <div>
                <div className="wrapper">

                    <section className="top-container">
                    <header className="showcase">
                        <h1>
                        我們在尋找夥伴
                        </h1>
                        <p>
                        致敬品牌概念美感與文化美學，結合當代AI技術的新創公司，一個公司含有三個薪水袋，眼光放在超越現狀的故事。
                        </p>
                        <a
                        className="btn"
                        href="#"
                        >
                        Read More
                        </a>
                    </header>
                    <div className="top-box top-box-a">
                        <h4>
                        Membership
                        </h4>
                        <p className="price">
                        $199/mo
                        </p>
                        <a
                        className="btn"
                        href=""
                        >
                        Buy Now
                        </a>
                    </div>
                    <div className="top-box top-box-b">
                        <h4>
                        Pro Membership
                        </h4>
                        <p className="price">
                        $299/mo
                        </p>
                        <a
                        className="btn"
                        href=""
                        >
                        Buy Now
                        </a>
                    </div>
                    </section>
                    <section className="boxes">
                    <div className="box">
                        <i className="fas fa-chart-pie fa-4x" />
                        <h3>
                        Analytics
                        </h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?
                        </p>
                    </div>
                    <div className="box">
                        <i className="fas fa-globe fa-4x" />
                        <h3>
                        Marketing
                        </h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?
                        </p>
                    </div>
                    <div className="box">
                        <i className="fas fa-cog fa-4x" />
                        <h3>
                        Development
                        </h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?
                        </p>
                    </div>
                    <div className="box">
                        <i className="fas fa-users fa-4x" />
                        <h3>
                        Support
                        </h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?
                        </p>
                    </div>
                    </section>
                    <section className="info">
                    <img
                        alt=""
                        src="https://image.ibb.co/j4Qz8x/pic1.jpg"
                    />
                    <div>
                        <h2>
                        Your Business On The Web
                        </h2>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae alias reiciendis deleniti possimus nemo non repellendus?          Quae atque vero modi quidem! Autem cupiditate fugit doloribus ad amet, asperiores provident commodi.
                        </p>
                        <a
                        className="btn"
                        href="#"
                        >
                        Learn More
                        </a>
                    </div>
                    </section>
                    <section className="portfolio">
                    <img
                        alt=""
                        src="https://picsum.photos/200/200"
                    />
                    <img
                        alt=""
                        src="https://picsum.photos/200/200"
                    />
                    <img
                        alt=""
                        src="https://picsum.photos/200/200"
                    />
                    <img
                        alt=""
                        src="https://picsum.photos/200/200"
                    />
                    <img
                        alt=""
                        src="https://picsum.photos/200/200"
                    />
                    <img
                        alt=""
                        src="https://picsum.photos/200/200"
                    />
                    <img
                        alt=""
                        src="https://picsum.photos/200/200"
                    />
                    <img
                        alt=""
                        src="https://picsum.photos/200/200"
                    />
                    <img
                        alt=""
                        src="https://picsum.photos/200/200"
                    />
                    </section>
                    <footer>
                    <p>
                        GridBiz © 2018
                    </p>
                    </footer>
                </div>
                </div>
            {/* <Parallax /> */}
        </div>
)};