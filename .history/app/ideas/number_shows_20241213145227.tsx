'use client';

import '@/app/ui/ideas/number_shows.css';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const CountUp = dynamic(() => import('react-countup'), { ssr: false });

export default function NumberShows() {
    return (
        <div className="count-section">
            <div>
                <link
                    href="https://fonts.googleapis.com"
                    rel="preconnect"
                />
                <link
                    crossOrigin=""
                    href="https://fonts.gstatic.com"
                    rel="preconnect"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap"
                    rel="stylesheet"
                />
                <section className="cards">
                    <div className="container">
                        <div className="drop">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M15.907 11.998 10.332 9.23a.9.9 0 0 1-.16-.037l-.018-.007v6.554c0 .017.008.034.01.051l2.388-2.974 3.355-.82Z"/>
                            <path d="m11.463 4.054 5.579 3.323A4.02 4.02 0 0 1 18.525 9c.332.668.47 1.414.398 2.155a3.07 3.07 0 0 1-.745 1.65 3.108 3.108 0 0 1-1.55.951c-.022.007-.045.005-.07.01-.062.03-.126.057-.191.08l-2.72.667-1.992 2.48c-.18.227-.41.409-.67.534.047.034.085.077.137.107a2.05 2.05 0 0 0 1.995.035c.592-.33 2.15-1.201 4.636-2.892l.28-.19c1.328-.895 3.616-2.442 3.967-4.215a9.94 9.94 0 0 0-1.713-4.154 10.027 10.027 0 0 0-3.375-2.989 10.107 10.107 0 0 0-8.802-.418c1.162.287 2.287.704 3.354 1.243Z"/>
                            <path d="M5.382 17.082v-6.457a3.7 3.7 0 0 1 .45-1.761 3.733 3.733 0 0 1 1.238-1.34 3.915 3.915 0 0 1 3.433-.245c.176.03.347.084.508.161l5.753 2.856c.082.05.161.105.236.165a2.128 2.128 0 0 0-.953-1.455l-5.51-3.284c-1.74-.857-3.906-1.523-5.244-1.097a9.96 9.96 0 0 0-2.5 3.496 9.895 9.895 0 0 0 .283 8.368 9.973 9.973 0 0 0 2.73 3.322 17.161 17.161 0 0 1-.424-2.729Z"/>
                            <path d="m19.102 16.163-.272.183c-2.557 1.74-4.169 2.64-4.698 2.935a4.083 4.083 0 0 1-2 .53 3.946 3.946 0 0 1-1.983-.535 3.788 3.788 0 0 1-1.36-1.361 3.752 3.752 0 0 1-.51-1.85 1.812 1.812 0 0 1-.043-.26V9.143c0-.024.009-.046.01-.07-.056.02-.11.043-.162.07a1.796 1.796 0 0 0-.787 1.516v6.377a10.67 10.67 0 0 0 1.113 4.27 10.11 10.11 0 0 0 8.505-.53 10.022 10.022 0 0 0 3.282-2.858 9.936 9.936 0 0 0 1.75-3.97 19.615 19.615 0 0 1-2.845 2.216Z"/>
                        </svg>

                            <CountUp
                                start={0}
                                end={166}
                                duration={90}
                                separator=" "
                                decimals={0}
                                decimal=","
                                prefix="種植照料著 "
                                suffix=" 個專案"
                                onEnd={() => console.log('Ended! 👏')}
                                onStart={() => console.log('Started! 💨')}
                            >
                                {({ countUpRef, start }) => {
                                    useEffect(() => {
                                        start();
                                    }, []);
                                    return (
                                        <div className="count-piece">
                                            <span ref={countUpRef} />
                                        </div>
                                    );
                                }}
                            </CountUp>

                            <p>就像農夫在土地上播下種子一樣</p>
                            <p>善意、純真的意念以及清晰的目標</p>
                        </div>

                        <div className="drop">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor" fill-rule="evenodd" d="M7.29395 11.8039c0-3.96638 2.13959-6.41723 3.53335-8.01378.6733-.7712 1.1725-1.34306 1.1725-1.79012 0 .44706.4993 1.01892 1.1725 1.79013 1.3938 1.59654 3.5334 4.04739 3.5334 8.01377 0 4.3266-2.7501 6.9507-4.0764 7.7654L12.3701 22h-.7071l-.2906-2.4295c-1.3255-.8132-4.07845-3.4378-4.07845-7.7666Zm4.06395 6.7007.6419-9.44578.649 9.44578-.649.7503-.6419-.7503Z" clip-rule="evenodd"/>
                        </svg>


                            <CountUp
                                start={0}
                                end={365}
                                duration={90}
                                separator=" "
                                decimals={0}
                                decimal=","
                                prefix="重新燃起 "
                                suffix=" 個日子"
                                onEnd={() => console.log('Ended! 👏')}
                                onStart={() => console.log('Started! 💨')}
                            >
                                {({ countUpRef, start }) => {
                                    useEffect(() => {
                                        start();
                                    }, []);
                                    return (
                                        <div className="count-piece">
                                            <span ref={countUpRef} />
                                        </div>
                                    );
                                }}
                            </CountUp>

                            <p>每一天我們都仔細地打造日常的細節。</p>
                            <p>清潔梳理，照顧空間與人的需要</p>
                        </div>

                        <div className="drop">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M8.737 8.737a21.49 21.49 0 0 1 3.308-2.724m0 0c3.063-2.026 5.99-2.641 7.331-1.3 1.827 1.828.026 6.591-4.023 10.64-4.049 4.049-8.812 5.85-10.64 4.023-1.33-1.33-.736-4.218 1.249-7.253m6.083-6.11c-3.063-2.026-5.99-2.641-7.331-1.3-1.827 1.828-.026 6.591 4.023 10.64m3.308-9.34a21.497 21.497 0 0 1 3.308 2.724m2.775 3.386c1.985 3.035 2.579 5.923 1.248 7.253-1.336 1.337-4.245.732-7.295-1.275M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                            </svg>

                            <CountUp
                                start={0}
                                end={9366}
                                duration={90}
                                delay={2}
                                separator=" "
                                decimals={0}
                                decimal=","
                                suffix=" 人感到振奮"
                                onEnd={() => console.log('Ended! 👏')}
                                onStart={() => console.log('Started! 💨')}
                            >
                                {({ countUpRef, start }) => {
                                    useEffect(() => {
                                        start();
                                    }, []);
                                    return (
                                        <div className="count-piece">
                                            <span ref={countUpRef} />
                                        </div>
                                    );
                                }}
                            </CountUp>

                            <p>當我挑戰著自己、學理性和感性，</p>
                                <p>才又想起這個回憶。</p>
                        </div>
                        
                        <div className="count-group">
                            <div className="icon-word">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
                            </svg>


                            </div>     
                            <div className="count-item">
                                <CountUp
                                    start={0}
                                    end={770}
                                    duration={90}
                                    delay={2}
                                    separator=" "
                                    decimals={0}
                                    decimal=","
                                    prefix="總共鼓舞了 "
                                    suffix=" 個靈魂"
                                    onEnd={() => console.log('Ended! 👏')}
                                    onStart={() => console.log('Started! 💨')}
                                >
                                    {({ countUpRef, start }) => {
                                        useEffect(() => {
                                            start();
                                        }, []);
                                        return (
                                            <div className="count-piece">
                                                <span ref={countUpRef} />
                                            </div>
                                        );
                                    }}
                                </CountUp>
                            </div>
                        </div>     
                    </div>
                </section>
            </div>
        </div>
    );
}
