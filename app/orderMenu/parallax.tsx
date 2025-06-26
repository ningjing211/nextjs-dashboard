'use client';
import '@/app/ui/orderMenu/orderMenu.css';

import React from 'react';

export default function Parallax() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#c578c0] via-purple-300 to-cyan-400 py-8 px-4">
            {/* Logo Header */}
            <div className="w-full text-center mb-8">
            <a
                    style={{display: 'inline-flex', width: '240px', margin: '36px auto 20px'}}
                    className="logo-link"
                    href="/"
                >
                    <img src="/logoB-web.png" />
                </a>
            </div>

            {/* Menu Cards Container */}
            <div className="max-w-2xl mx-auto space-y-6">
                {/* Coffee Section - 依設計圖調整 */}
                <div className="bg-white rounded-3xl p-8 shadow-lg relative">
                    {/* 標題與360cc標籤 */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-baseline gap-3">
                            <span className="text-xl font-extrabold leading-tight">Time Machine</span>
                            <span className="text-lg font-semibold text-gray-700 tracking-wide">時空啡人</span>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-md" style={{ background: '#7fbfb0', fontFamily: 'inherit' }}>360cc</div>
                        </div>
                    </div>
                    {/* 分隔線 */}
                    <div className="border-t border-gray-300 mb-6"></div>
                    {/* Menu List */}
                    <div className="space-y-8">
                        {/* 90+ 美式 */}
                        <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-baseline gap-2 flex-col">
                                    <span className="text-lg font-extrabold leading-tight">90+ 美式</span>
                                    <span className="text-base text-gray-600 font-normal">Select Americano</span>
                                </div>
                                <div className="text-sm text-gray-700 mt-1">喜歡簡單直接的你</div>
                            </div>
                            <div className="flex items-end gap-6 min-w-[120px]">
                                <span className="text-l font-extrabold text-gray-800">$ 70</span>
                                <div className="flex flex-col items-center ml-2" style={{marginBottom: '8px'}}>
                                    <div className="flex gap-4 mb-1">
                                        <span className="text-xs font-bold text-gray-700">ICE</span>
                                        <span className="text-xs font-bold text-gray-700">HOT</span>
                                    </div>
                                    <div className="flex gap-6">
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#38cfd9'}}></span>
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#d48bb9'}}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 蕭邦 拿鐵 */}
                        <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-baseline gap-2 flex-col">
                                    <span className="text-lg font-extrabold leading-tight">蕭邦 拿鐵</span>
                                    <span className="text-base text-gray-600 font-normal">Latte</span>
                                </div>
                                <div className="text-sm text-gray-700 mt-1">溫和、隨和的浪漫主義者</div>
                            </div>
                            <div className="flex items-end gap-6 min-w-[120px]">
                                <span className="text-l font-extrabold text-gray-800">$ 85</span>
                                <div className="flex flex-col items-center ml-2" style={{marginBottom: '8px'}}>
                                    <div className="flex gap-4 mb-1">
                                        
                                    </div>
                                    <div className="flex gap-6">
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#38cfd9'}}></span>
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#d48bb9'}}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 海頓 卡布奇諾 */}
                        <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-baseline gap-2 flex-col">
                                    <span className="text-lg font-extrabold leading-tight">海頓 卡布奇諾</span>
                                    <span className="text-base text-gray-600 font-normal">Cappuccino</span>
                                </div>
                                <div className="text-sm text-gray-700 mt-1">講究生活品味的片刻</div>
                            </div>
                            <div className="flex items-end gap-6 min-w-[120px]">
                                <span className="text-l font-extrabold text-gray-800">$ 95</span>
                                <div className="flex flex-col items-center ml-2" style={{marginBottom: '8px'}}>
                                    <div className="flex gap-4 mb-1">
                                        
                                    </div>
                                    <div className="flex gap-6">
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#38cfd9'}}></span>
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#d48bb9'}}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 焦糖 瑪奇朵 */}
                        <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-baseline gap-2 flex-col">
                                    <span className="text-lg font-extrabold leading-tight">焦糖 瑪奇朵</span>
                                    <span className="text-base text-gray-600 font-normal">Caramel Macchiato</span>
                                </div>
                                <div className="text-sm text-gray-700 mt-1">成熟與童心未泯融合的瞬間</div>
                            </div>
                            <div className="flex items-end gap-6 min-w-[120px]">
                                <span className="text-l font-extrabold text-gray-800">$ 100</span>
                                <div className="flex flex-col items-center ml-2" style={{marginBottom: '8px'}}>
                                    <div className="flex gap-4 mb-1">
                                        
                                    </div>
                                    <div className="flex gap-6">
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#38cfd9'}}></span>
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#d48bb9'}}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-lg relative">
                    {/* 標題與660cc標籤 */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-baseline gap-3">
                            <span className="text-xl font-extrabold leading-tight">Paintings</span>
                            <span className="text-lg font-semibold text-gray-700 tracking-wide">畫茶</span>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-md" style={{ background: '#7fbfb0', fontFamily: 'inherit' }}>660cc</div>
                        </div>
                    </div>
                    {/* 分隔線 */}
                    <div className="border-t border-gray-300 mb-6"></div>
                    {/* Menu List */}
                    <div className="space-y-8">
                        {/* 山跟雲說 高山烏龍 */}
                        <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-baseline gap-2 flex-col">
                                    <span className="text-lg font-extrabold leading-tight">山跟雲說 <span className='font-black'>高山烏龍</span></span>
                                    <span className="text-base text-gray-600 font-normal">High Mountain Oolong</span>
                                </div>
                                <div className="text-sm text-gray-700 mt-1">喝一口雲就在你旁邊</div>
                            </div>
                            <div className="flex items-end gap-6 min-w-[120px]">
                                <span className="text-l font-extrabold text-gray-800">$ 40</span>
                                <div className="flex flex-col items-center ml-2" style={{marginBottom: '8px'}}>
                                    <div className="flex gap-4 mb-1">
                                        <span className="text-xs font-bold text-gray-700">ICE</span>
                                        <span className="text-xs font-bold text-gray-700">HOT</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#38cfd9'}}></span>
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#d48bb9'}}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 柳染 四季春 */}
                        <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-baseline gap-2 flex-col">
                                    <span className="text-lg font-extrabold leading-tight">柳染 <span className='font-black'>四季春</span></span>
                                    <span className="text-base text-gray-600 font-normal">Four Seasons Spring</span>
                                </div>
                                <div className="text-sm text-gray-700 mt-1">今天的口氣芳香淡雅</div>
                            </div>
                            <div className="flex items-end gap-6 min-w-[120px]">
                                <span className="text-l font-extrabold text-gray-800">$ 40</span>
                                <div className="flex flex-col items-center ml-2" style={{marginBottom: '8px'}}>
                                    <div className="flex gap-4 mb-1">
                                        
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#38cfd9'}}></span>
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#d48bb9'}}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 敦鶴 紅玉 Ruby Red */}
                        <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-baseline gap-2 flex-col">
                                    <span className="text-lg font-extrabold leading-tight">敦鶴 <span className='font-black'>紅玉</span></span>
                                    <span className="text-base text-gray-600 font-normal">Ruby Red</span>
                                </div>
                                <div className="text-sm text-gray-700 mt-1">不加糖都著迷的紅茶</div>
                            </div>
                            <div className="flex items-end gap-6 min-w-[120px]">
                                <span className="text-l font-extrabold text-gray-800">$ 50</span>
                                <div className="flex flex-col items-center ml-2" style={{marginBottom: '8px'}}>
                                    <div className="flex gap-4 mb-1">
                                        
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#38cfd9'}}></span>
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#d48bb9'}}></span>
                                    </div>
                                </div>
                            </div>
                                </div>
                            </div>
                        </div>
                        
                {/* Velvet yogurt 優格絲絨 區塊 */}
                <div className="bg-white rounded-3xl p-8 shadow-lg relative mt-10">
                    {/* 標題與480cc標籤 */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-baseline gap-3">
                            <span className="text-xl font-extrabold leading-tight">Velvet yogurt</span>
                            <span className="text-lg font-semibold text-gray-700 tracking-wide">優格絲絨</span>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-md" style={{ background: '#7fbfb0', fontFamily: 'inherit' }}>480cc</div>
                        </div>
                    </div>
                    {/* 分隔線 */}
                    <div className="border-t border-gray-300 mb-6"></div>
                    {/* Menu List */}
                    <div className="space-y-8">
                        {/* 酸酸忍者龜 抹茶 */}
                        <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-baseline gap-2 flex-col">
                                    <span className="text-lg font-extrabold leading-tight">酸酸忍者龜 <span className='font-black'>抹茶</span></span>
                                    <span className="text-base text-gray-600 font-normal">Sour Ninja Turtle Matcha</span>
                                </div>
                                <div className="text-sm text-gray-700 mt-1">開始分泌唾液了</div>
                            </div>
                            <div className="flex items-end gap-6 min-w-[120px]">
                                <span className="text-l font-extrabold text-gray-800">$ 160</span>
                                <div className="flex flex-col items-center ml-2" style={{marginBottom: '8px'}}>
                                    <div className="flex gap-4 mb-1">
                                        <span className="text-xs font-bold text-gray-700">ICE</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#38cfd9'}}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 甜甜大芒人 芒果 */}
                        <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-baseline gap-2 flex-col">
                                    <span className="text-lg font-extrabold leading-tight">甜甜大芒人 <span className='font-black'>芒果</span></span>
                                    <span className="text-base text-gray-600 font-normal">Mr. Mango on the Go</span>
                                </div>
                                <div className="text-sm text-gray-700 mt-1">腸道欠消化</div>
                            </div>
                            <div className="flex items-end gap-6 min-w-[120px]">
                                <span className="text-l font-extrabold text-gray-800">$ 160</span>
                                <div className="flex flex-col items-center ml-2" style={{marginBottom: '8px'}}>
                                    
                                    <div className="flex gap-4">
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#38cfd9'}}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 沒你哪是愛 草莓 */}
                        <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-baseline gap-2 flex-col">
                                    <span className="text-lg font-extrabold leading-tight">沒你哪是愛 <span className='font-black'>草莓</span></span>
                                    <span className="text-base text-gray-600 font-normal">Ain't Love Ain't You</span>
                                </div>
                                <div className="text-sm text-gray-700 mt-1">問店員吧</div>
                            </div>
                            <div className="flex items-end gap-6 min-w-[120px]">
                                <span className="text-l font-extrabold text-gray-800">$ 160</span>
                                <div className="flex flex-col items-center ml-2" style={{marginBottom: '8px'}}>
                                    
                                    <div className="flex gap-4">
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#38cfd9'}}></span>
                                    </div>
                                </div>
                            </div>
                                </div>
                            </div>
                        </div>
                        
                {/* AMZ Milkshake 昔捲腦門 區塊 */}
                <div className="bg-white rounded-3xl p-8 shadow-lg relative mt-10">
                    {/* 標題與480cc/360cc標籤 */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-baseline gap-3">
                            <span className="text-xl font-extrabold leading-tight">AMZ Milkshake</span>
                            <span className="text-lg font-semibold text-gray-700 tracking-wide">昔捲腦門</span>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-md" style={{ background: '#7fbfb0', fontFamily: 'inherit' }}>480cc</div>
                        </div>
                    </div>
                    {/* 分隔線 */}
                    <div className="border-t border-gray-300 mb-6"></div>
                    {/* Menu List */}
                    <div className="space-y-8">
                        {/* 大溪地 香草 Tahiti vanilla */}
                        <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-baseline gap-2 flex-col">
                                    <span className="text-lg font-extrabold leading-tight">大溪地 <span className='font-black'>香草</span></span>
                                    <span className="text-base text-gray-600 font-normal">Tahiti vanilla</span>
                                </div>
                                <div className="text-sm text-gray-700 mt-1">口腔已融化</div>
                            </div>
                            <div className="flex items-end gap-6 min-w-[120px]">
                                <span className="text-l font-extrabold text-gray-800">$ 150</span>
                                <div className="flex flex-col items-center ml-2" style={{marginBottom: '8px'}}>
                                <div className="flex gap-4 mb-1">
                                        <span className="text-xs font-bold text-gray-700">ICE</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#38cfd9'}}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 黑露露 巧克力 Darky chocolate */}
                        <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-baseline gap-2 flex-col">
                                    <span className="text-lg font-extrabold leading-tight">黑露露 <span className='font-black'>巧克力</span></span>
                                    <span className="text-base text-gray-600 font-normal">Darky chocolate</span>
                                </div>
                                <div className="text-sm text-gray-700 mt-1">超高速療癒感</div>
                            </div>
                            <div className="flex items-end gap-6 min-w-[120px]">
                                <span className="text-l font-extrabold text-gray-800">$ 150</span>
                                <div className="flex flex-col items-center ml-2" style={{marginBottom: '8px'}}>
                                    <div className="flex gap-4">
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#38cfd9'}}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 菲菲 草莓 Fairy strawberry */}
                        <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-baseline gap-2 flex-col">
                                    <span className="text-lg font-extrabold leading-tight">菲菲 <span className='font-black'>草莓</span></span>
                                    <span className="text-base text-gray-600 font-normal">Fairy strawberry</span>
                                </div>
                                <div className="text-sm text-gray-700 mt-1">我啊嬤也喜歡</div>
                            </div>
                            <div className="flex items-end gap-6 min-w-[120px]">
                                <span className="text-l font-extrabold text-gray-800">$ 150</span>
                                <div className="flex flex-col items-center ml-2" style={{marginBottom: '8px'}}>
                                    <div className="flex gap-4">
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#38cfd9'}}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 西西里 開心果 Sicilian Pistachio */}
                        <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-baseline gap-2 flex-col">
                                    <span className="text-lg font-extrabold leading-tight">西西里 <span className='font-black'>開心果</span></span>
                                    <span className="text-base text-gray-600 font-normal">Sicilian Pistachio</span>
                                </div>
                                <div className="text-sm text-gray-700 mt-1">太好了不用剝殼</div>
                            </div>
                            <div className="flex items-end gap-6 min-w-[120px]">
                                <span className="text-l font-extrabold text-gray-800">$ 150</span>
                                <div className="flex flex-col items-center ml-2" style={{marginBottom: '8px'}}>
                                    <div className="flex gap-4">
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#38cfd9'}}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 曼巴精神 咖啡 Mamba Coffee */}
                        <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-baseline gap-2 flex-col">
                                    <span className="text-lg font-extrabold leading-tight">曼巴精神 <span className='font-black'>咖啡</span></span>
                                    <span className="text-base text-gray-600 font-normal">Mamba Coffee</span>
                                </div>
                                <div className="text-sm text-gray-700 mt-1">走在江湖的苦澀與甘味</div>
                            </div>
                            <div className="flex items-end gap-6 min-w-[120px]">
                                <span className="text-l font-extrabold text-gray-800">$ 160</span>
                                <div className="flex flex-col items-center ml-2" style={{marginBottom: '8px'}}>
                                    <div className="flex gap-4">
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#38cfd9'}}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 碧波 抹茶 Bibo Matcha */}
                        <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-baseline gap-2 flex-col">
                                    <span className="text-lg font-extrabold leading-tight">碧波 <span className='font-black'>抹茶</span></span>
                                    <span className="text-base text-gray-600 font-normal">Bibo Matcha</span>
                                </div>
                                <div className="text-sm text-gray-700 mt-1">在你來前才剛磨好</div>
                            </div>
                            <div className="flex items-end gap-6 min-w-[120px]">
                                <span className="text-l font-extrabold text-gray-800">$ 160</span>
                                <div className="flex flex-col items-center ml-2" style={{marginBottom: '8px'}}>
                                    <div className="flex gap-4">
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#38cfd9'}}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Silk Bloom 醇奶初雪 區塊 */}
                <div className="bg-white rounded-3xl p-8 shadow-lg relative mt-10">
                    {/* 標題與480cc/360cc標籤 */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-baseline gap-3">
                            <span className="text-xl font-extrabold leading-tight">Silk Bloom</span>
                            <span className="text-lg font-semibold text-gray-700 tracking-wide">醇奶初雪</span>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-md" style={{ background: '#38cfd9', fontFamily: 'inherit' }}>480cc</div>
                            <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-md" style={{ background: '#d48bb9', fontFamily: 'inherit' }}>360cc</div>
                        </div>
                    </div>
                    {/* 分隔線 */}
                    <div className="border-t border-gray-300 mb-6"></div>
                    {/* Menu List */}
                    <div className="space-y-8">
                        {/* Best one 奶茶 */}
                        <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-baseline gap-2 flex-col">
                                    {/* 大拇指icon */}
                            <div>
                                        <img src="/626-mnue-04.png" width="24" />
                                    </div>
                                    <span className="text-lg font-extrabold leading-tight">Best one <span className='font-black'>奶茶</span></span>
                                    <span className="text-base text-gray-600 font-normal">Best One Milk Tea</span>
                                </div>
                                <div className="text-sm text-gray-700 mt-1">小心奶醉~~~</div>
                                <div className="inline-block mt-2 px-3 py-1 text-xs font-bold text-white" style={{background:'#d48bb9', borderRadius:'0px 40px 40px 44px'}}>奶精所調製的風味奶茶</div>
                            </div>
                            <div className="flex items-end gap-6 min-w-[120px]">
                                <span className="text-l font-extrabold text-gray-800">$ 75</span>
                                <div className="flex flex-col items-center ml-2" style={{marginBottom: '8px'}}>
                                    <div className="flex gap-4 mb-1">
                                        <span className="text-xs font-bold text-gray-700">ICE</span>
                                        <span className="text-xs font-bold text-gray-700">HOT</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#38cfd9'}}></span>
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#d48bb9'}}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ONEONE 鮮奶茶 */}
                        <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-baseline">
                                    {/* ONEONE 標籤 */}
                                    <span className="inline-flex items-center mr-1 align-middle"><span className="px-2 py-1 rounded bg-[#38cfd9] text-black text-xs font-bold" style={{letterSpacing:'1px', borderRadius:'0 10px 12px 12px', padding: '4 12px'}}>ONEONE</span></span>
                                    <span className="text-lg font-extrabold leading-tight" style={{marginRight: '4px'}}>鮮奶茶</span>
                                    
                                </div>
                                <div className="text-base text-gray-700 font-normal">ONE ONE Milk Tea</div>
                                <div className="text-sm text-gray-700 mt-1">小農家最熱情的那隻母牛提供</div>
                            </div>
                            <div className="flex items-end gap-6 min-w-[120px]">
                                <span className="text-l font-extrabold text-gray-800">$ 85</span>
                                <div className="flex flex-col items-center ml-2" style={{marginBottom: '8px'}}>
                                    <div className="flex gap-4 mb-1">
                                        <span className="text-xs font-bold text-gray-700">ICE</span>
                                        <span className="text-xs font-bold text-gray-700">HOT</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#38cfd9'}}></span>
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#d48bb9'}}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 侏羅紀可可 巧克力牛奶 */}
                        <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-baseline gap-2 flex-col">
                                    <span className="text-lg font-extrabold leading-tight">侏羅紀可可 <span className='font-black'>巧克力牛奶</span></span>
                                    <span className="text-base text-gray-600 font-normal">Jurassic Cocoa</span>
                                </div>
                                <div className="text-sm text-gray-700 mt-1">嚇死寶寶了</div>
                            </div>
                            <div className="flex items-end gap-6 min-w-[120px]">
                                <span className="text-l font-extrabold text-gray-800">$ 100</span>
                                <div className="flex flex-col items-center ml-2" style={{marginBottom: '8px'}}>
                                    <div className="flex gap-4 mb-1">
                                        <span className="text-xs font-bold text-gray-700">ICE</span>
                                        <span className="text-xs font-bold text-gray-700">HOT</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#38cfd9'}}></span>
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#d48bb9'}}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 綠野仙蹤 抹茶牛奶 */}
                        <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-baseline gap-2 flex-col">
                                    <span className="text-lg font-extrabold leading-tight">綠野仙蹤 <span className='font-black'>抹茶牛奶</span></span>
                                    <span className="text-base text-gray-600 font-normal">Matcha Milk</span>
                                </div>
                                <div className="text-sm text-gray-700 mt-1">怕下架就快儲存</div>
                            </div>
                            <div className="flex items-end gap-6 min-w-[120px]">
                                <span className="text-l font-extrabold text-gray-800">$ 100</span>
                                <div className="flex flex-col items-center ml-2" style={{marginBottom: '8px'}}>
                                    <div className="flex gap-4 mb-1">
                                        <span className="text-xs font-bold text-gray-700">ICE</span>
                                        <span className="text-xs font-bold text-gray-700">HOT</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#38cfd9'}}></span>
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#d48bb9'}}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 白色烤箱 堅果牛奶 */}
                        <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-baseline gap-2 flex-col">
                                    <span className="text-lg font-extrabold leading-tight">白色烤箱 <span className='font-black'>堅果牛奶</span></span>
                                    <span className="text-base text-gray-600 font-normal">Nut Milk</span>
                                </div>
                                <div className="text-sm text-gray-700 mt-1">附近松鼠的庫存</div>
                            </div>
                            <div className="flex items-end gap-6 min-w-[120px]">
                                <span className="text-l font-extrabold text-gray-800">$ 100</span>
                                <div className="flex flex-col items-center ml-2" style={{marginBottom: '8px'}}>
                                    <div className="flex gap-4 mb-1">
                                        <span className="text-xs font-bold text-gray-700">ICE</span>
                                        <span className="text-xs font-bold text-gray-700">HOT</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#38cfd9'}}></span>
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#d48bb9'}}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Velvet yogurt 優格絲絨 區塊 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg relative mt-10">
                    {/* 標題與480cc標籤 */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-baseline gap-3">
                            <span className="text-xl font-extrabold leading-tight">Soul Drip</span>
                            <span className="text-lg font-semibold text-gray-700 tracking-wide">生命之水</span>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-md" style={{ background: '#7fbfb0', fontFamily: 'inherit' }}>660cc</div>
                        </div>
                    </div>
                    {/* 分隔線 */}
                    <div className="border-t border-gray-300 mb-6"></div>
                    {/* Menu List */}
                    <div className="space-y-8">
                        {/* 酸酸忍者龜 抹茶 */}
                        <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-baseline gap-2 flex-col">
                                    <span className="text-lg font-extrabold leading-tight">樹上椰子水</span>
                                    <span className="text-base text-gray-600 font-normal">Tree-Top Coconut</span>
                                </div>
                                <div className="text-sm text-gray-700 mt-1">火大來一杯</div>
                            </div>
                            <div className="flex items-end gap-6 min-w-[120px]">
                                <span className="text-l font-extrabold text-gray-800">$ 65</span>
                                <div className="flex flex-col items-center ml-2" style={{marginBottom: '8px'}}>
                                    <div className="flex gap-4 mb-1">
                                        <span className="text-xs font-bold text-gray-700">ICE</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#38cfd9'}}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 甜甜大芒人 芒果 */}
                        <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                            <div className="flex items-baseline">
                                    {/* ONEONE 標籤 */}
                                    <span className="inline-flex items-center mr-1 align-middle"><span className="px-2 py-1 rounded bg-[#38cfd9] text-black text-xs font-bold" style={{letterSpacing:'1px', borderRadius:'0 10px 12px 12px', padding: '4 12px'}}>氣泡飲</span></span>
                                    <span className="text-lg font-extrabold leading-tight" style={{marginRight: '4px'}}>喝不茫的莫吉托</span>
                                    <span className="text-base text-gray-600 font-normal">Virgin Mojito Spring</span>
                                </div>
                                <div className="text-sm text-gray-700 mt-1">已準備躺好 補充精神</div>
                            </div>
                            <div className="flex items-end gap-6 min-w-[120px]">
                                <span className="text-l font-extrabold text-gray-800">$ 70</span>
                                <div className="flex flex-col items-center ml-2" style={{marginBottom: '8px'}}>
                                    
                                    <div className="flex gap-4">
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#38cfd9'}}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 沒你哪是愛 草莓 */}
                        <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-baseline gap-2 flex-col">
                                    <span className="text-lg font-extrabold leading-tight">心痛的感覺 </span>
                                    <span className="text-base text-gray-600 font-normal">Ouch. That hurts.</span>
                                </div>
                                <div className="text-sm text-gray-700 mt-1">喉嚨請借過</div>
                            </div>
                            <div className="flex items-end gap-6 min-w-[120px]">
                                <span className="text-l font-extrabold text-gray-800">$ 20</span>
                                <div className="flex flex-col items-center ml-2" style={{marginBottom: '8px'}}>
                                    
                                    <div className="flex gap-4">
                                        <span className="w-4 h-4 rounded-full block" style={{background:'#38cfd9'}}></span>
                                    </div>
                                </div>
                            </div>
                                </div>
                            </div>
                        </div>

            {/* Video Section */}
            <div 
            className="w-full h-full"
            data-autoplay="true"
            data-loop="true"
            data-video-url="/ideas/oneone-menu.mp4"
            data-wf-ignore="true"
          > 
            <video
              className="w-full h-full"
              style={{borderRadius: '12px'}}
              autoPlay
              data-wf-ignore="true"
              id="video-background"
              loop
              muted
              preload="auto"
              x5-playsinline
              webkit-playsinline
              playsInline
            >
              <source
                src="/ideas/oneone-menu.mp4" 
                data-wf-ignore="true" type="video/mp4"
              />
            </video>
          </div>

            



                {/* Footer */}
                <div className="text-center space-y-4 py-8">
                    <div className="px-4 md:px-8 max-w-6xl mx-auto mb-12">
                        <div className="flex justify-center">
                            <div className="relative bg-gradient-to-br from-indigo-200 via-purple-200 to-cyan-200 pt-12 px-6 md:px-16 pb-16 rounded-2xl shadow-lg border border-purple-200 backdrop-blur-sm w-full md:w-auto mx-4 md:mx-0">
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white px-8 py-1.5 rounded-full shadow-md whitespace-nowrap">
                                    <h3 className="text-l font-bold tracking-wider">獨樂樂 不如 眾樂樂</h3>
                                </div>
                                <div className="mt-2">
                                    <div className="text-center">
                                        <p className="text-sm text-gray-600 mb-4">分享 ONEONE 的獨特體驗給您的朋友</p>
                                        <ul className="flex flex-wrap justify-center gap-6 social-icons">
                                            <li>
                                                <a href="https://www.facebook.com/share/1H7kvM7SUH/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="block w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-500 transform hover:rotate-12 facebook-icon">
                                                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 text-white">
                                                        <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"></path>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.threads.net/@oneone_liquid_gallery" target="_blank" rel="noopener noreferrer" className="block w-14 h-14 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-500 transform hover:rotate-12 threads-icon">
                                                <img src="/threads-logo.png" alt="Threads" className="w-7 h-7" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com/oneone_liquid_gallery?igsh=MXQxdWVlM3h3Y2phdw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="block w-14 h-14 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 transition-all duration-500 transform hover:rotate-12 instagram-icon">
                                                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 text-white">
                                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://line.me/R/share?text=ONEONE Liquid Gallery&url=https://www.oneone.global/orderMenu" target="_blank" rel="noopener noreferrer" className="block w-14 h-14 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-500 transform hover:rotate-12 line-icon">
                                                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 text-white">
                                                        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"></path>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" 
                                                   onClick={(e) => {
                                                       e.preventDefault();
                                                       navigator.clipboard.writeText(window.location.href);
                                                       const button = e.currentTarget;
                                                       button.classList.add('copied');
                                                       setTimeout(() => {
                                                           button.classList.remove('copied');
                                                       }, 3000);
                                                   }}
                                                   className="block w-14 h-14 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-500 copy-icon relative group
                                                   after:content-['已成功複製連結'] after:absolute after:top-16 after:left-1/2 after:-translate-x-1/2 after:bg-gray-800 after:text-white after:px-3 after:py-1 after:rounded after:text-sm after:opacity-0 after:transition-opacity after:whitespace-nowrap
                                                   [&.copied]:bg-green-500 [&.copied]:after:opacity-100"
                                                >
                                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-7 h-7 text-white transition-all [.copied_&]:hidden">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
                                                    </svg>
                                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-7 h-7 text-white absolute hidden [.copied_&]:block">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img 
                        src="/626-mnue-09.png" 
                        alt="LINE QR Code" 
                        className="w-[70%] h-full object-contain inline-flex content-center"
                        onError={(e) => {
                            console.error('QR Code image failed to load');
                            e.currentTarget.style.border = '2px solid red';
                        }}
                    />
                                    {/* Eco Cup Discount */}
                    <div className="rounded-3xl p-3">
                        <div className="flex items-center justify-center gap-2">
                            <svg className="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                            <span className="text-gray-600 text-lg">自備環保杯 折$</span>
                            <span className="text-2xl font-bold" style={{color: '#4a4a4a'}}>5</span>
                            <span className="text-gray-600 text-lg">元</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}