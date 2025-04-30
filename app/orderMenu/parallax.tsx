'use client';

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
                {/* Coffee Section */}
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold inline-block mr-3">Coffee</h2>
                        <span className="text-gray-600">聽咖啡</span>
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-lg font-medium">90+ 美式</p>
                                <p className="text-gray-500 text-sm">Select Americano</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-xl font-bold">$70</span>
                                <div className="flex gap-2">
                                    <span className="w-4 h-4 rounded-full bg-cyan-400 relative before:content-['ICE'] before:absolute before:text-[10px] before:-top-4 before:left-1/2 before:-translate-x-1/2 before:text-gray-500"></span>
                                    <span className="w-4 h-4 rounded-full bg-pink-400 relative before:content-['HOT'] before:absolute before:text-[10px] before:-top-4 before:left-1/2 before:-translate-x-1/2 before:text-gray-500"></span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-lg font-medium">焦糖 瑪奇朵</p>
                                <p className="text-gray-500 text-sm">Caramel Macchiato</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-xl font-bold">$100</span>
                                <div className="flex gap-2">
                                    <span className="w-4 h-4 rounded-full bg-cyan-400"></span>
                                    <span className="w-4 h-4 rounded-full bg-pink-400"></span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-lg font-medium">蕭邦 拿鐵</p>
                                <p className="text-gray-500 text-sm">Latte</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-xl font-bold">$85</span>
                                <div className="flex gap-2">
                                    <span className="w-4 h-4 rounded-full bg-cyan-400"></span>
                                    <span className="w-4 h-4 rounded-full bg-pink-400"></span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-lg font-medium">海頓 卡布奇諾</p>
                                <p className="text-gray-500 text-sm">Cappuccino</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-xl font-bold">$90</span>
                                <div className="flex gap-2">
                                    <span className="w-4 h-4 rounded-full bg-cyan-400"></span>
                                    <span className="w-4 h-4 rounded-full bg-pink-400"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tea Section */}
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold inline-block mr-3">Tea</h2>
                        <span className="text-gray-600">說茶</span>
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-lg font-medium">山跟雲說 高山烏龍</p>
                                <p className="text-gray-500 text-sm">High Mountain Oolong</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-xl font-bold">$40</span>
                                <div className="flex gap-1">
                                    <span className="w-4 h-4 rounded-full bg-cyan-400"></span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-lg font-medium">敦鶴 紅玉</p>
                                <p className="text-gray-500 text-sm">Black Tea</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-xl font-bold">$50</span>
                                <div className="flex gap-1">
                                    <span className="w-4 h-4 rounded-full bg-cyan-400"></span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-lg font-medium">柳染 四季春</p>
                                <p className="text-gray-500 text-sm">Four Seasons Spring</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-xl font-bold">$40</span>
                                <div className="flex gap-1">
                                    <span className="w-4 h-4 rounded-full bg-cyan-400"></span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-lg font-medium">鑛式 奶茶</p>
                                <p className="text-gray-500 text-sm">Crown Style Milk Tea</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-xl font-bold">$70</span>
                                <div className="flex gap-1">
                                    <span className="w-4 h-4 rounded-full bg-cyan-400"></span>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Section */}
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-lg">
                    <iframe 
                        className="absolute top-0 left-0 w-full h-full" 
                        src="https://www.youtube.com/embed/uHr--2TdMO4?autoplay=1&mute=1&controls=0&loop=1&playlist=uHr--2TdMO4&modestbranding=1&rel=0&showinfo=0&cc_load_policy=0" 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
            </div>

            {/* Milkshake Section */}
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold inline-block mr-3">Milkshake</h2>
                        <span className="text-gray-600">絕版奶昔</span>
                    </div>
                        <div className="space-y-6">
                        <div className="flex items-center justify-between">
                                <div>
                                <p className="text-lg font-medium">大溪地 香草</p>
                                <p className="text-gray-500 text-sm">Vanilla</p>
                                </div>
                            <div className="flex items-center gap-4">
                                <span className="text-xl font-bold">$150</span>
                                <div className="flex gap-1">
                                    <span className="w-4 h-4 rounded-full bg-cyan-400"></span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                                <div>
                                <p className="text-lg font-medium">黑露露 巧克力</p>
                                <p className="text-gray-500 text-sm">Chocolate</p>
                                </div>
                            <div className="flex items-center gap-4">
                                <span className="text-xl font-bold">$150</span>
                                <div className="flex gap-1">
                                    <span className="w-4 h-4 rounded-full bg-cyan-400"></span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                                <div>
                                <p className="text-lg font-medium">菲菲 草莓</p>
                                <p className="text-gray-500 text-sm">Strawberry</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-xl font-bold">$150</span>
                                <div className="flex gap-1">
                                    <span className="w-4 h-4 rounded-full bg-cyan-400"></span>
                                </div>
                            </div>
                        </div>
                        <div className="text-sm text-gray-500 text-right mt-4">
                            供應時段：上午11點 - 閉店
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center space-y-4 py-8">
                    <div className="px-4 md:px-8 max-w-6xl mx-auto mb-12">
                        <div className="flex justify-center">
                            <div className="relative bg-gradient-to-br from-indigo-200 via-purple-200 to-cyan-200 pt-12 px-6 md:px-16 pb-16 rounded-2xl shadow-lg border border-purple-200 backdrop-blur-sm w-full md:w-auto mx-4 md:mx-0">
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white px-8 py-1.5 rounded-full shadow-md whitespace-nowrap">
                                    <h3 className="text-xl font-bold tracking-wider">獨樂樂 不如 眾樂樂</h3>
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
                        src="/sweetbite.png" 
                        alt="LINE QR Code" 
                        className="w-[70%] h-full object-contain inline-flex content-center"
                        onError={(e) => {
                            console.error('QR Code image failed to load');
                            e.currentTarget.style.border = '2px solid red';
                        }}
                    />
                </div>
            </div>
        </div>
    );
}