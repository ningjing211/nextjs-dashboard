import '@/app/ui/ideas/footer.css';

export default function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer__addr">
                <h1 className="footer__logo">
                <a href="/">
                    萬萬想不到
                </a>
                </h1>
                <h2>
                    Contact
                </h2>
                <br/>
                <h2>
                    總管理部
                </h2>
                <address className="address">
                    高雄市鼓山區明誠四路288號6樓 
                    +886 (07) 555-0123
                    <br />
                    <br/>

                </address>
                <h2>
                    示範店
                </h2>
                <address className="address">
                    高雄市三民區博愛路190號1樓 
                    
                    <br />
                    <br/>
                    <a
                    className="footer__btn"
                    href="mailto:pmp@conflux-tech.com"
                    >
                    Email Us
                    </a>
                </address>
                
                </div>
                <ul className="footer__nav">
                <li className="nav__item">
                    <h2 className="nav__title">
                    Pages
                    </h2>
                    <ul className="nav__ul">
                    <li>
                        <a href="/philosophy">
                        Philosophy
                        </a>
                    </li>
                    <li>
                        <a href="/core_value">
                        Value
                        </a>
                    </li>
                    <li>
                        <a href="/roots">
                        Roots
                        </a>
                    </li>
                    <li>
                        <a href="/vision">
                        Vision
                        </a>
                    </li>
                    </ul>
                </li>
                <li className="nav__item nav__item--extra">
                    <h2 className="nav__title">
                    Social Media
                    </h2>
                    <ul className="nav__ul nav__ul--extra">
                    <li>
                        <a href="#">
                        Facebook
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        Instagram
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        Thread
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        Line
                        </a>
                    </li>
      
                   
                    </ul>
                </li>
                <li className="nav__item">
                    <h2 className="nav__title">
                    Legal
                    </h2>
                    <ul className="nav__ul">
                    <li>
                        <a href="#">
                        Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        Terms of Use
                        </a>
                    </li>
                    </ul>
                </li>
                </ul>
                <div className="legal">
                <p className="legalword">
                    © 2024 Ever Changing All rights reserved.
                </p>
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
            </footer>
            </div>
    );}

