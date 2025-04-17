'use client';

import React from 'react';

export default function Parallax() {
    return (
        <>
            {/* Gradient Header */}
            <div className="w-full bg-gradient-to-r from-purple-400 via-cyan-400 to-cyan-300 py-8 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wider">ONEONE</h1>
                <p className="text-white text-lg md:text-xl tracking-widest">Liquid gallery</p>
            </div>

            {/* Menu Title */}
            <div className="w-full py-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold">Menu</h2>
            </div>

            {/* Menu Sections */}
            <div className="px-4 md:px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Coffee Section */}
                <div className="silver-liquid p-6 relative overflow-hidden">
                    <div className="flex flex-col gap-2 mb-4">
                        <div className="flex items-center">
                            <h3 className="text-4xl font-black flex-1">Coffee</h3>
                            <span className="text-2xl">★★★</span>
                            <span className="text-xl ml-2 tracking-[2px] font-bold font-noto">流淌咖啡</span>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-lg font-medium">海頓の卡布奇諾</p>
                                <p className="text-gray-600">Cappuccino</p>
                            </div>
                            <div className="flex items-center">
                                <span className="text-2xl font-bold mr-2">$100</span>
                                <span className="w-5 h-5 rounded-full bg-cyan-400 relative before:content-['ICE'] before:absolute before:text-sm before:font-medium before:text-gray-700 before:-top-6 before:right-0"></span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-lg font-medium">蕭邦拿鐵</p>
                                <p className="text-gray-600">Latte</p>
                            </div>
                            <div className="flex items-center">
                                <span className="text-2xl font-bold mr-2">$90</span>
                                <span className="w-5 h-5 rounded-full bg-cyan-400"></span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-lg font-medium">美式貝多芬</p>
                                <p className="text-gray-600">Americano</p>
                            </div>
                            <div className="flex items-center">
                                <span className="text-2xl font-bold mr-2">$70</span>
                                <span className="w-5 h-5 rounded-full bg-cyan-400"></span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-lg font-medium">意識濃縮</p>
                                <p className="text-gray-600">Espresso</p>
                            </div>
                            <div className="flex items-center">
                                <span className="text-2xl font-bold mr-2">$45</span>
                                <span className="w-5 h-5 rounded-full bg-pink-400 relative before:content-['HOT'] before:absolute before:text-sm before:font-medium before:text-gray-700 before:-top-6 before:right-0"></span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tea Section */}
                <div className="silver-liquid p-6 relative overflow-hidden">
                    <div className="flex flex-col gap-2 mb-4">
                        <div className="flex items-center">
                            <h3 className="text-4xl font-black flex-1">Tea</h3>
                            <span className="text-2xl">★★★</span>
                            <span className="text-xl ml-2 tracking-[2px] font-bold font-noto">渲染茶</span>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-lg font-medium">山跟雲說 紅烏龍</p>
                                <p className="text-gray-600">Red Oolong</p>
                            </div>
                            <div className="flex items-center">
                                <span className="text-2xl font-bold mr-2">$70</span>
                                <span className="w-5 h-5 rounded-full bg-cyan-400 relative before:content-['ICE'] before:absolute before:text-sm before:font-medium before:text-gray-700 before:-top-6 before:right-0"></span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-lg font-medium">翡翠 紅玉</p>
                                <p className="text-gray-600">Black Tea</p>
                            </div>
                            <div className="flex items-center">
                                <span className="text-2xl font-bold mr-2">$50</span>
                                <span className="w-5 h-5 rounded-full bg-cyan-400"></span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-lg font-medium">柳染 四季春</p>
                                <p className="text-gray-600">Four Seasons Spring</p>
                            </div>
                            <div className="flex items-center">
                                <span className="text-2xl font-bold mr-2">$40</span>
                                <span className="w-5 h-5 rounded-full bg-cyan-400"></span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-lg font-medium">藤黃 高山烏龍</p>
                                <p className="text-gray-600">High Mountain Oolong</p>
                            </div>
                            <div className="flex items-center">
                                <span className="text-2xl font-bold mr-2">$40</span>
                                <span className="w-5 h-5 rounded-full bg-cyan-400"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}