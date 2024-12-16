import '@/app/ui/item/item.css';
import Parallax from '@/app/job/parallax';
import { library, icon } from '@fortawesome/fontawesome-svg-core';

export default function Item() {
    return (
        <div>
            <div className="report-title"><sub className="report-sub">Belief</sub><a id="report" href="#report" data-anchor="report">我們的信念</a></div>
            <div
            className="wrapper"
            id="news"
            >
            <div className="panel highlight">
                <div className="featured-image" />
                <p className="item-date">
                18 July 2024
                </p>
                <h2 className="item-title">
                和 One One 在一起的日子
                </h2>
                <p className="item-words">
                每一天像每一生的入口，冰天極地的帝造比例消融在我們主觀的奶昔表裡，品質兩字在平行
兩線騁馳，陽光與土壤生生不息映照在貌似咖啡豆與茶葉的載體裡，蟲鳴鳥叫稍微或可以偶
爾在你對面的戀人耳蝸經過。我們以時間為經，空間為緯，織沐出一個你能體驗自身美好創
造的轉瞬即逝。{' '}
                </p>
                <p className="item-btn">
                <a href="">
                    {`Read more >>`}
                </a>
                </p>
                <a
                className="dominant"
                href="#"
                />
            </div>
            <div className="panel">
                <p className="item-date">
                30 June 2024
                </p>
                <h2 className ="item-title">
                融合國際視野的多媒體夥伴
                </h2>
                <p className="item-words">
                Pellentesque mattis felis erat, vitae ultricies metus lacinia nec. Fusce sed pellentesque arcu. Cras sit amet dolor eu augue dignissim vestibulum. Suspendisse ullamcorper felis eget felis egestas, quis feugiat ipsum lobortis.{' '}
                </p>
                <p className="item-btn">
                <a href="#">
                    {`Read more >>`}
                </a>
                </p>
            </div>
            <div className="panel secondlight">
                <p>
                12 June 2024
                </p>
                <h2 className="item-title">
                ESG 認證的友善永續經營新創企業
                </h2>
                <p>
                Etiam cursus luctus feugiat. Etiam malesuada maximus nibh, nec finibus lacus cursus at. Nam blandit arcu eget luctus tempus. Duis at diam feugiat, posuere velit vehicula, imperdiet quam. Sed ultricies felis semper venenatis posuere. Morbi dignissim suscipit odio, id fringilla nisi congue a.{' '}
                </p>
                <p className="item-btn">
                <a href="#">
                    {`Read more >>`}
                </a>
                </p>
            </div>
            <div className="panel secondlight">
                <p>
                1 July 2024
                </p>
                <h2 className="item-title">
                豐富經驗的創辦人整合線上線下軟硬體
                </h2>
                <p>
                Vestibulum feugiat non diam sit amet rutrum. Pellentesque mattis felis erat, vitae ultricies metus lacinia nec. Fusce sed pellentesque arcu. Cras sit amet dolor eu augue dignissim vestibulum. Suspendisse ullamcorper felis eget felis egestas, quis feugiat ipsum lobortis.{' '}
                </p>
                <p className="item-btn">
                <a href="#">
                    {`Read more >>`}
                </a>
                </p>
            </div>
            <div className="panel secondlight">
                <p>
                20 June 2024
                </p>
                <h2 className="item-title">
                全方位照顧身心靈，健康愛運動的熱血單車團隊
                </h2>
                <p >
                Praesent aliquet tellus lectus, sed convallis lectus rhoncus eu. Mauris vel quam et libero pretium consequat ac non orci. Aliquam vel urna pharetra, pretium risus ut, molestie purus. Quisque tempus ipsum magna.
                </p>
                <p className="item-btn">
                <a href="#">
                    {`Read more >>`}
                </a>
                </p>
            </div>
        </div>
    </div>
)};