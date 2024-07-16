import '@/app/ui/hiring/hiring.css';
import Parallax from '@/app/hiring/parallax';
import { library, icon } from '@fortawesome/fontawesome-svg-core';
import SparklesTextDemo from '@/app/hiring/magicUI';
import SparklesText from "@/components/magicui/sparkles-text";


export default function Hiring() {
    return (
        <div>
            <div>
                <div className="wrapper">

                    <section className="top-container">
                    <header className="showcase">
                        {/* <h1>
                        我們正在尋找夥伴
                        </h1> */}
                        {/* <SparklesTextDemo /> */}
                        <SparklesText text="我們正在尋找夥伴" colors={{first: '#edd790', second: '#8efc7b'}} className="showcase-title" sparklesCount={7} />;
                        <p>
                        致敬品牌概念美感與文化美學，結合當代AI技術的新創公司，不僅在視覺和技術上追求卓越，更以美感和文化為核心，傳遞一種生活方式和態度。
公司有獨特的薪酬結構，包含三個薪水袋，鼓勵員工多樣化發展和全方位成長。每個薪水袋代表不同的激勵方向，包括基本薪資、績效獎金以及創新愛的激勵。這樣的結構不僅激勵員工在專業領域內精益求精，還鼓勵跨領域學習和創新，實現個人和公司的共同成長，還包含教練的愛。
                        </p>

                    </header>

                    </section>
                    <section className="boxes">
                    <div className="box box-1">
                        <i className="fas fa-chart-pie fa-4x" />
                        <h1 className="job-sec-caption">現場服務人員</h1>
                        {/* <SparklesText text="現場服務人員" className="job-sec-caption" sparklesCount={4}/> */}
                        
                        <div className="job-sec-title">工作內容</div>
                        <div className="job-sec">
                            <p>
                            嘿~~萬萬想不到的工作內容，期待您來發揮創意
                            一展長才，讓所有想像得到的可能
                            變成充滿日常的現實
                            也有一群對於工作堅持、熱衷、開朗的開發團隊，
                            我們還有無止境的熱情，
                            在這裏工作可以享受到自由不被拘束，
                            可以完全展現愉悅的調皮創意。
                            </p>
                        </div>

                        <div className="job-sec-title">工作需求</div>
                        <div className="job-sec">
                            <p>迎接顧客：以親切和專業的態度接待每一位進店的顧客，解答他們的疑問，並提供相關資訊。</p>
                            <p>提供優質服務：根據顧客的需求，提供個性化的建議和產品介紹，確保他們有愉快的購物體驗。</p>
                            <p>處理問題：快速、有效地解決顧客在購物過程中遇到的問題和困難，維護良好的顧客關係。</p>
                            <p>維護店面：保持店面的整潔和美觀，確保所有產品都陳列整齊並具吸引力。</p>
                            <p>學習與成長：不斷學習和掌握最新的產品知識和服務技巧，以提升自己的專業能力和服務水平。</p>
                        </div>

                        <div className="job-sec-title">我們要找具備以下特質的人</div>
                        <div className="job-sec">
                            <p>怎樣的人適合萬萬?</p>
                            <p>1.幽默、笑點低，個性高，興趣多元，笑是我們釋放壓力的方式。</p>
                            <p>2.自主性高、能自律 - 穿衣服的規範少，彼此尊重高度自律是我們的準則。</p>
                            <p>3.勇於表達 - 我們不喜歡臆測，我們喜歡效率做對的事情。</p>
                            <p>4.口條清楚、表達能力佳。</p>
                            <p>5.具備責任感、態度積極、效率、穩定性高、善溝通協調。</p>
                        </div>

                    </div>
                    <div className="box box-2">
                        <i className="fas fa-globe fa-4x" />
                        <h1 className="job-sec-caption">萬萬執行店長</h1>
                        {/* <SparklesText text="萬萬執行店長" className="job-sec-caption" sparklesCount={7}/> */}
                        <div className="job-sec-title">工作內容</div>
                        <div className="job-sec">
                            <p>
                            嘿~~萬萬想不到的工作內容，期待您來發揮創意
                            一展長才，讓所有想像得到的可能
                            變成充滿日常的現實
                            也有一群對於工作堅持、熱衷、開朗的開發團隊，
                            我們還有無止境的熱情，
                            在這裏工作可以享受到自由不被拘束，
                            可以完全展現愉悅的調皮創意。
                            </p>
                        </div>

                        <div className="job-sec-title">工作需求</div>
                        <div className="job-sec">
                            <p>迎接顧客：以親切和專業的態度接待每一位進店的顧客，解答他們的疑問，並提供相關資訊。</p>
                            <p>提供優質服務：根據顧客的需求，提供個性化的建議和產品介紹，確保他們有愉快的購物體驗。</p>
                            <p>處理問題：快速、有效地解決顧客在購物過程中遇到的問題和困難，維護良好的顧客關係。</p>
                            <p>維護店面：保持店面的整潔和美觀，確保所有產品都陳列整齊並具吸引力。</p>
                            <p>學習與成長：不斷學習和掌握最新的產品知識和服務技巧，以提升自己的專業能力和服務水平。</p>
                        </div>

                        <div className="job-sec-title">我們要找具備以下特質的人</div>
                        <div className="job-sec">
                            <p>怎樣的人適合萬萬?</p>
                            <p>1.幽默、笑點低，個性高，興趣多元，笑是我們釋放壓力的方式。</p>
                            <p>2.自主性高、能自律 - 穿衣服的規範少，彼此尊重高度自律是我們的準則。</p>
                            <p>3.勇於表達 - 我們不喜歡臆測，我們喜歡效率做對的事情。</p>
                            <p>4.口條清楚、表達能力佳。</p>
                            <p>5.具備責任感、態度積極、效率、穩定性高、善溝通協調。</p>
                        </div>
                    </div>

                    </section>
                    
                    <div>
                    <section className="get-in-touch">
                        <h1 className="title">
                        Get in touch
                        </h1>
                        <form className="contact-form row">
                        <div className="form-field col x-50">
                            <input
                            className="input-text js-input"
                            id="name"
                            required
                            type="text"
                            />
                            <label
                            className="label"
                            htmlFor="name"
                            >
                            Name
                            </label>
                        </div>
                        <div className="form-field col x-50">
                            <input
                            className="input-text js-input"
                            id="email"
                            required
                            type="email"
                            />
                            <label
                            className="label"
                            htmlFor="email"
                            >
                            E-mail
                            </label>
                        </div>
                        <div className="form-field col x-100">
                            <input
                            className="input-text js-input"
                            id="message"
                            required
                            type="text"
                            />
                            <label
                            className="label"
                            htmlFor="message"
                            >
                            Message
                            </label>
                        </div>
                        <div className="form-field col x-100 align-center">
                            <input
                            className="submit-btn"
                            type="submit"
                            value="Submit"
                            />
                        </div>
                        </form>
                    </section>

                </div>
                                        

                </div>
                </div>
            {/* <Parallax /> */}
        </div>
)};