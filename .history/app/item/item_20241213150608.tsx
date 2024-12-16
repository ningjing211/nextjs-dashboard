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
                One One 的靈魂
                </h2>
                <p className="item-words">
                常說圓心代表位於我們存在最深處的核心，圓周待表我們的外部覺知。我們試著把注意力定
                念在擇、沖、放、裹每一個細小的支線與行動上，無思無想的從容，讓純淨的品質可以流
                露，我們長期聆聽自身內心的聲音，開創出荒野間靜候的小徑。一種生活的態度截然展開。
                <br/>
                <br/>
                一杯手裡觸碰的徐徐暖風，和藹敦厚，親密佳人，蜜魂戀情，
                又像是你常說的，一段靜默的旅程，隨著香氣散逸到鼻息的入口時，新的世界正要開始。
                
                {' '}
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
                奶昔
                </h2>
                <p>
                遠從靜謐的村落間邀請到日不落帝國的過客，荒木隆夫，多少個日與繼夜伴隨著白色
                戀人巧克力成形，白巧的婀娜多姿與穠纖合宜，喚醒你每一分感受美好的悸動細胞。{' '}
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
                咖啡啊
                </h2>
                <p>
                城市的訊號間，作為一個私密的代理人，從選豆的上流，烘培流至萃取的溪邊，一
座河流無私的開放出冥想殿堂，從肌膚的表裡往內核心丹韻裡凝聚，萬千世界就此在你的心
室中心變回一顆咖啡豆母，真空般的私密和喜悅，愛乘載著日常的地心引力。{' '}
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