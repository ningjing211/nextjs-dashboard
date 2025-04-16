import gsap from 'gsap';
import './BigLeap.css';

class BigLeap {
    constructor(container, options = {}) {
        console.log('BigLeap constructor called with container:', container);
        this.container = container;
        this.options = {
            // 默認選項
            backgroundColor: 'black',
            textColor: 'white',
            fontSize: '28px',
            animationDuration: 2,
            animationDelay: 1,
            onComplete: () => {},
            ...options
        };

        try {
            this.init();
        } catch (error) {
            console.error('Error in BigLeap constructor:', error);
        }
    }

    init() {
        console.log('Initializing BigLeap...');
        // 創建DOM結構
        this.createElements();
        // 初始化GSAP動畫
        this.initAnimation();
    }

    createElements() {
        console.log('Creating elements...');
        this.container.innerHTML = `
            <div class="big-leap-intro">
                <div class="big-leap-bg"></div>
                <div class="big-leap-logo-placeholder">
                    <svg width="45" height="20" viewBox="0 0 45 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 0V20H23.9944V0H20ZM44.0085 3.99435V0H28.0028V20H44.0085V8.00282H36.0056V11.9972H40.0141V15.9915H32.0113V3.99435H44.0085ZM11.9972 8.00282V0H0V20H16.0056V8.00282H11.9972V8.00282ZM3.99435 3.99435H8.00282V8.00282H3.99435V3.99435ZM11.9972 16.0056H3.99435V11.9972H11.9972V16.0056Z" fill="white"/>
                    </svg>
                </div>
                <div class="big-leap-letters">
                    <div class="big-leap-letter">O</div>
                    <div class="big-leap-letter">N</div>
                    <div class="big-leap-letter">E</div>
                </div>
                <div class="big-leap-letters second-word">
                    <div class="big-leap-letter">O</div>
                    <div class="big-leap-letter">N</div>
                    <div class="big-leap-letter">E</div>
                </div>
            </div>
        `;

        // 獲取元素引用
        this.intro = this.container.querySelector('.big-leap-intro');
        this.bg = this.container.querySelector('.big-leap-bg');
        this.logo = this.container.querySelector('.big-leap-logo-placeholder');
        this.letters = this.container.querySelectorAll('.big-leap-letter');
        this.lettersContainer = this.container.querySelector('.big-leap-letters');
        this.secondLettersContainer = this.container.querySelector('.big-leap-letters.second-word');

        if (!this.intro || !this.bg || !this.logo || !this.letters.length || !this.lettersContainer || !this.secondLettersContainer) {
            throw new Error('Failed to create or find required elements');
        }

        // 應用自定義樣式
        this.bg.style.backgroundColor = this.options.backgroundColor;
        this.letters.forEach(letter => {
            letter.style.color = this.options.textColor;
            letter.style.fontSize = this.options.fontSize;
        });

        // 設置初始狀態
        gsap.set(this.logo, { opacity: 0, scale: 0.8, transformOrigin: 'center center' });
        gsap.set(this.letters, { opacity: 0, y: 20 });
        gsap.set(this.lettersContainer, { 
            position: 'absolute',
            transformOrigin: 'center center',
            x: 0,
            y: 0
        });
        gsap.set(this.bg, { opacity: 1 });

        console.log('Elements created successfully');
    }

    initAnimation() {
        console.log('Initializing animation...');
        try {
            this.timeline = gsap.timeline({
                paused: true,
                onComplete: () => {
                    console.log('Animation completed');
                    this.options.onComplete();
                }
            });

            // Logo 動畫
            this.timeline.to(this.logo, {
                opacity: 1,
                scale: 1.2,
                duration: 0.8,
                ease: 'power2.out'
            });

            // 第一個 "ONE" 的字母動畫
            const firstWordLetters = this.lettersContainer.querySelectorAll('.big-leap-letter');
            firstWordLetters.forEach((letter, index) => {
                this.timeline.to(letter, {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    ease: 'power4.out'
                }, `-=0.3`);
            });

            // 第二個 "ONE" 的字母動畫
            const secondWordLetters = this.secondLettersContainer.querySelectorAll('.big-leap-letter');
            secondWordLetters.forEach((letter, index) => {
                this.timeline.to(letter, {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    ease: 'power4.out'
                }, `-=0.3`);
            });

            // 停頓
            this.timeline.to({}, { duration: 1 });

            // Logo 移動到左上角
            this.timeline.to(this.logo, {
                top: '30px',
                left: '30px',
                scale: 0.7,
                duration: 1.2,
                ease: 'power3.inOut'
            });

            // 第一個 "ONE" 移動到左側
            this.timeline.to(this.lettersContainer, {
                top: '50%',
                left: '40px',
                y: '-50%',
                scale: 0.9,
                duration: 1.2,
                ease: 'power3.inOut'
            }, `-=1.2`);

            // 第二個 "ONE" 移動到右側
            this.timeline.to(this.secondLettersContainer, {
                top: '50%',
                right: '40px',
                y: '-50%',
                scale: 0.9,
                duration: 1.2,
                ease: 'power3.inOut'
            }, `-=1.2`);

            // 背景淡出
            this.timeline.to(this.bg, {
                opacity: 0,
                scale: 1.05,
                duration: 1,
                ease: 'power2.inOut'
            }, `-=0.8`);

            console.log('Animation timeline created successfully');
        } catch (error) {
            console.error('Error creating animation:', error);
            throw error;
        }
    }

    // 播放動畫
    play() {
        console.log('Playing animation...');
        try {
            // 確保時間軸從頭開始播放
            this.timeline.restart();
        } catch (error) {
            console.error('Error playing animation:', error);
        }
    }

    // 暫停動畫
    pause() {
        this.timeline.pause();
    }

    // 重置動畫
    reset() {
        this.timeline.restart();
    }

    // 銷毀組件
    destroy() {
        console.log('Destroying BigLeap...');
        try {
            if (this.timeline) {
                this.timeline.kill();
            }
            if (this.container) {
                this.container.innerHTML = '';
            }
        } catch (error) {
            console.error('Error destroying BigLeap:', error);
        }
    }
}

export default BigLeap; 