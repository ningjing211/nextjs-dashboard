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
                        我們正在尋找夥伴
                        </h1>
                        <p>
                        致敬品牌概念美感與文化美學，結合當代AI技術的新創公司，一個公司含有三個薪水袋，眼光放在超越現狀的故事。
                        </p>
                        <a
                        className="btn"
                        href="#"
                        >
                        聯絡我們
                        </a>
                    </header>
                    <div className="top-box top-box-a">
                        <h4>
                        Membership
                        </h4>
                        <p className="price">
                        行銷經理
                        </p>
                        <a
                        className="btn"
                        href=""
                        >
                        應徵聯絡
                        </a>
                    </div>
                    <div className="top-box top-box-b">
                        <h4>
                        Pro Membership
                        </h4>
                        <p className="price">
                        行政助理
                        </p>
                        <a
                        className="btn"
                        href=""
                        >
                        應徵聯絡
                        </a>
                    </div>
                    </section>
                    <section className="boxes">
                    <div className="box box-1">
                        <i className="fas fa-chart-pie fa-4x" />
                        <h3>
                        內場服務人員
                        </h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?
                        </p>
                    </div>
                    <div className="box box-2">
                        <i className="fas fa-globe fa-4x" />
                        <h3>
                        外場服務人員
                        </h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?
                        </p>
                    </div>
                    <div className="box box-3">
                        <i className="fas fa-cog fa-4x" />
                        <h3>
                        萬萬執行店長
                        </h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?
                        </p>
                    </div>
                    {/* <div className="box">
                        <i className="fas fa-users fa-4x" />
                        <h3>
                        萬萬線上客服
                        </h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?
                        </p>
                    </div> */}
                    </section>
                    {/* <section className="info">
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
                    </section> */}
                    <section className="portfolio">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    {/* <img
                        alt=""
                        src="https://picsum.photos/200/200"
                    />
                    <img
                        alt=""
                        src="https://picsum.photos/200/200"
                    /> */}

                    </section>

                </div>
                </div>
            {/* <Parallax /> */}
        </div>
)};