'use client';

import '@/app/ui/ideas/number_shows.css';
import CountUp from 'react-countup';



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
                            <div className="word">
                            Inspired
                            </div>

                        </div>

                        <div className="drop">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z"/>
                            </svg>

                            <CountUp
                            start={0}
                            end={365}
                            duration={3}
                            separator=" "
                            decimals={0}
                            decimal=","
                            prefix="重新燃起 "
                            suffix=" 個日子"
                            onEnd={() => console.log('Ended! 👏')}
                            onStart={() => console.log('    Started! 💨')}
                            >
                            {({ countUpRef, start }) => (
                                <div className="count-piece">
                                <span ref={countUpRef} />
                                <button onClick={start}></button>
                                </div>
                            )}
                            </CountUp>

                            <p>
                            每一天我們都仔細地打造日常的細節。</p>
                            <p>清潔梳理，照顧空間與人的需要</p>
                        </div>

                        <div className="drop">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.737 8.737a21.49 21.49 0 0 1 3.308-2.724m0 0c3.063-2.026 5.99-2.641 7.331-1.3 1.827 1.828.026 6.591-4.023 10.64-4.049 4.049-8.812 5.85-10.64 4.023-1.33-1.33-.736-4.218 1.249-7.253m6.083-6.11c-3.063-2.026-5.99-2.641-7.331-1.3-1.827 1.828-.026 6.591 4.023 10.64m3.308-9.34a21.497 21.497 0 0 1 3.308 2.724m2.775 3.386c1.985 3.035 2.579 5.923 1.248 7.253-1.336 1.337-4.245.732-7.295-1.275M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                            </svg>


                            <CountUp
                            start={0}
                            end={9366}
                            duration={3}
                            separator=" "
                            decimals={0}
                            decimal=","
                            prefix=""
                            suffix=" 人感到振奮"
                            onEnd={() => console.log('Ended! 👏')}
                            onStart={() => console.log('    Started! 💨')}
                            >
                            {({ countUpRef, start }) => (
                                <div className="count-piece">
                                <span ref={countUpRef} />
                                <button onClick={start}></button>
                                </div>
                            )}
                            </CountUp>

                            <p>
                            當我挑戰著自己、學理性和感性，</p>
                            <p>才又想起這個回憶。</p>
                        </div>
                        
                        <div className="count-group">
                            <div className="icon-word">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 5 9 4V3m5 2 1-1V3m-3 6v11m0-11a5 5 0 0 1 5 5m-5-5a5 5 0 0 0-5 5m5-5a4.959 4.959 0 0 1 2.973 1H15V8a3 3 0 0 0-6 0v2h.027A4.959 4.959 0 0 1 12 9Zm-5 5H5m2 0v2a5 5 0 0 0 10 0v-2m2.025 0H17m-9.975 4H6a1 1 0 0 0-1 1v2m12-3h1.025a1 1 0 0 1 1 1v2M16 11h1a1 1 0 0 0 1-1V8m-9.975 3H7a1 1 0 0 1-1-1V8"/>
                                </svg>
                            </div>     
                            <div className="count-item">
                                <CountUp
                                start={0}
                                end={770}
                                duration={3}
                                separator=" "
                                decimals={0}
                                decimal=","
                                prefix="總共鼓舞了 "
                                suffix=" 個靈魂"
                                onEnd={() => console.log('Ended! 👏')}
                                onStart={() => console.log('    Started! 💨')}
                                >
                                {({ countUpRef, start }) => (
                                    <div className="count-piece">
                                    <span ref={countUpRef} />
                                    <button onClick={start}></button>
                                    </div>
                                )}
                                </CountUp>
                            </div>
                        </div>     

                    </div>
                </section>
            </div>
    

        

        {/* <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M12 8a1 1 0 0 0-1 1v10H9a1 1 0 1 0 0 2h11a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-8Zm4 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" clip-rule="evenodd"/>
        <path fill-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v6h6V9a3 3 0 0 1 3-3h8c.35 0 .687.06 1 .17V5a2 2 0 0 0-2-2H5Zm4 10H3v2a2 2 0 0 0 2 2h4v-4Z" clip-rule="evenodd"/>
        </svg>
         */}

        {/* <CountUp
        start={0}
        end={681}
        duration={3}
        separator=" "
        decimals={0}
        decimal=","
        prefix="串連 "
        suffix=" 雙手"
        onEnd={() => console.log('Ended! 👏')}
        onStart={() => console.log('    Started! 💨')}
        >
        {({ countUpRef, start }) => (
            <div className="count-piece">
            <span ref={countUpRef} />
            <button onClick={start}></button>
            </div>
        )}
        </CountUp> */}

        
        



        {/* <CountUp
        start={0}
        end={8}
        duration={3}
        separator=" "
        decimals={0}
        decimal=","
        prefix="開創 "
        suffix=" 個嶄新的平台"
        onEnd={() => console.log('Ended! 👏')}
        onStart={() => console.log('    Started! 💨')}
        >
        {({ countUpRef, start }) => (
            <div className="count-piece">
            <span ref={countUpRef} />
            <button onClick={start}></button>
            </div>
        )}
        </CountUp>

        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12v4m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
        </svg> */}
        


        </div>
)};