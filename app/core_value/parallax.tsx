import '@/app/ui/core_value/parallax.css';
import React from 'react';

export default function Parallax() {
    return (
        <div id="parallax-world-of-ugg">
        <section>
          <div id="brand" className="title">
            {/* <h3>Ever Changing</h3> */}
            <h1>我們的核心價值</h1>
          </div>
        </section>
        <section  id="origin">
          <div className="parallax-core_value-one">
            <h2>自主資訊系統</h2>
          </div>
        </section>
        
        <section className="section-words">
          <div id="story" className="block">
            <p>
              <span className="first-character ny">來
              </span>聊聊我們奶昔店的萬萬CRM系統。這個系統不僅幫我們管理顧客信息，還能自動處理訂單，確保每杯奶昔準時送達。它支持營銷活動，讓你隨時了解我們的最新優惠和活動。而且，數據分析功能讓我們能更好地了解經營狀況，做出明智的決策。萬萬CRM系統，讓我們互相分享流量！
            </p>
          </div>
        </section>
        
        <section>
          <div className="parallax-core_value-two">
            <h2>我們的團隊</h2>
          </div>
        </section>

        <section className="section-words">
          <div className="block">
            <p><span className="first-character ny">萬</span>萬的團隊如同一幅夢幻畫面，結合了來自上海的設計大師和娛樂圈的創意天才。我們的專案經理是熱愛自行車的探險家，前端工程師則是DJ兼職的音樂魔術師，擁有全能的後端工程師。基地座落在小島的美術館旁，並持續得到美國AI團隊的強力支援。這個獨特的組合，不僅打造了我們獨一無二的奶昔，更是創新和藝術的完美結晶。</p>
           </div>
        </section>

        <section  >
          <div className="parallax-core_value-three">
            <h2>無邊界整合能力</h2>
          </div>
        </section>

        <section className="section-words">
          <div className="block">
            <p><span className="first-character ny">嗨</span>
            我們不僅帶來了最新的AI技術，還有一系列超酷的產品喔！
我們的新創平台，像是天賦銀行，可以讓你在家裡學到各種生活技能；還有薑是老的辣，專門幫助中高齡找工作；還有租吧走吧！ZobaZoba，讓你輕鬆享受露營車生活；植皆交易，讓你愜意買賣各種植物。
當代的SaaS系統，TJ Demy讓你可以隨時隨地上課；C-Fans萊吸粉讓餐飲店管理更得心應手；Line core 360則是幫你打理社群和商務生態。
還有我們的投資項目，像是堤杰科技、BDB AI Technology和高領資通，全都是未來科技的翹楚。

最後別忘了我們的超棒合作夥伴PAYUNi，讓金流統一管理起來更方便！

這些產品不僅實用，還走在時尚與科技的尖端！</p>
           </div>
        </section>

      </div>
    );
  }