# BigLeap Animation Component

一個可重用的BIG LEAP動畫組件，可以輕鬆地集成到任何網頁項目中。

## 功能特點

- 完全可自定義的動畫效果
- 響應式設計
- 簡單的API
- 支持自定義樣式和時間
- 提供完整的生命週期控制

## 安裝

1. 首先確保你的項目已經安裝了GSAP：

```bash
npm install gsap
```

2. 將BigLeap組件文件夾複製到你的項目中。

## 使用方法

1. 在你的HTML中添加一個容器：

```html
<div id="bigLeapContainer"></div>
```

2. 在你的JavaScript中導入並使用組件：

```javascript
import BigLeap from './path/to/BigLeap.js';

const container = document.getElementById('bigLeapContainer');
const bigLeap = new BigLeap(container, {
    backgroundColor: 'black',
    textColor: 'white',
    fontSize: '28px',
    animationDuration: 2,
    animationDelay: 1,
    onComplete: () => {
        console.log('Animation completed!');
    }
});

// 播放動畫
bigLeap.play();
```

## 配置選項

| 選項 | 類型 | 默認值 | 描述 |
|------|------|--------|------|
| backgroundColor | string | 'black' | 背景顏色 |
| textColor | string | 'white' | 文字顏色 |
| fontSize | string | '28px' | 文字大小 |
| animationDuration | number | 2 | 動畫持續時間（秒） |
| animationDelay | number | 1 | 動畫延遲時間（秒） |
| onComplete | function | () => {} | 動畫完成時的回調函數 |

## API

- `play()`: 播放動畫
- `pause()`: 暫停動畫
- `reset()`: 重置動畫
- `destroy()`: 銷毀組件

## 示例

查看 `example.html` 文件以獲取完整的使用示例。

## 瀏覽器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 注意事項

1. 確保在使用組件前已經加載了GSAP庫
2. 組件使用了現代JavaScript特性，可能需要適當的構建工具和polyfills
3. 為了最佳效果，建議在容器元素具有明確尺寸的情況下使用

## 許可證

MIT 