"use client";
import '@/app/ui/ideas/footer.css';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            
            <div className='footer-bottom-wrap'>
                <button onClick={scrollToTop} className="back-to-top-btn">
                    <span className="triangle-up"></span>
                    Top
                </button>
            </div>

            <footer className="footer">
                <div className="footer-group-left">
                    <div className="footer__addr">
                        <h1 className="footer__logo">
                            <a href="/">
                                <img src="/footer-logo.png" alt="Footer Logo" />
                            </a>
                        </h1>
                        <br />
                        <div className="footer-outer-wrap">
                            <div className="footer-item-wrap">
                                <h2>總管理部</h2>
                                <address className="address">
                                    高雄市鼓山區明誠四路288號6樓
                                    <br />
                                    +886 (07) 555-0123
                                    <br />
                                </address>
                            </div>
                            <div className="footer-item-wrap">
                                <h2>城市的景點</h2>
                                <address className="address">
                                    高雄市三民區博愛一路190號1樓
                                    <br />
                                    <br />
                                </address>
                            </div>
                        </div>
                    </div>
                    <ul className="footer__nav">
                        <li className="nav__item nav__item--extra">
                            <h2 className="nav__title">Social Media</h2>
                            <ul className="nav__ul nav__ul--extra">
                                <li><a href="https://www.facebook.com/profile.php?id=61575564440817">Facebook</a></li>
                                <li><a href="https://www.instagram.com/oneone_liquid_gallery?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExTm5xQkw1TWoyOGd2NlRrUwEeCZHT7NKCENZGOHeDqHcK06YMEx9cYQD_H2HUWkVALzaMDXgdOuQ_7_dRvS0_aem_kDFyHiVH4-dR_zRZLTPnng">Instagram</a></li>
                                <li><a href="https://www.threads.com/@oneone_liquid_gallery?xmt=AQF0t1t4bxGVMpk9vgqUm1l2UOpRJ91IT1kfy9vor7gLlQo">Thread</a></li>
                                <li><a href="https://line.me/R/share?text=ONEONE%20Liquid%20Gallery&url=https://www.oneone.global/orderMenu">Line</a></li>
                            </ul>
                        </li>
                        {/* <li className="nav__item">
                            <h2 className="nav__title">Legal</h2>
                            <ul className="nav__ul nav__ul--extra">
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Terms of Use</a></li>
                            </ul>
                        </li> */}
                    </ul>
                </div>
                <div className="footer-group-right">
                    <div className="footer-btn-group">
                        <a className="footer__btn" href="mailto:pmp@conflux-tech.com">
                            Contact
                        </a>
                        
                    </div>
                    <div className="footer-legal-group">
                        <div className="legal">
                            <div className="legal__links">
                                <span>
                                    All rights reserved.{' '}
                                    <span className="heart">
                                        © 2024 Ever Changing
                                    </span>
                                    {' '}
                                </span>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="back-to-top-container">
                    
                </div>
            </footer>
        </div>
    );
}
